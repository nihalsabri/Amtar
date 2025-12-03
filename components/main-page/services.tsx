'use client';

import { ServiceCard } from '@/components/main-page/serviceCard';
import { mockServices } from '@/mockData/Services';
import SectionTitle from '../common/sectionTitle';

export function Services() {
  return (
      <section className="lg:px-20 md:px-10 px-5 pt-10">
    <SectionTitle title="خدماتنا موثوقة وسريعة" 
    description={
      <>
      نقدّم مجموعة من الخدمات المصممة لتسهيل كل إجراءاتك العقارية والإدارية، بداية من توثيق العقود وحتى إدارة 
      <br /> المعاملات بالكامل، بخطوات بسيطة وسريعة وبجودة عالية تضمن لك راحة البال.
      </>
    }
    more
    href={'/services'}
     />

      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8">
          {mockServices.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              onDetailsClick={() => alert(`تفاصيل الخدمة: ${service.title}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}