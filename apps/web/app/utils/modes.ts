import {
  BotMessageSquareIcon,
  BrainCircuit,
  CandlestickChart,
  Network,
  type LucideIcon,
} from 'lucide-react';

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
    icon: BrainCircuit,
  },
  {
    param: 'dl',
    name: 'DL',
    package: 'toydl',
    description: 'Deep Learning',
    version: 'tbd',
    icon: Network,
  },
  {
    param: 'stat',
    name: 'Stat',
    package: 'toystat',
    description: 'Statistics',
    version: 'tbd',
    icon: CandlestickChart,
  },
  {
    param: 'llm',
    name: 'LLM',
    package: 'toyllm',
    description: 'Large Language Model',
    version: 'tbd',
    icon: BotMessageSquareIcon,
  },
];
