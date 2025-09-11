'use client';

import { LockClosedIcon, LockOpenIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

import {
  FeatureItem,
  FeatureSection,
  FeatureTitle,
} from '@/app/components/FeatureSection';

const featureTitle: FeatureTitle = {
  name: 'Clustering',
  description: 'Clustering algorithm',
};

const featureItems: FeatureItem[] = [
  {
    name: 'K-means',
    description: 'K-means clustering algorithm',
    icon: LockOpenIcon,
    path: '/kmeans',
    iconColor: 'bg-green-600',
  },
  {
    name: 'TODO: Hierarchical',
    description: 'Agnes&Diana clustering algorithm',
    icon: LockClosedIcon,
    path: '#',
    iconColor: 'bg-red-300',
  },
  {
    name: 'TODO: DBSCAN',
    description: 'DBSCAN clustering algorithm',
    icon: LockClosedIcon,
    path: '#',
    iconColor: 'bg-red-300',
  },
];

export default function ToyMLPage() {
  const pathname = usePathname() || '/';

  return (
    <FeatureSection
      featureTitle={featureTitle}
      featureItems={featureItems}
      rootPath={pathname}
    />
  );
}
