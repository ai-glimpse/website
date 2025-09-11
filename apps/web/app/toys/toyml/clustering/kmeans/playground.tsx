'use client';

import dynamic from 'next/dynamic';
import { PythonProvider } from 'react-py';

const CodeEditor = dynamic(() => import('@/app/components/editor/CodeEditor'), {
  ssr: false,
});

export const snippets = [
  `from toyml.clustering import Kmeans


def run():
    dataset = [[1.0, 2.0], [1.0, 4.0], [1.0, 0.0], 
               [10.0, 2.0], [10.0, 4.0], [11.0, 0.0]]
    # train
    kmeans = Kmeans(k=2, random_seed=42).fit(dataset)
    print(f"clusters: {kmeans.clusters_}")
    # predict
    x = [0, 1]
    print(f"predict {x}: {kmeans.predict(x)}")

run()`,
];

const packages = {
  official: ['asciitree'],
  micropip: ['toyml'],
};

export default function KmeansPlaygroundDemo() {
  return (
    <PythonProvider packages={packages}>
      <CodeEditor code={snippets[0]} />
    </PythonProvider>
  );
}
