'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button'; // إذا كنت تستخدم shadcn/ui
import { ArrowLeft } from 'lucide-react';

interface CardProps {
  icon: string;      // رابط الأيقونة
  title: string;     // عنوان الكارد
  description: string; // وصف الكارد
  onDetailsClick: () => void; // دالة عند الضغط على الزر
}


export function ServiceCard({ icon, title, description, onDetailsClick }: CardProps) {
  return (
    <>  
     <div className="group w-[297px] h-[202px] rounded-2xl p-4  mt-4 bg-[#F1F5F9] text-[#1E3A5F] 
                 shadow-sm border border-[#CBD5E1] 
                 hover:bg-[#1E3A5F] hover:text-white 
                 transition-all duration-300 cursor-pointer">
   
      <div className="flex justify-start mb-0.5">
         <div className="w-12 h-12 rounded-lg flex items-center justify-center
                    bg-[#1E3A5F] text-white
                    group-hover:bg-white group-hover:text-[#1E3A5F]
                    transition-colors duration-300">
          <Image src={icon} alt="icon" width={32} height={32}  className="invert brightness-0 group-hover:invert-100 group-hover:brightness-100 transition-all duration-300"
  />
      </div>
      </div>

      <h3 className="text-xl font-bold mb-1 line-clamp-1">{title}</h3>
      <p className="text-sm leading-relaxed mb-1 line-clamp-2 opacity-90 group-hover:opacity-100">
        {description}
      </p>

      <Button
        variant="outline"
        className="group/btn w-[265px] h-[36px] rounded-full 
                 px-4 py-2 mb-4 border border-[#CBD5E1] 
                 flex items-center justify-between
                 bg-white text-[#314158]

                 transition-colors duration-300"
        onClick={onDetailsClick}
      >
        <span>مزيد من التفاصيل</span>
        <ArrowLeft className="h-4 w-4" />
      </Button>
    </div>
    
    </>

  );
}