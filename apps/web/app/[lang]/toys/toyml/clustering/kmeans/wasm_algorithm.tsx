'use client';

import 'chart.js/auto';

import { Chart, registerables, TooltipItem } from 'chart.js';
import { ChevronDown } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';
import { Scatter } from 'react-chartjs-2';
import init, { CentroidsInitMethod, Kmeans } from 'toymlrs';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Type definitions
interface DataPoint {
  x: number;
  y: number;
}

interface ChartDataset {
  label: string;
  data: DataPoint[];
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
  pointRadius: number;
  pointHoverRadius: number;
}

// Register Chart.js components
Chart.register(...registerables);

// Utility function to generate random numbers from a Gaussian distribution
const randomGaussian = (mean: number, stddev: number) => {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return (
    mean + stddev * Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
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

  const generateSeparablePoints = (
    k: number,
    numPoints: number
  ): number[][] => {
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

  const runKmeans = useCallback(async () => {
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
  }, [kValue, centroidsInitMethodValue, numPoints]);

  // Auto-run k-means algorithm when component mounts
  useEffect(() => {
    runKmeans();
  }, [runKmeans]); // Include runKmeans in dependency array

  // Define a clean color palette for clusters
  const clusterColors = [
    { bg: 'rgba(59, 130, 246, 0.7)', border: 'rgb(59, 130, 246)' }, // Blue
    { bg: 'rgba(239, 68, 68, 0.7)', border: 'rgb(239, 68, 68)' }, // Red
    { bg: 'rgba(34, 197, 94, 0.7)', border: 'rgb(34, 197, 94)' }, // Green
    { bg: 'rgba(168, 85, 247, 0.7)', border: 'rgb(168, 85, 247)' }, // Purple
    { bg: 'rgba(249, 115, 22, 0.7)', border: 'rgb(249, 115, 22)' }, // Orange
    { bg: 'rgba(236, 72, 153, 0.7)', border: 'rgb(236, 72, 153)' }, // Pink
    { bg: 'rgba(14, 165, 233, 0.7)', border: 'rgb(14, 165, 233)' }, // Sky
    { bg: 'rgba(132, 204, 22, 0.7)', border: 'rgb(132, 204, 22)' }, // Lime
  ];

  const chartData = {
    datasets: Object.values(
      results.reduce(
        (acc, { point, label }) => {
          const colorIndex = label % clusterColors.length;
          const colors = clusterColors[colorIndex];

          acc[label] = acc[label] || {
            label: `Cluster ${label + 1}`,
            data: [],
            backgroundColor: colors.bg,
            borderColor: colors.border,
            borderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6,
          };
          acc[label].data.push({ x: point[0], y: point[1] });
          return acc;
        },
        {} as Record<string, ChartDataset>
      )
    ),
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
          label: (context: TooltipItem<'scatter'>) => {
            const raw = context.raw as DataPoint;
            return `(${raw.x.toFixed(2)}, ${raw.y.toFixed(2)})`;
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
    <div className="not-prose my-6">
      <Card className="border p-6">
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="k-value">Number of Clusters (k)</Label>
              <Input
                id="k-value"
                type="number"
                value={kValue}
                min={1}
                onChange={(e) => setKValue(Number(e.target.value))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="num-points">Number of Points</Label>
              <Input
                id="num-points"
                type="number"
                value={numPoints}
                min={1}
                onChange={(e) => setNumPoints(Number(e.target.value))}
              />
            </div>
            <div className="space-y-2">
              <Label>Initialization Method</Label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    {centroidsInitMethodValue}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  <DropdownMenuItem
                    onClick={() =>
                      setCentroidsInitMethodValue(
                        'random' as CentroidsInitMethod
                      )
                    }
                  >
                    Random
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() =>
                      setCentroidsInitMethodValue(
                        'kmeans++' as CentroidsInitMethod
                      )
                    }
                  >
                    Kmeans++
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <Button onClick={runKmeans} className="w-full">
            Run K-means Algorithm
          </Button>

          <div className="bg-card h-[400px] rounded-lg border p-4">
            {results.length > 0 ? (
              <Scatter data={chartData} options={chartOptions} />
            ) : (
              <div className="text-muted-foreground flex h-full items-center justify-center">
                Click &quot;Run K-means Algorithm&quot; to generate
                visualization
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default KmeansWasmDemo;
