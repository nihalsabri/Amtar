
import { Button } from '@/components/ui/button';
import { Calendar, ArrowUpLeft, Layout, ShareIcon, Bed, Bath, Ruler, Home } from 'lucide-react';
import Image from 'next/image';

interface PropertyRequestsCard {
  title: string;
  subtitle: string;
  badge: string;
  price: string;
  company: string;
  companyLogo: string;
  daysLeft: number;
  area?: string;
  bedrooms?: number;
  bathrooms?: number;
  propertyType?: string;
}

export function PropertyRequestsCard({
  title,
  subtitle,
  badge,
  price,
  company,
  companyLogo,
  daysLeft,
  area = "",
  bedrooms = 2,
  bathrooms = 2,
  propertyType = "شقة",
}: PropertyRequestsCard) {
  const getBadgeClasses = () => {
    if (badge === 'بيع') {
      return 'bg-[rgba(127,34,254,0.1)] text-[rgba(127,34,254,1)]';
    }
    return 'bg-[rgba(0,146,184,0.1)] text-[#0092B8]';
  };

  return (
    <div className="w-full h-[344px] flex flex-col justify-between rounded-2xl bg-white border border-gray-200 p-3 relative">
      {/* رأس الكارت - متجاوب */}
      <div className="flex justify-between items-start h-auto bg-[#F1F5F9] p-3 rounded-lg mb-3">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image src={companyLogo} alt={company} width={40} height={40} className="object-cover" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">{company}</h3>
            <p className="text-xs text-[#62748E]">باحث عن عقار</p>
          </div>
        </div>

        {/* البادج والوقت - متجاوب */}
        <div className="flex flex-col items-end gap-1">
          <div className={`px-2 py-1 rounded-full text-xs font-normal ${getBadgeClasses()}`}>
            {badge}
          </div>
          <div className="flex items-center gap-1 bg-[#052531]/10 text-gray-700 text-xs px-2 py-1 rounded-full">
            <Calendar className="h-3 w-3" />
            <span>منذ {daysLeft} يوم</span>
          </div>
        </div>
      </div>

      {/* العنوان */}
      <div className="flex flex-col gap-1 mb-3">
        <span className="text-sm text-[#1D293D]">{title}</span>
        <span className="text-xs text-gray-500">{subtitle}</span>
      </div>

      <div className="border border-[#ebebebd0] mb-3"></div>

      {/* التفاصيل */}
      <div className="flex flex-wrap gap-2 mb-3">
        <div className="flex items-center gap-1 bg-[#E2E8F0] text-gray-700 text-xs px-2 py-1 rounded-md">
          <Ruler className="h-3 w-3" />
          <span>{area} م²</span>
        </div>
        <div className="flex items-center gap-1 bg-[#E2E8F0] text-gray-700 text-xs px-2 py-1 rounded-md">
          <Bed className="h-3 w-3" />
          <span>{bedrooms} - {bedrooms + 1} غرف</span>
        </div>
        <div className="flex items-center gap-1 bg-[#E2E8F0] text-gray-700 text-xs px-2 py-1 rounded-md">
          <Bath className="h-3 w-3" />
          <span>{bathrooms} - {bathrooms + 1} حمامات</span>
        </div>
      </div>

      {/* السعر + نوع العقار */}
      <div className="flex items-center justify-between p-2">
        <div className="flex flex-col">
          <p className="text-xs text-gray-500">أسعار تبدأ من</p>
          <div className="flex items-center gap-1 text-lg text-blue-600 font-bold">
            {price}
            <Image src="/icons/ryalblue.svg" width={16} height={16} alt="ريال" />
          </div>
        </div>
        <div className="flex items-center gap-1 bg-[#E2E8F0] text-gray-700 text-xs px-2 py-1 rounded-md">
          <Home className="h-3 w-3" />
          <span>{propertyType}</span>
        </div>
      </div>

      {/* الأزرار - متجاوبة تمامًا */}
      <div className="flex items-center justify-between gap-2 mt-2">
        <Button
          className="flex-1 h-10 rounded-full bg-[#052531] text-white text-sm font-medium"
          asChild
        >
          <a href="#">
            مشاهدة الطلب
            <ArrowUpLeft className="h-4 w-4 mr-1" />
          </a>
        </Button>
        <button className="w-10 h-10 rounded-full bg-[rgba(7,25,56,0.1)] flex items-center justify-center hover:bg-[rgba(7,25,56,0.15)] transition-colors">
          <ShareIcon className="h-4 w-4 text-[#4F5874]" />
        </button>
      </div>
    </div>
  );
}