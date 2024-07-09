"use client";

import { Heading, Center } from '@chakra-ui/react'

import KmeansPlaygroundDemo from "@/app/toyml/clustering/kmeans/playground";
import CodeEditor from "@/app/components/editor/CodeEditor";
import { PythonProvider } from 'react-py'


const packages = {
  official: ['asciitree'],
  micropip: ['toyml'],
}


export default function KmeansPage() {
  return (
    <>
      <PythonProvider packages={packages}>
        <main>
          <Center>
            <Heading>Kmeans</Heading>
          </Center>
          <KmeansPlaygroundDemo />
        </main>
    </PythonProvider>
    </>
  );
}