
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
<footer className="bg-primary text-white pt-12 pb-8 w-full mt-[450] lg:mt-[0]">
      <div className="relative z-10 bg-[#F1F5F9] text-[#052531] rounded-3xl p-4 sm:p-6 mx-4 sm:mx-auto max-w-[calc(100%-2rem)] sm:max-w-[85rem] shadow-lg h-auto lg:h-[316px] lg:mt-[-80px]   -mt-[480px] mb-4">
        
        <div className="flex flex-col lg:flex-row items-center h-full">
          
          <div className="flex-shrink-0 w-full lg:w-auto lg:mt-[-150px] mt-[-120px] order-1 lg:order-2">
            <Image
              src="/footer/download.svg"
              alt="تطبيق عقارات أمتار"
              width={650}
              height={505}
              className="rounded-xl object-contain w-full max-w-[400px] sm:max-w-[400px] lg:max-w-[550px] mx-auto"
            />
          </div>

          <div className="text-center lg:text-right flex-1 order-2 lg:order-1">
            <p className="text-[#052531] font-normal not-italic text-xl leading-[1.6] tracking-normal text-right">
              حمّل تطبيق البحث عن العقارات الأكثر موثوقية في <br />
              <span className="font-semibold">المملكة العربية السعودية</span> <br />
              قم بتحميل تطبيق الآن على هاتفك، وتمتع بعملية <br />
              بحثٍ عن عقار أسهل، وأسرع، وأكثر فاعلية.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mt-4 w-full max-w-full">
              <button className="flex items-center gap-3 bg-[#282828] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-gray-900 w-full sm:w-auto sm:max-w-[192px]">
                <div className="text-left flex-1">
                  <span className="block text-sm font-light">GET IT ON</span>
                  <span className="block font-bold">Google Play</span>
                </div>
                <Image src="/footer/v3.svg" width={24} height={24} alt="Google Play" className="flex-shrink-0" />
              </button>

              <button className="flex items-center gap-3 bg-[#282828] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-gray-900 w-full sm:w-auto sm:max-w-[192px]">
                <div className="text-left flex-1">
                  <span className="block text-sm font-light">Download on the</span>
                  <span className="block font-bold">App Store</span>
                </div>
                <Image src="/footer/v2.svg" width={24} height={24} alt="App Store" className="flex-shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
  <div className="bg-primary text-white lg:px-20 md:px-10 px-5 lg:py-10 md:py-5 py-1 flex flex-col lg:gap-12 md:gap-8 gap-5">
      <div className="flex flex-col md:flex-row gap-10 justify-between flex-wrap">
        <div className="max-w-[400px]">
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="شعار"
            className="size-24"
          />
          <strong className="text-secoundary-muted font-normal">
            منصة امتار هي الوجهة الأولى للباحثين عن العقارات في المملكة العربية
            السعودية. توفر خدمات مثل تسهيل البيع والشراء والاستثمار العقاري،
            وذلك عبر فريق من المتخصصين لضمان تجربة غنية بجودة وأمان.
          </strong>
        </div>
        <div className="flex-col gap-3 flex">
          <div className="font-medium">مناطق المملكة</div>
          <ul className="text-secoundary-muted [&_li:hover]:text-white [&_li:hover]:cursor-pointer flex flex-col gap-3">
            <li>منطقة الرياض</li>
            <li>منطقة مكة المكرمة</li>
            <li>منطقة المدينة المنورة</li>
            <li>المنطقة الشرقية</li>
            <li>منطقة عسير</li>
            <li>منطقة نجران</li>
            <li>منطقة الباحة</li>
            <li>منطقة الجوف</li>
          </ul>
        </div>
        <ul className="text-secoundary-muted [&_li:hover]:text-white [&_li:hover]:cursor-pointer flex-col gap-3 flex">
          <li>منطقة تبوك</li>
          <li>منطقة حائل</li>
          <li>منطقة الحدود الشمالية</li>
          <li>منطقة جازان</li>
          <li>منطقة القصيم</li>
        </ul>
        <div className="flex flex-col gap-3">
          <div className="font-medium">روابط مهمة</div>
          <ul className="text-secoundary-muted [&_li:hover]:text-white [&_li:hover]:cursor-pointer flex flex-col gap-3">
            <li>من نحن</li>
            <li>سياسة الخصوصية</li>
            <li>الشروط والاحكام</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <ul className="flex gap-6 items-center">
          <a href="">
            <Image src={"/footer/x.svg"} alt="تويتر" height={24} width={24} />
          </a>
          <a href="">
            <Image
              src={"/footer/tiktok.svg"}
              alt="تيك توك"
              height={24}
              width={24}
            />
          </a>
          <a href="">
            <Image
              src={"/footer/youtube.svg"}
              alt="يوتيوب"
              height={24}
              width={24}
            />
          </a>
          <a href="">
            <Image
              src={"/footer/insta.svg"}
              alt="انستقرام"
              height={24}
              width={24}
            />
          </a>
          <a href="">
            <Image
              src={"/footer/snap.svg"}
              alt="سناب شات"
              height={24}
              width={24}
            />
          </a>
          <a href="">
            <Image src={"/footer/wa.svg"} alt="واتساب" height={24} width={24} />
          </a>
        </ul>
        <div className="flex gap-6">
          <a href="https://mt.gov.sa/" target="_blank">
            <Image
              src={"/footer/tourism.png"}
              alt="وزارة السياحة"
              height={100}
              width={100}
              className="w-36"
            />
          </a>
          <a href="https://rega.gov.sa/" target="_blank">
            <Image
              src={"/footer/fal.png"}
              alt="رخصة فال العقارية"
              height={100}
              width={100}
              className="w-36"
            />
          </a>
        </div>
      </div>
      <hr />
      <div className="text-center">
        جميع الحقوق محفوظة لمنصة أمتار العقارية © 2026
      </div>
    </div>


    </footer>

  );
}