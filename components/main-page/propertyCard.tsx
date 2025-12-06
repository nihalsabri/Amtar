'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Heart, Bed, Bath, Ruler, Layers, ArrowUpLeft } from 'lucide-react';

interface PropertyCardProps {
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  price: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  floors: number;
  company: string;
  companyLogo: string;
  companyTitle?: string;
  isFavorite: boolean;
}

export function PropertyCard({
  title,
  subtitle,
  image,
  badge,
  price,
  area,
  bedrooms,
  bathrooms,
  floors,
  company,
  companyTitle,
  companyLogo,
  isFavorite,
}: PropertyCardProps) {
  return (
    <div className="relative w-[403px] h-[560px] rounded-xl overflow-hidden bg-white  border border-[#F5F5F5] hover:shadow-lg transition-shadow duration-300">
      <div className="absolute inset-0 border-2 border-[#FFD700] rounded-xl pointer-events-none" />

   <div className="flex items-center h-[60px] gap-2 p-4 pb-1">
          <Image src={companyLogo} alt={company} width={44} height={44} />
          <div className="flex flex-col">
          <span className="text-xl text-[#1D293D]">{company}</span>
          <span className="text-sm text-gray-500">{companyTitle}</span>
</div>
        </div>
      <div className="relative h-[280px] rounded-xl m-4 mb-0 overflow-hidden ">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover  rounded-xl "
        />
        
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-4 left-4 rounded-full p-2 ${isFavorite ? 'text-red-500' : 'text-white'} bg-black/20 hover:bg-black/30`}
        >
          <Heart className="h-8 w-8" />
        </Button>

        <div className="absolute top-4 right-4 bg-green-100 text-green-600 text-xs font-bold px-2 py-1 rounded-full">
          {badge}
        </div>
      </div>

       

      <div className="p-4">

        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          <div className="flex items-center gap-1 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
            <Ruler className="h-4 w-4" />
            {area} م²
          </div>
          <div className="flex items-center gap-1 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
            <Bed className="h-4 w-4" />
            {bedrooms} غرف نوم
          </div>
          <div className="flex items-center gap-1 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
            <Bath className="h-4 w-4" />
            {bathrooms} حمامات
          </div>
          <div className="flex items-center gap-1 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
            <Layers className="h-4 w-4" />
            {floors} دور
          </div>
        </div>
<div className="flex items-center justify-between mt-6">
        <div className="pt-4 ">
          <p className="text-sm text-gray-500">السعر</p>
          {/* <p className="text-2xl font-bold text-blue-600">{price}</p> */}
     <div className="text-2xl flex gap-2 text-blue-600v font-bold text-secoundary ">
      {price}
      <Image  src="/icons/Riyal.png" width={20} height={20} alt="logo" />
      </div>
          
       </div>
        <Button
          variant="outline"
         
          className=" w-[40] h-[40]  border-gray-200  bg-gray-100  hover:bg-gray-400 text-gray-400 rounded-full"
          asChild
        >
          <a href="/properties/1">
        
            <ArrowUpLeft className="h-20 w-20" />

          </a>
        </Button>
</div>
</div>
      </div>
   
  );
}