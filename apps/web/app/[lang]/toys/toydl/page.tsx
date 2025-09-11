'use client';

import { LockClosedIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

import {
  FeatureItem,
  FeatureSection,
  FeatureTitle,
} from '@/app/[lang]/components/FeatureSection';

const featureTitle: FeatureTitle = {
  name: 'ToyDL',
  description: 'Learning deep learning from scratch!',
};

const featureItems: FeatureItem[] = [
  {
    name: 'TODO: Mini-Torch',
    description: 'Implementation if mini-torch!',
    icon: LockClosedIcon,
    path: '#',
    iconColor: 'bg-red-300',
  },
  {
    name: 'TODO: CNN',
    description: 'CNN implementation by mini-torch',
    icon: LockClosedIcon,
    path: '#',
    iconColor: 'bg-red-300',
  },
];

export default function ToyDLPage() {
  const pathname = usePathname() || '/';

  return (
    <>
      {/*<FlyoutNavbar/>*/}
      <FeatureSection
        featureTitle={featureTitle}
        featureItems={featureItems}
        rootPath={pathname}
      />
    </>
  );
}
