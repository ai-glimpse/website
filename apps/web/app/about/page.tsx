'use client';

import { HeartHandshakeIcon, LightbulbIcon, RocketIcon, UsersIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface FeatureProps {
  title: string;
  text: string;
  iconName: 'LightbulbIcon' | 'UsersIcon' | 'RocketIcon' | 'HeartHandshakeIcon';
}

const Feature = ({ title, text, iconName }: FeatureProps): React.ReactElement => {
  const IconComponent =
    iconName === 'LightbulbIcon' ? LightbulbIcon :
      iconName === 'UsersIcon' ? UsersIcon :
        iconName === 'RocketIcon' ? RocketIcon :
          HeartHandshakeIcon;

  return (
    <Card 
      className="flex flex-col items-center bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <IconComponent className="mb-4 h-12 w-12 text-gray-400" />
      <h3 className="mb-2 text-xl font-bold text-gray-700">{title}</h3>
      <p className="text-center text-gray-600">{text}</p>
    </Card>
  );
};

export default function Page(): React.ReactElement {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center space-y-16">
          <div className="container mx-auto max-w-3xl space-y-4 text-center">
            <h1 className="text-3xl font-bold text-gray-700 md:text-4xl lg:text-5xl">
              Empowering AI Education
            </h1>
            <p className="text-lg text-gray-700 md:text-xl">
              We&apos;re on a mission to democratize AI education, making it accessible,
              engaging, and practical for learners of all levels.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <Feature
              iconName="LightbulbIcon"
              title="Innovative Learning"
              text="Our unique 'toy' approach breaks down complex AI concepts into digestible, interactive modules."
            />
            <Feature
              iconName="UsersIcon"
              title="Community-Driven"
              text="Foster collaboration and growth in our vibrant learning community."
            />
            <Feature
              iconName="RocketIcon"
              title="Future-Ready Skills"
              text="Equip yourself with the skills needed for the AI-driven future."
            />
            <Feature
              iconName="HeartHandshakeIcon"
              title="Open Contribution"
              text="Join us in shaping the future of AI education through open collaboration."
            />
          </div>

          <Card
            className="max-w-3xl rounded-xl bg-gray-50 p-8 text-center shadow-xl"
          >
            <h3 className="mb-4 text-lg font-semibold text-gray-700 md:text-xl">
              Your Journey in AI Starts Here
            </h3>
            <p className="mb-6 text-lg text-gray-700">
              Whether you&apos;re taking your first steps in AI or looking to deepen your expertise,
              our platform offers the tools and community to support your growth. Dive in,
              experiment with our &apos;toys&apos;, and don&apos;t hesitate to share your insights or contribute to our project.
            </p>
            <Button
              asChild
              className="bg-gray-500 font-bold hover:bg-green-600"
              size="lg"
            >
              <Link href="/docs">
                Start Learning
              </Link>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}