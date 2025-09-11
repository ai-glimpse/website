'use client';

import { LockClosedIcon } from '@heroicons/react/24/outline';
import { usePathname } from "next/navigation";

import { FeatureItem, FeatureSection, FeatureTitle } from '@/app/components/FeatureSection';

const featureTitle: FeatureTitle = {
  name: "ToyStat",
  description: "Learning statistics from scratch!"
}

const featureItems: FeatureItem[] = [

  {
    name: 'TODO: Distribution',
    description:
      'The distributions of data samples',
    icon: LockClosedIcon,
    path: '#',
    iconColor: 'bg-red-300',
  },
  {
    name: 'TODO: Agreement',
    description:
      'The agreement measurement of data samples',
    icon: LockClosedIcon,
    path: '#',
    iconColor: 'bg-red-300',
  },
]

export default function ToyStatPage() {
  const pathname = usePathname() || "/";

  return (
    <>
    <FeatureSection featureTitle={featureTitle} featureItems={featureItems} rootPath={pathname}/>
    </>
  )
}