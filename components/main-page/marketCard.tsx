import Image from 'next/image';
import { ArrowUpLeft } from 'lucide-react';
import {  Bed, Bath, Ruler, Layers } from 'lucide-react';
import { Button } from '../ui/button';
interface MarketCardProps {
  title: string;
  subtitle: string;
  image: string;
  badge: string;
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
<div className="relative flex w-full md:w-[612px] p-4 gap-2 h-[248px] rounded-xl overflow-hidden bg-white  border border-[#F5F5F5]">
      <div className="absolute inset-0 border-2 border-b-gray-100 rounded-xl pointer-events-none" />
      <div className="relative w-[268px] h-56 rounded-xl overflow-hidden ">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover  rounded-xl "
        />
      </div>

      <div className=" flex flex-col gap-4 justify-between  ">
<div >
        <h3 className="text-xl font-medium text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-1 ">
          <div className="flex items-center  gap-0.5 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
            <Ruler className="h-4 w-4" />
            {area} م²
          </div>
          <div className="flex items-center  gap-0.5  bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
            <Bed className="h-4 w-4" />
            {bedrooms} غرف نوم
          </div>
          <div className="flex items-center  gap-0.5 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
            <Bath className="h-4 w-4" />
            {bathrooms} حمامات
          </div>
          <div className="flex items-center gap-0.5 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
            <Layers className="h-4 w-4" />
            {floors} دور
          </div>
        </div>



        <div className="">
          <p className="text-sm text-gray-500">السعر</p>
          {/* <p className="text-2xl font-bold text-blue-600">{price}</p> */}
     <div className="text-2xl flex gap-2 text-blue-600v font-semibold text-secoundary ">
      {price}
      <Image  src="/icons/ryalblue.svg" width={20} height={20} alt="logo" />
      </div>
          
       </div>
<div>
        <Button
          variant="outline"
          className=" w-[314] h-[40px]  border-gray-200  bg-primary  text-white rounded-full"
          asChild
        >
          <a href="">
        <p> تقديم طلب التسويق</p>
        <ArrowUpLeft className="h-20 w-20" />
          </a>
        </Button>
</div>
</div>


      </div>



    );
}