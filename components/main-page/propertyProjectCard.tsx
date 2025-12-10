// import Image from 'next/image';
// import { Button } from '@/components/ui/button';
// import { Heart, Bed, Bath,  Layout } from 'lucide-react';

// interface PropertyCard {
//   id: number;
//   title: string;       
//   subtitle: string;   
//   image: string;      
//   price: string;      
//   area: number;        
//   bedrooms: number;    
//   bathrooms: number;   
//   floors: number;      
//   company: string;  
//   projectsno:string;   
//   companyLogo: string; 
//   isFavorite: boolean; 
// }
// export function PropertyProjectCard({
//   title,
//   subtitle, 
//     image,
//     price,
//     area,
//     bedrooms,  
//     bathrooms,
 
//     company,
//     projectsno,
//     companyLogo,
//     isFavorite,
// }: PropertyCard) {
//   return (
//     <div className="relative w-[402px] h-[476] rounded-2xl overflow-hidden bg-white  border border-[#F5F5F5] hover:shadow-lg transition-shadow duration-300">
//       <div className="absolute inset-0 border-2 border-gray-200 rounded-xl pointer-events-none" />
// {/* 
//       <div className="flex items-center h-[60px] gap-2 p-4 pb-1">
//         <Image src={companyLogo} alt={company} width={44} height={44} />

//         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col">
//           <span className="text-xl text-[#1D293D]">{company}</span>
//           <span className="text-sm text-gray-500">{projectsno}</span>
//         </div>

//       </div> */}

//       <div className="relative h-[280px]   overflow-hidden">
//         <Image
//           src={image}
//           alt={title}
//           fill
//           className="object-cover "
//           style={{ borderRadius: '20px 20px 0 0' }}
//         />
//         <div className=" absolute bottom-2 left-2 right-2 backdrop-blur-[2px] rounded-xl p-4 flex items-center h-[60px] gap-2 ">
//         <Image src={companyLogo} alt={company} width={44} height={44}  className='bg-white p-2 rounded-full'/>

//         <div className="flex flex-col">
//           <span className="font-normal text-white">{company}</span>
//           <span className="font-light  text-white">{projectsno}</span>
//         </div>

//       </div>
//          <Button
//           variant="ghost"
//           size="icon"
//           className={`absolute top-4 left-4 rounded-full p-2 ${isFavorite ? 'text-red-500' : 'text-white'} bg-black/20 hover:bg-black/30`}
//         >
//           <Heart className="h-8 w-8" />
//         </Button>

//       </div>
//       <div className="p-4">

//         <h3 className="text-xl font-medium text-gray-800">{title}</h3>
//         <p className="text-sm text-gray-500">{subtitle}</p>

//         <div className="flex flex-wrap gap-2 pt-1">
//              <div className="flex items-center gap-1 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
//             <Bath className="h-4 w-4" />
//             {bathrooms} حمامات
//           </div>
       
//           <div className="flex items-center gap-1 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
//             <Bed className="h-4 w-4" />
//             {bedrooms} غرف نوم
//           </div>
//             <div className="flex items-center gap-1 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
//             <Layout className="h-4 w-4" />
//             {area} م²
//           </div>
         
//         </div>
// <div className="flex items-center justify-between mt-4">
//         <div className="pt-4 ">
//           <p className="text-sm text-gray-500">أسعار تبدأ من</p>
//           {/* <p className="text-2xl font-bold text-blue-600">{price}</p> */}
//      <div className="text-2xl flex gap-2 text-blue-600v font-semibold  text-secoundary ">
//       {price}
//       <Image  src="/icons/ryalblue.svg" width={20} height={20} alt="logo" />
//       </div>
          
//        </div>
        
// </div>
// </div>

//     </div>
//   );
// }   

// components/cards/PropertyProjectCard.tsx
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Heart, Bed, Bath, Layout } from 'lucide-react';

interface PropertyCard {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  price: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  floors: number;
  company: string;
  projectsno: string;
  companyLogo: string;
  isFavorite: boolean;
}

export function PropertyProjectCard({
  title,
  subtitle,
  image,
  price,
  area,
  bedrooms,
  bathrooms,
  company,
  projectsno,
  companyLogo,
  isFavorite,
}: PropertyCard) {
  return (
    <div className="relative w-full max-w-[402px] h-auto rounded-2xl overflow-hidden bg-white border border-[#F5F5F5] hover:shadow-lg transition-shadow duration-300">
      <div className="absolute inset-0 border-2 border-gray-200 rounded-2xl pointer-events-none" />

      <div className="relative h-[280px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          style={{ borderRadius: '20px 20px 0 0' }}
        />
        <div className="absolute bottom-2 left-2 right-2 backdrop-blur-[2px] rounded-xl p-4 flex items-center h-[60px] gap-2">
          <Image
            src={companyLogo}
            alt={company}
            width={44}
            height={44}
            className="bg-white p-2 rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-normal text-white">{company}</span>
            <span className="font-light text-white">{projectsno}</span>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-4 left-4 rounded-full p-2 ${
            isFavorite ? 'text-red-500' : 'text-white'
          } bg-black/20 hover:bg-black/30`}
        >
          <Heart className="h-8 w-8" />
        </Button>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-medium text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>

        <div className="flex flex-wrap gap-2 pt-1">
          <div className="flex items-center gap-1 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
            <Bath className="h-4 w-4" />
            {bathrooms} حمامات
          </div>
          <div className="flex items-center gap-1 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
            <Bed className="h-4 w-4" />
            {bedrooms} غرف نوم
          </div>
          <div className="flex items-center gap-1 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
            <Layout className="h-4 w-4" />
            {area} م²
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="pt-4">
            <p className="text-sm text-gray-500">أسعار تبدأ من</p>
            <div className="text-2xl flex gap-2 text-blue-600 font-semibold">
              {price}
              <Image src="/icons/ryalblue.svg" width={20} height={20} alt="ريال" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}