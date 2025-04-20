'use client';

import React, { useState } from 'react';
import init, { CentroidsInitMethod, Kmeans } from 'toymlrs';
import { Scatter } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import 'chart.js/auto';
import { ChevronDown } from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Register Chart.js components
Chart.register(...registerables);

// Utility function to generate random numbers from a Gaussian distribution
const randomGaussian = (mean: number, stddev: number) => {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return (
    mean +
    stddev *
    Math.sqrt(-2.0 * Math.log(u)) *
    Math.cos(2.0 * Math.PI * v)
  );
};

const KmeansWasmDemo: React.FC = () => {
  const [kValue, setKValue] = useState<number>(2);
  const [numPoints, setNumPoints] = useState<number>(50);
  const [centroidsInitMethodValue, setCentroidsInitMethodValue] =
    useState<CentroidsInitMethod>('kmeans++' as CentroidsInitMethod);
  const [results, setResults] = useState<{ point: number[]; label: number }[]>(
    []
  );

  const generateSeparablePoints = (k: number, numPoints: number): number[][] => {
    const pointsPerCluster = Math.floor(numPoints / k);
    const points: number[][] = [];
    const clusterCenters = Array.from({ length: k }, () => [
      Math.random() * 100,
      Math.random() * 100,
    ]);

    for (const center of clusterCenters) {
      for (let i = 0; i < pointsPerCluster; i++) {
        const point = [
          randomGaussian(center[0], 5),
          randomGaussian(center[1], 5),
        ];
        points.push(point);
      }
    }

    // Handle any remaining points
    while (points.length < numPoints) {
      const randomCenter = clusterCenters[Math.floor(Math.random() * k)];
      const point = [
        randomGaussian(randomCenter[0], 5),
        randomGaussian(randomCenter[1], 5),
      ];
      points.push(point);
    }

    return points;
  };

  const runKmeans = async () => {
    await init();
    console.log('Toyml in Rust(toymlrs): WASM initialized');

    const options = {
      k: kValue,
      centroidsInitMethod: centroidsInitMethodValue,
      maxIter: 100,
      randomSeed: 42,
    };
    console.log('Options', options);

    const kmeans = new Kmeans(options);

    const points = generateSeparablePoints(kValue, numPoints);
    const labels = kmeans.fit_predict(points);

    const resultPoints = points.map((point, index) => ({
      point,
      label: labels[index],
    }));

    setResults(resultPoints);
  };

  const chartData = {
    datasets: results
      .reduce((acc, { point, label }) => {
        acc[label] = acc[label] || {
          label: `Cluster ${label + 1}`,
          data: [],
          backgroundColor: `hsla(${(label * 360) / kValue}, 65%, 65%, 0.7)`,
          borderColor: `hsla(${(label * 360) / kValue}, 65%, 50%, 1)`,
          borderWidth: 2,
        };
        acc[label].data.push({ x: point[0], y: point[1] });
        return acc;
      }, [] as any)
      .filter((d: any) => d),
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const { x, y } = context.raw;
            return `(${x.toFixed(2)}, ${y.toFixed(2)})`;
          },
        },
      },
      title: {
        display: true,
        text: 'K-means Clustering Visualization',
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'X-coordinate',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Y-coordinate',
        },
      },
    },
  };

  return (
    <Card className="mx-auto max-w-[800px] rounded-md bg-gray-50 p-5 shadow-lg">
      <div className="flex w-full flex-col space-y-6">
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col space-y-2">
            <Label className="text-teal-800">Number of Clusters (k)</Label>
            <Input
              type="number"
              value={kValue}
              min={1}
              onChange={(e) => setKValue(Number(e.target.value))}
              className="rounded-md border-teal-300 shadow-sm focus:border-teal-400 focus:ring-teal-400"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label className="text-teal-800">Number of Points</Label>
            <Input
              type="number"
              value={numPoints}
              min={1}
              onChange={(e) => setNumPoints(Number(e.target.value))}
              className="rounded-md border-teal-300 shadow-sm focus:border-teal-400 focus:ring-teal-400"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <Label className="text-teal-800">Initialization Centroids</Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex w-full justify-between rounded-md border-teal-300 bg-white text-left font-normal hover:bg-teal-50 hover:border-teal-400"
                >
                  {centroidsInitMethodValue || 'Select Initialization Method'}
                  <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="border-teal-300 shadow-md">
                <DropdownMenuItem
                  onClick={() => setCentroidsInitMethodValue('random' as CentroidsInitMethod)}
                  className="hover:bg-teal-50 focus:bg-teal-100"
                >
                  Random
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setCentroidsInitMethodValue('kmeans++' as CentroidsInitMethod)}
                  className="hover:bg-teal-50 focus:bg-teal-100"
                >
                  Kmeans++
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <Button
          onClick={runKmeans}
          className="w-full rounded-md bg-teal-500 py-2 text-white hover:bg-teal-600 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          Run K-means
        </Button>
        <div className="h-[400px] w-full rounded-md border border-teal-200 bg-white p-4 shadow-inner">
          {results.length > 0 ? (
            <Scatter data={chartData} options={chartOptions} />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-gray-500">
              Click "Run K-means" to generate a visualization
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default KmeansWasmDemo;