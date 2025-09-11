'use client';

import { Popover, Transition } from '@headlessui/react';
import {
  ChevronDownIcon,
  SquaresPlusIcon,
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
} from '@heroicons/react/20/solid';
import React, { Fragment, useState, useEffect, useRef } from 'react';

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of your traffic',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure",
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will convert',
    href: '#',
    icon: ArrowPathIcon,
  },
];

const questions = [
  {
    name: 'Question 1',
    description: 'Answer to question 1',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Question 2',
    description: 'Answer to question 2',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Question 3',
    description: 'Answer to question 3',
    href: '#',
    icon: ArrowPathIcon,
  },
  // Add more questions as needed
];

interface PopoverMenuProps {
  name: string;
  items: {
    name: string;
    description: string;
    href: string;
    icon: React.ElementType;
  }[];
}

const PopoverMenu: React.FC<PopoverMenuProps> = ({ name, items }) => {
  const [selectedPopover, setSelectedPopover] = useState<string | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const handlePopoverOpen = (popoverName: string) => {
    if (isPopoverOpen(popoverName)) {
      handlePopoverClose();
    } else {
      setSelectedPopover(popoverName);
    }
  };

  const handlePopoverClose = () => {
    setSelectedPopover(null);
  };

  const isPopoverOpen = (popoverName: string) => {
    return selectedPopover === popoverName;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        handlePopoverClose();
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <Popover className="relative">
      <Popover.Button
        className={`mt-4 inline-flex items-center gap-x-1 text-3xl leading-6 font-semibold text-gray-900 ${
          isPopoverOpen(name.toLowerCase()) ? 'text-indigo-600' : ''
        }`}
        onClick={() => handlePopoverOpen(name.toLowerCase())}
      >
        <ArrowPathIcon className="h-5 w-5" aria-hidden="true" />
        <span>{name}</span>
        <ChevronDownIcon
          className={`ml-1 h-5 w-5 transition-transform ${
            isPopoverOpen(name.toLowerCase()) ? 'rotate-180 transform' : ''
          }`}
          aria-hidden="true"
        />
      </Popover.Button>

      <Transition
        as={Fragment}
        show={isPopoverOpen(name.toLowerCase())}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel
          static
          className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4"
          style={{ minWidth: '20rem' }}
          ref={popoverRef}
        >
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {items.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                >
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon
                      className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <a href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default function FlyoutNavbar() {
  return (
    <div className="flex justify-center bg-white">
      <PopoverMenu name="ToyWhat" items={solutions} />
      <PopoverMenu name="TopicWhat" items={questions} />
    </div>
  );
}
