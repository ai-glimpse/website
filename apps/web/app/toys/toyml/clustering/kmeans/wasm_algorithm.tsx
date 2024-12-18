'use client';

import React, { useState } from 'react';
import init, { CentroidsInitMethod, Kmeans } from 'toymlrs';
import {
  Box,
  Button,
  NumberInput,
  NumberInputField,
  FormControl,
  FormLabel,
  VStack,
  SimpleGrid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Scatter } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import 'chart.js/auto';

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
    <Box
      p={5}
      bg="gray.50"
      maxW="800px"
      mx="auto"
      borderRadius="md"
      boxShadow="lg"
    >
      <VStack spacing={6} align="flex-start" width="100%">
        <SimpleGrid columns={3} spacing={6} width="100%">
          <FormControl>
            <FormLabel color="teal.800">Number of Clusters (k)</FormLabel>
            <NumberInput
              value={kValue}
              min={1}
              onChange={(valueString) => setKValue(Number(valueString))}
              focusBorderColor="teal.400"
              borderColor="teal.300"
            >
              <NumberInputField borderRadius="md" boxShadow="sm" />
            </NumberInput>
          </FormControl>
          <FormControl>
            <FormLabel color="teal.800">Number of Points</FormLabel>
            <NumberInput
              value={numPoints}
              min={1}
              onChange={(valueString) => setNumPoints(Number(valueString))}
              focusBorderColor="teal.400"
              borderColor="teal.300"
            >
              <NumberInputField borderRadius="md" boxShadow="sm" />
            </NumberInput>
          </FormControl>

          <FormControl>
            <FormLabel color="teal.800">Initialization Centroids</FormLabel>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                borderColor="teal.300"
              >
                {centroidsInitMethodValue || 'Select Initialization Method'}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => setCentroidsInitMethodValue('random' as CentroidsInitMethod)}>
                  Random
                </MenuItem>
                <MenuItem
                  onClick={() => setCentroidsInitMethodValue('kmeans++' as CentroidsInitMethod)}
                >
                  Kmeans++
                </MenuItem>
              </MenuList>
            </Menu>
          </FormControl>
        </SimpleGrid>
        <Button
          colorScheme="teal"
          variant="solid"
          size="lg"
          width="100%"
          borderRadius="full"
          _hover={{ boxShadow: 'md', transform: 'scale(1.05)' }}
          onClick={runKmeans}
        >
          Run K-means
        </Button>

        {results.length > 0 && (
          <Box w="100%" h={500}>
            <Scatter data={chartData} options={chartOptions} />
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default KmeansWasmDemo;