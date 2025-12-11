
import { mockAreas } from '@/mockData/Area';
import { AreaCard } from '@/components/main-page/areaCard';
import SectionTitle from '../common/sectionTitle';
import AreaSlides from './areaSlides';
import { ArrowUpLeft,  } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

export function AreasSection() {
  return (
    <> 
    {/* <div className="   pt-10 bg-[#F1F5F9]"  >
      <SectionTitle
        title="المناطق الأكثر طلباً في المملكة"
        description="ابحث عن عقاراتك في المناطق الأكثر طلبًا"
        more2
        href={'/areas'}
      />

    </div> */}

    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 lg:px-20 md:px-10 px-5 pt-10 bg-[#F1F5F9]">
          
     
          <div className="flex flex-col gap-3 text-right">
            <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-primary">
              المناطق الأكثر طلباً في المملكة
            </h2>
            <p className="text-muted-foreground">
              ابحث عن عقاراتك في المناطق الأكثر طلبًا
            </p>
          </div>


          <div className="w-full md:w-auto flex justify-end order-1 md:order-2">
         <Link href={"/#"} className="pt-3 md:pt-0">
          <Button className="bg-primary-muted text-primary text-xs md:text-base hover:text-white rounded-full self-end">
            مشاهدة جميع مناطق الممكلة    
            <ArrowUpLeft />
          </Button>
        </Link>
          </div>

        </div>
    
    <AreaSlides />
    </>
  );
}