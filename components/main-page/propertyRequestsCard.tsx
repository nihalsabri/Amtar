import { Button } from '@/components/ui/button';
import {  Calendar,  ArrowUpLeft, Layout,  ShareIcon } from 'lucide-react';
import Image from 'next/image';

interface PropertyRequestsCard {
  title: string;
  subtitle: string;
  badge: string;
  price: string;
  company: string;
    companyLogo: string;
  daysLeft: number;
  area?: number;
  badgeType?: 'ايجار' | 'بيع'; // نوع البادج
}

export function PropertyRequestsCard({
  title,
  subtitle,

  price,
  company,
  companyLogo,
  daysLeft,
  area = 257,
  badgeType = 'ايجار',
}: PropertyRequestsCard) {
  return (
    <div className="w-[403px] h-[344px]  flex flex-col justify-between rounded-2xl bg-white border border-gray-200 p-2 relative">
      
   <div className="flex justify-between align-top h-[60px] bg-[#F1F5F9]  p-2 mb-4 rounded-lg ">
      <div className="flex items-center gap-3  ">
     <div className="w-10 h-10 rounded-full">
  <Image
    src={companyLogo}
    alt="وصف"
    width={40}
    height={40}
    className="rounded-full"
  />
</div>
        <div>
          <h3 className=" font-medium   text-gray-900">{company}</h3>
          <p className=" text-[#62748E] font-normal">باحث عن عقار</p>
        </div>
      </div>

      <div className="absolute  top-4 left-4 flex  gap-2">
     
      <div className="
  inline-flex items-center justify-center
  px-3 py-1 rounded-full
  text-xs           
  font-normal     
  font-sans       
  tracking-normal   
  leading-4.5 
  text-center
  align-middle
  bg-[rgba(0,146,184,0.1)]
  text-[#0092B8]
  hover:bg-[rgba(0,146,184,0.2)]
  transition-colors
">
          {badgeType}
        </div>
        
        <div className="flex items-center gap-1 bg-[#052531]/10  text-gray-700 text-xs px-2 py-1 rounded-full">
          <Calendar className="h-3 w-3" />
          <span>منذ {daysLeft} يوم</span>
        </div>
      </div>

   
</div>

        <div className="flex flex-col gap-2 mb-4">
          <span className="text-md text-[#1D293D]">{title}</span>
        <span className="text-sm text-gray-500">{subtitle}</span>
      </div>
<div className="border border-[#CAD5E2]  mb-4"></div>
 
      <div className="flex items-center gap-2  mb-2 p-3 bg-blue-50 text-gray-500 rounded-md w-[104px] h-[25px]">
             <Layout className="h-4 w-4" />
            {area} م²
        
      </div>

      <div className=" p-2 ">
       
        <p className="text-sm text-gray-500">أسعار تبدأ من</p>
            <div className="text-2xl flex gap-2 text-blue-600v font-bold text-secoundary ">
              {price}
              <Image  src="/icons/ryalblue.svg" width={20} height={20} alt="logo" />
              </div>
        
      </div>
<div className="border border-[#CAD5E2] mb-4"></div>
    <div className="flex justify-between items-center   ">
      <Button className=" w-[323px]  h-10 rounded-full bg-[#052531]   text-white  text-base font-medium shadow-md hover:shadow-lg">
        مشاهدة الطلب
        <ArrowUpLeft className="h-5 w-5 mr-2" />
      </Button>


  <button className="
  w-10 
  h-10 
  rounded-full 
  bg-[rgba(7,25,56,0.1)] 
  flex 
  items-center 
  justify-center 
  hover:bg-[rgba(7,25,56,0.15)]
  transition-colors
  p-2
  gap-1
">
  <ShareIcon className=" h-5 
  w-5 
 text-[#4F5874]
 " />
</button>
 </div>


    </div>
  );
}