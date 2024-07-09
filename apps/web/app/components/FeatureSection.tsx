import Link from "next/link";
import {LockClosedIcon, LockOpenIcon} from "@heroicons/react/24/outline";

type FeatureTitle = {
  name: string;
  description: string;
}

type FeatureItem = {
  name: string;
  description: string;
  path: string;
  icon: any;
  iconColor?: string; // Optional field for icon color
};


// const featureItems: FeatureItem[] = [
//
//   {
//     name: 'K-means',
//     description:
//       'K-means clustering algorithm',
//     icon: LockOpenIcon,
//     path: '/kmeans',
//     iconColor: "bg-green-600"
//   },
//   {
//     name: 'TODO: Hierarchical',
//     description:
//       'Agnes&Diana clustering algorithm',
//     icon: LockClosedIcon,
//     path: '/hierarchical',
//     iconColor: "bg-red-300"
//   },
//   {
//     name: 'TODO: DBSCAN',
//     description:
//       'DBSCAN clustering algorithm',
//     icon: LockClosedIcon,
//     path: '/dbscan',
//     iconColor: "bg-red-300"
//   },
// ]

export default function FeatureSection( { featureTitle, featureItems, rootPath }:
{ featureTitle: FeatureTitle, featureItems: FeatureItem[], rootPath: string }) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-3xl font-semibold leading-7 text-gray-1000">{featureTitle.name}</h1>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-400 sm:text-4xl">
            {featureTitle.description}
          </p>
          {/*<p className="mt-6 text-lg leading-8 text-gray-600">*/}
          {/*  Learning the thing by the naive implementation which is the thing itself*/}
          {/*</p>*/}
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {featureItems.map((feature) => (
              <Link key={feature.name} href={`${rootPath}/${feature.path}`}>
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className={`absolute left-0 top-0 flex h-10 w-10 items-center 
                  justify-center rounded-lg ${feature?.iconColor ?? "bg-indigo-600"}`}>
                    <feature.icon className="h-6 w-6 text-white " aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
              </Link>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export type { FeatureTitle, FeatureItem };
export { FeatureSection };