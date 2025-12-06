// import { Button } from '@/components/ui/button';
// import { MapPin, Calendar, ArrowLeft } from 'lucide-react';

// interface PropertyRequestsCard {
//   title: string;
//   subtitle: string;
//   badge: string;
//   price: string;
//   company: string;
//   daysLeft: number;
//   area?: number;
// }

// export function PropertyRequestsCard({
//   title,
//   subtitle,
//   badge,
//   price,
//   company,
//   daysLeft,
//   area = 257,
// }: PropertyRequestsCard) {
//   return (
//     <div className="w-[380px] h-[340px] rounded-2xl bg-white border border-gray-100 p-6 hover:shadow-lg transition-shadow">
      
//       {/* الرأس: الصورة الرمزية والاسم */}
//       <div className="flex items-center gap-3 mb-4">
//         <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center border-2 border-blue-200">
//           <span className="text-blue-700 font-bold text-2xl">ع</span>
//         </div>
//         <div>
//           <h3 className="text-xl font-bold text-gray-900">{company}</h3>
//           <p className="text-sm text-blue-600 font-medium">باحث عن عقار</p>
//         </div>
//       </div>

//       {/* نوع الطلب والموقع */}
//       <div className="mb-4">
//         <div className="flex items-center justify-between mb-2">
//           <span className="text-lg font-semibold text-gray-800">{title}</span>
//           <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
//             {badge}
//           </span>
//         </div>
        
//         <div className="flex items-center gap-2 text-gray-600 bg-gray-50 p-3 rounded-lg">
//           <MapPin className="h-4 w-4 text-blue-500" />
//           <span className="text-sm">{subtitle}</span>
//         </div>
//       </div>

//       {/* المساحة والأيام المتبقية */}
//       <div className="flex items-center justify-between mb-4 p-3 bg-blue-50 rounded-lg">
//         <div>
//           <span className="text-2xl font-bold text-gray-900">{area}</span>
//           <span className="text-sm text-gray-600 mr-2">م²</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <Calendar className="h-4 w-4 text-blue-600" />
//           <div className="text-right">
//             <p className="text-xs text-gray-500">متبقي</p>
//             <p className="text-lg font-bold text-blue-700">{daysLeft} يوم</p>
//           </div>
//         </div>
//       </div>

//       {/* السعر المطلوب */}
//       <div className="mb-5 p-3 bg-gray-50 rounded-lg">
//         <p className="text-sm text-gray-500 mb-1">السعر المطلوب</p>
//         <div className="flex items-center justify-between">
//           <p className="text-2xl font-bold text-blue-700">{price} ر.س</p>
//           <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
//             <span className="text-white text-xs">2</span>
//           </div>
//         </div>
//       </div>

//       {/* زر مشاهدة الطلب */}
//       <Button className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white h-12 text-base font-medium shadow-md hover:shadow-lg">
//         مشاهدة الطلب
//         <ArrowLeft className="h-5 w-5 mr-2" />
//       </Button>
//     </div>
//   );
// }