'use client';
import React, { useState } from "react";
import init, { greet, Kmeans } from "toymlrs";
import {
  Box,
  Button,
  NumberInput,
  NumberInputField,
  FormControl,
  FormLabel,
  VStack,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

// Utility function to generate random numbers from a Gaussian distribution
const randomGaussian = (mean: number, stddev: number) => {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random(); // Convert [0,1) to (0,1)
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
  const [numPoints, setNumPoints] = useState<number>(10);
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
          randomGaussian(center[0], 5), // standard deviation is 5 for spread
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

  return (
    <Box p={5}>
      <VStack spacing={4} align="flex-start">
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
        <Button colorScheme="teal" onClick={runKmeans}>
          Run K-means
        </Button>

        {results.length > 0 && (
          <Box w="100%">
            <Text fontSize="xl" mb={2}>
              Cluster Results
            </Text>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Point</Th>
                  <Th>Cluster Label</Th>
                </Tr>
              </Thead>
              <Tbody>
                {results.map((result, index) => (
                  <Tr key={index}>
                    <Td>{`(${result.point[0].toFixed(2)}, ${result.point[1].toFixed(2)})`}</Td>
                    <Td>{result.label}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default KmeansWasmDemo;