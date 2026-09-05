import type { Metadata } from 'next';
import LaptopStudioView from '@/components/laptop/LaptopStudioView';

export const metadata: Metadata = {
  title: 'Flagship Convertible Studio Laptop DJS140S | Shenzhen Mandyli Technology',
  description:
    'Explore the 14-inch convertible studio laptop. Dual-hinge pull-forward architecture, dome-switch keyboard, vapor chamber cooling, and 2.8K 120Hz touch display.',
};

export default function LaptopPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 sm:pt-32 pb-24">
      <LaptopStudioView />
    </div>
  );
}
