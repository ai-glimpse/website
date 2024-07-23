"use client";

import { Heading, Center } from "@chakra-ui/react";

import KmeansPlaygroundDemo from "@/app/toyml/clustering/kmeans/playground";
import CodeEditor from "@/app/components/editor/CodeEditor";
import { PythonProvider } from "react-py";

export default function KmeansPage() {
  return (
    <>
      <main>
        <Center>
          <Heading>Kmeans</Heading>
        </Center>
        <div className="w-[60%] mx-auto">
          <KmeansPlaygroundDemo />
        </div>
      </main>
    </>
  );
}
