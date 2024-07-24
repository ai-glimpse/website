'use client';

import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, LockOpenIcon } from '@heroicons/react/24/outline';
import { FeatureTitle, FeatureItem, FeatureSection } from '@/app/components/FeatureSection';
import {usePathname} from "next/navigation";

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
  let pathname = usePathname() || "/";

  return (
    <>
    <FeatureSection featureTitle={featureTitle} featureItems={featureItems} rootPath={pathname}/>
    </>
  )
}