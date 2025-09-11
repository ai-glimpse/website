'use client';

import { LockClosedIcon, LockOpenIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

import {
  FeatureItem,
  FeatureSection,
  FeatureTitle,
} from '@/app/components/FeatureSection';

const featureTitle: FeatureTitle = {
  name: 'ToyML',
  description: 'Learning machine learning from scratch!',
};

const featureItems: FeatureItem[] = [
  {
    name: 'Clustering',
    description:
      'Cluster analysis or clustering is the task of grouping a set of objects in such a way that objects ' +
      'in the same group (called a cluster) are more similar (in some sense) ' +
      'to each other than to those in other groups (clusters).',
    icon: LockOpenIcon,
    path: 'clustering',
    iconColor: 'bg-green-600',
  },
  {
    name: 'TODO: Classification',
    description:
      'Classification is the problem of identifying which of a set of categories (sub-populations) ' +
      'an observation (or observations) belongs to',
    icon: LockClosedIcon,
    path: '#',
    iconColor: 'bg-red-300',
  },
  {
    name: 'TODO: Anomaly Detection',
    description:
      'Anomaly detection ' +
      'is generally understood to be the identification of rare items, ' +
      'events or observations which deviate significantly from the majority of the data and do not conform ' +
      'to a well defined notion of normal behaviour',
    icon: LockClosedIcon,
    path: '#',
    iconColor: 'bg-red-300',
  },
  {
    name: 'TODO: Association Analysis',
    description:
      'A rule-based machine learning method for discovering interesting relations between variables ' +
      'in large databases. It is intended to identify strong rules discovered in databases using some ' +
      'measures of interestingness.',
    icon: LockClosedIcon,
    path: '#',
    iconColor: 'bg-red-300',
  },
];

export default function ToyMLPage() {
  const pathname = usePathname() || '/';

  return (
    <>
      <FeatureSection
        featureTitle={featureTitle}
        featureItems={featureItems}
        rootPath={pathname}
      />
    </>
  );
}
