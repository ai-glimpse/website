/* eslint-disable import/no-relative-packages -- required */
import { LayoutIcon, LibraryIcon, type LucideIcon } from 'lucide-react';

export interface Mode {
  param: string;
  name: string;
  package: string;
  description: string;
  version: string;
  icon: LucideIcon;
}

export const modes: Mode[] = [
  {
    param: 'ml',
    name: 'ML',
    package: 'tyoml',
    description: 'Machine Learning',
    version: 'tbd',
    icon: LibraryIcon,
  },
  {
    param: 'dl',
    name: 'DL',
    package: 'toydl',
    description: 'Deep Learning',
    version: 'tbd',
    icon: LayoutIcon,
  },
];
