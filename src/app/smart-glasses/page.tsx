import type { Metadata } from 'next';
import GlassesStudioView from '@/components/glasses/GlassesStudioView';

export const metadata: Metadata = {
  title: 'Neural AR Smart Glasses | Shenzhen Mandyli Technology',
  description:
    'Experience next-generation 48g titanium AR smart glasses with diffractive optical waveguide, custom neural coprocessor, and directional spatial audio.',
};

export default function SmartGlassesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 sm:pt-32 pb-24">
      <GlassesStudioView />
    </div>
  );
}
