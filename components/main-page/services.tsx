
'use client';

import { ServiceCard } from '@/components/main-page/serviceCard';
import { mockServices } from '@/mockData/Services';
import SectionTitle from '../common/sectionTitle';

export function Services() {
  return (
      <section className="py-10">
    <div className="lg:px-20 md:px-10 px-5 ">
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
    </div>

      <div className="max-w-8xl mx-auto lg:px-20 md:px-10">
        
        <div className="overflow-x-auto pb-4 px-5 lg:px-0">
          <div className="flex gap-6 lg:grid lg:grid-cols-3 xl:grid-cols-4 ">
            {mockServices.map((service) => (
              <div key={service.id} className="w-[280px] flex-shrink-0 lg:w-auto lg:flex-shrink">
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  onDetailsClick={() => alert(`تفاصيل الخدمة: ${service.title}`)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}