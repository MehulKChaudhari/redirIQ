import type { ReactNode } from 'react';
import { LuLink, LuZap, LuActivity } from 'react-icons/lu';

export interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
  isActive: boolean;
  comingSoon: boolean;
}

export const FEATURES: Feature[] = [
  {
    title: 'Short Memorable URLs',
    description: 'Generate clean, memorable short URLs that are easy to share and remember',
    icon: <LuLink className="w-7 h-7 text-white" />,
    isActive: true,
    comingSoon: false,
  },
  {
    title: 'Lighthouse Performance',
    description: 'Real-time performance scoring and optimization insights for your destination URLs',
    icon: <LuZap className="w-7 h-7 text-white" />,
    isActive: false,
    comingSoon: true,
  },
  {
    title: 'Advanced Analytics',
    description: 'Detailed click tracking, geographic insights, and comprehensive performance metrics',
    icon: <LuActivity className="w-7 h-7 text-white" />,
    isActive: false,
    comingSoon: true,
  },
]; 
