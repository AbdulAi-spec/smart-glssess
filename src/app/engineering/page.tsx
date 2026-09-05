import type { Metadata } from 'next';
import EngineeringView from '@/components/engineering/EngineeringView';

export const metadata: Metadata = {
  title: 'Engineering & R&D | Shenzhen Mandyli Technology',
  description:
    'Explore the precision engineering behind Shenzhen Mandyli Technology hardware. Cleanroom optical fab, vapor chamber dynamics, and aerospace CNC machining.',
};

export default function EngineeringPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 sm:pt-32 pb-24">
      <EngineeringView />
    </div>
  );
}
