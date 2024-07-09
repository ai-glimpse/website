'use client';


import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, LockOpenIcon } from '@heroicons/react/24/outline';
import { FeatureTitle, FeatureItem, FeatureSection } from '@/app/components/FeatureSection';
import {usePathname} from "next/navigation";


const featureTitle: FeatureTitle = {
  name: "Clustering",
  description: "Clustering algorithm"
}


const featureItems: FeatureItem[] = [

  {
    name: 'K-means',
    description:
      'K-means clustering algorithm',
    icon: LockOpenIcon,
    path: '/kmeans',
    iconColor: "bg-green-600"
  },
  {
    name: 'TODO: Hierarchical',
    description:
      'Agnes&Diana clustering algorithm',
    icon: LockClosedIcon,
    path: '#',
    iconColor: "bg-red-300"
  },
  {
    name: 'TODO: DBSCAN',
    description:
      'DBSCAN clustering algorithm',
    icon: LockClosedIcon,
    path: '#',
    iconColor: "bg-red-300"
  },
]

export default function ToyMLPage() {
  let pathname = usePathname() || "/";

  return (
    <FeatureSection featureTitle={featureTitle} featureItems={featureItems} rootPath={pathname}/>
  )
}