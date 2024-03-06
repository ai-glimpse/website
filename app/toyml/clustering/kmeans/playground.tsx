'use client'

import CodeEditor from "@/app/components/editor/CodeEditor"

export const snippets = [
  `from toyml.clustering.kmeans_clustering import Kmeans


def run():
    k: int = 2
    dataset = [[1.0, 2], [1, 4], [1, 0], [10, 2], [10, 4], [10, 0]]
    
    kmeans = Kmeans(dataset, k)
    kmeans.fit()
    kmeans.print_cluster()
    test_input = [0.0, 0.0]
    test_output = kmeans.predict(test_input)
    print(f"input: {test_input} -> output: {test_output}")

run()`,
]

export default function KmeansPlaygroundDemo() {
  return (
    <CodeEditor code={snippets[0]}/>
  )
}