'use client';

import FlyoutNavbar from "@/app/components/FlyoutNavbar";
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, LockOpenIcon } from '@heroicons/react/24/outline';
import { FeatureTitle, FeatureItem, FeatureSection } from '@/app/components/FeatureSection';
import {usePathname} from "next/navigation";

const featureTitle: FeatureTitle = {
  name: "ToyDL",
  description: "Learning deep learning from scratch!"
}

const featureItems: FeatureItem[] = [

  {
    name: 'TODO: Mini-Torch',
    description:
      'Implementation if mini-torch!',
    icon: LockClosedIcon,
    path: '#',
    iconColor: 'bg-red-300',
  },
  {
    name: 'TODO: CNN',
    description:
      'CNN implementation by mini-torch',
    icon: LockClosedIcon,
    path: '#',
    iconColor: 'bg-red-300',
  },

]

export default function ToyDLPage() {
  let pathname = usePathname() || "/";

  return (
    <>
    {/*<FlyoutNavbar/>*/}
    <FeatureSection featureTitle={featureTitle} featureItems={featureItems} rootPath={pathname}/>
    </>
  )
}