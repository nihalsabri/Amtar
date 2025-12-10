
import Image from 'next/image';
import { ArrowUpLeft } from 'lucide-react';
import { Bed, Bath, Ruler, Layers } from 'lucide-react';
import { Button } from '../ui/button';

interface MarketCardProps {
  title: string;
  subtitle: string;
  image: string;
  price: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  floors: number;
}

export default function MarketCard({
  title,
  subtitle,
  image,
  price,
  area,
  bedrooms,
  bathrooms,
  floors,
}: MarketCardProps) {
  return (
    <div className="relative flex w-full md:w-[612px] p-4 gap-2 h-[251px] rounded-2xl overflow-hidden bg-white border border-[#F5F5F5]">
      <div className="absolute inset-0 border-b-2 border-gray-100 rounded-2xl pointer-events-none" />

      {/* الصورة */}
      <div className="relative w-full sm:w-[118px] md:w-[268px] h-[227px] md:h-56  rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* المحتوى النصي */}
      <div className="flex flex-col justify-between gap-4 md:gap-4 w-full sm:w-[193px] sm:gap-2 md:w-auto">
        <div>
          {/* العنوان - تقليل حجمه على الجوال */}
          <h3 className="text-base sm:text-l font-medium text-gray-800 text-right leading-normal tracking-normal">
            {title}
          </h3>
          {/* الوصف - تقليل حجمه على الجوال */}
          <p className="text-xs sm:text-sm text-gray-500 text-right font-normal">
            {subtitle}
          </p>
        </div>

        {/* التفاصيل */}
        <div className="flex flex-wrap gap-1 md:gap-1">
          <div className="flex items-center gap-0.5 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
            <Ruler className="h-4 w-4" />
            {area} م²
          </div>
          <div className="flex items-center gap-0.5 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
            <Bed className="h-4 w-4" />
            {bedrooms} غرف 
          </div>
           <div className="flex items-center gap-0.5 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
            <Layers className="h-4 w-4" />
            {floors} دور
          </div>
          <div className="flex items-center gap-0.5 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
            <Bath className="h-4 w-4" />
            {bathrooms} حمامات
          </div>
         
        </div>

        {/* السعر */}
        <div>
          <p className="text-xs sm:text-sm text-gray-500 text-right">السعر</p>
          <div className="text-xl sm:text-2xl flex gap-2 text-blue-600 font-semibold text-right">
            {price}
            <Image src="/icons/ryalblue.svg" width={20} height={20} alt="ريال" />
          </div>
        </div>

        {/* الزر - متجاوب */}
        <Button
          variant="outline"
          className="w-full md:w-[314px] h-[40px] border-gray-200 bg-primary text-white rounded-full text-xs sm:text-sm font-medium"
          asChild
        >
          <a href="">
            تقديم طلب التسويق
            <ArrowUpLeft className="mr-1 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}