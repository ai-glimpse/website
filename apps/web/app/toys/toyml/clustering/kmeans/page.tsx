'use client';

import KmeansPlaygroundDemo from '@/app/toys/toyml/clustering/kmeans/playground';

export default function KmeansPage() {
  return (
    <>
      <main>
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold">Kmeans</h1>
        </div>
        <div className="mx-auto w-[60%]">
          <KmeansPlaygroundDemo />
        </div>
      </main>
    </>
  );
}
