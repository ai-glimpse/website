'use client';

import React, { useState } from 'react';
import init, { Kmeans } from 'toymlrs';
import {
  Box,
  Button,
  NumberInput,
  NumberInputField,
  FormControl,
  FormLabel,
  VStack,
  SimpleGrid,
} from '@chakra-ui/react';
import { Scatter } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

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
    console.log("ToymlRS initialized");

    const options = {
      k: kValue,
      maxIter: 100,
      randomSeed: 42,
    };

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
          label: `Cluster ${label}`,
          data: [],
          backgroundColor: `hsla(${(label * 360) / kValue}, 70%, 60%, 0.8)`, // More refined color palette
          borderColor: `hsla(${(label * 360) / kValue}, 70%, 50%, 1)`,
          borderWidth: 1,
        };
        acc[label].data.push({ x: point[0], y: point[1] });
        return acc;
      }, [] as any)
      .filter((d) => d), // Filter out empty slots
  };

  return (
    <Box p={5}>
      <VStack spacing={4} align="flex-start">
        <SimpleGrid columns={2} spacing={4} width="100%">
          <FormControl>
            <FormLabel>Number of Clusters (k)</FormLabel>
            <NumberInput
              value={kValue}
              min={1}
              onChange={(valueString) => setKValue(Number(valueString))}
            >
              <NumberInputField />
            </NumberInput>
          </FormControl>
          <FormControl>
            <FormLabel>Number of Points</FormLabel>
            <NumberInput
              value={numPoints}
              min={1}
              onChange={(valueString) => setNumPoints(Number(valueString))}
            >
              <NumberInputField />
            </NumberInput>
          </FormControl>
        </SimpleGrid>
        <Button colorScheme="teal" onClick={runKmeans}>
          Run K-means
        </Button>

        {results.length > 0 && (
          <Box w="100%" h={400}>
            <Scatter data={chartData} options={{ responsive: true }} />
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default KmeansWasmDemo;