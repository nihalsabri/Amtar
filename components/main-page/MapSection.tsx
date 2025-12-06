import { Button } from '@/components/ui/button';
import { ArrowUpLeft } from 'lucide-react';

export function MapSection() {
  return (  
 <section className="relative w-full h-[412px]  overflow-hidden  lg:px-20 md:px-10 px-5  mb-10 mt-10">
      
      <div
        className="absolute inset-0 bg-cover opacity-20  bg-center"
        style={{
          backgroundImage: `url('/main-page/map.png')`,
        }}
      />
{/* <div className="absolute inset-0 bg-[#052531] opacity-10" /> */}
 <div 
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(5, 37, 49, 0.1)',
        }}
      />

    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#1E3A5F] px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">العروض على الخريطة</h2>
        <p className="text-sm  mb-8">
            
            استكشف جميع العروض العقارية مباشرة على الخريطة، وحدد المواقع بسهولة، واعرف أقرب <br />الخدمات والمناطق المحيطة. نوفر لك طريقة سريعة وواضحة لاختيار العقار الأنسب بناءً على الموقع <br />الجغرافي بدقة وشفافية.
                </p>
        <Button
          className="
bg-[#1E3A5F] 
    text-white 
    transition-all
    duration-300
    group
    w-[632px]
    h-[44px]       
    rounded-full
    px-8
    text-base
    font-semibold
    flex
    items-center
    justify-center
    gap-3
  "
        >
          <a  href="/map">
            اكتشف العقارات على الخريطة
          </a>
                <ArrowUpLeft className="mr-2 h-5 w-5" />

        </Button>
      </div>


    </section>



  );
}