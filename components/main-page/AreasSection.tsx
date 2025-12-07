// // import { mockAreas } from '@/mockData/Area';
// // import { AreaCard } from '@/components/main-page/areaCard';
// // import SectionTitle from '../common/sectionTitle';

// // export function AreasSection() {
// //   return (
// //     <section className="lg:px-20 md:px-10 px-5 p-10 bg-[#F1F5F9] ">
      
// //        <SectionTitle
// //                  title= " المناطق الأكثر طلباً في المملكة"
// //                   description= "ابحث عن عقاراتك في المناطق الأكثر طلبًا"
// //                  more2
// //                  href={'/areas'}
// //     />
        
// //         <div className="grid grid-cols-4  grid-rows-2 pt-10 gap-6 h-[600px]">
// //           {mockAreas.map((area) => (
// //             <AreaCard key={area.id} {...area} />
// //           ))}
// //         </div>
      
// //     </section>
// //   );
// // }

// import { mockAreas } from '@/mockData/Area';
// import { AreaCard } from '@/components/main-page/areaCard';
// import SectionTitle from '../common/sectionTitle';

// export function AreasSection() {
//   return (
//     <section className="lg:px-20 md:px-10 px-5 p-10 bg-[#F1F5F9]">
      
//        <SectionTitle
//                  title= " المناطق الأكثر طلباً في المملكة"
//                   description= "ابحث عن عقاراتك في المناطق الأكثر طلبًا"
//                  more2
//                  href={'/areas'}
//     />
        
//         <div className="
//           grid 
//           grid-cols-1
//           md:grid-cols-2
//           lg:grid-cols-4 
//           lg:grid-rows-2 
//           pt-10 
//           gap-6 
//           lg:h-[600px]
//         ">
//           {mockAreas.map((area) => (
//             <AreaCard key={area.id} {...area} />
//           ))}
//         </div>
      
//     </section>
//   );
// }

import { mockAreas } from '@/mockData/Area';
import { AreaCard } from '@/components/main-page/areaCard';
import SectionTitle from '../common/sectionTitle';

export function AreasSection() {
  return (
    <section className="lg:px-20 md:px-10 px-5 pt-10 bg-[#F1F5F9]">
      
       <SectionTitle
                 title= " المناطق الأكثر طلباً في المملكة"
                  description= "ابحث عن عقاراتك في المناطق الأكثر طلبًا"
                 more2
                 href={'/areas'}
    />
        
        <div className="
          flex flex-col
          md:grid md:grid-cols-2
          lg:grid lg:grid-cols-4 
          lg:grid-rows-2 
          pt-10 
          gap-6 
          lg:h-[600px]
        ">
          {mockAreas.map((area) => (
            <AreaCard key={area.id} {...area} />
          ))}
        </div>
      
    </section>
  );
}