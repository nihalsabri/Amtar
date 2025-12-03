// components/sections/AreasSection.tsx
'use client';

import { mockAreas } from '@/mockData/Area';
import  {AreaCard}  from '@/components/main-page/areaCard';

export function AreasSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">المواقع الأكثر طلباً في المملكة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockAreas.map(({ id, ...rest }) => (
            <AreaCard key={id} {...rest}  size=" large || small" />
          ))}
        </div>
      </div>
    </section>
  );
}