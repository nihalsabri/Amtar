
// import { ArrowUpLeft } from 'lucide-react';
// import Image from 'next/image';

// export function JoinUs() {
//     return (
//         <>
//         <div className="relative w-full lg:h-[420px] md:h-[500px] h-[600px] bg-[#052531]/10">

//            {/* الصورة في الخلفية للشاشات الصغيرة فقط */}
//            <div className="absolute inset-0 lg:hidden">
//              <Image
//                       src="/main-page/join/Group.svg"
//                       alt={"Join Us"}
//                       fill
//                       className="opacity-40 object-cover"
//                     />
//             </div>

//            {/* الطبقة فوق الصورة للشاشات الصغيرة */}
//            <div className="absolute inset-0 lg:hidden" style={{ background: 'rgba(5, 37, 49, 0.1)' }}></div>

//             {/* Container للشاشات الكبيرة */}
//             <div className="hidden lg:flex gap-[60px] h-full">
//                 <div className="flex-shrink-0">
//                     <Image
//                         src="/main-page/join/Group.svg"
//                         alt={"Join Us"}
//                         width={655}
//                         height={420}
//                         className="opacity-100 object-cover rounded-2xl h-full"
//                     />
//                 </div>

//                 <div className="flex items-center">
//                     <div className="flex flex-col align-center justify-center w-[599px] rounded-2xl p-[24px] space-y-[20px]">
//                         <p className="font-sans font-bold text-4xl leading-normal tracking-normal text-right align-middle not-italic mb-2">
//                             إنضم معنا 
//                         </p>
//                         <div className="text-base font-normal font-sans leading-normal tracking-normal text-right align-middle text-[#45556C] rounded not-italic">
//                             كن جزءًا من شبكتنا العقارية واغتنم فرص التعاون، تبادل العملاء، والحصول على مزايا
//                             <br />
//                             إضافية تدعم نجاحك. نوفر منصة موثوقة تسهّل عليك الوصول للسوق، إدارة معاملاتك،
//                             <br />
//                             وتعزيز فرصك في البيع والشراء بثقة واحترافية.
//                         </div>
//                         <button className="w-[175px] h-[40px] rounded-full bg-[#052531] text-white flex items-center justify-center gap-2 hover:bg-[#052531]/90 transition-colors px-6 py-2">
//                             <span>إنضم الآن</span>
//                             <ArrowUpLeft className="h-4 w-4" />
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* المحتوى للشاشات الصغيرة والمتوسطة */}
//             <div className="lg:hidden relative z-10 h-full flex items-center justify-center px-5">
//                 <div className="flex flex-col items-center justify-center md:w-[500px] w-full max-w-[599px] rounded-2xl md:p-[20px] p-[16px] space-y-[16px]">
//                     <p className="font-sans  text-[#052531] font-bold md:text-3xl text-2xl leading-normal tracking-normal text-center not-italic mb-2">
//                         إنضم معنا 
//                     </p>
//                     <div className="md:text-sm text-sm font-normal font-sans leading-normal tracking-normal text-center text-[#45556C] rounded not-italic">
//                         كن جزءًا من شبكتنا العقارية واغتنم فرص التعاون، تبادل العملاء، والحصول على مزايا إضافية تدعم نجاحك. نوفر منصة موثوقة تسهّل عليك الوصول للسوق، إدارة معاملاتك، وتعزيز فرصك في البيع والشراء بثقة واحترافية.
//                     </div>
//                     <button className="w-full max-w-[200px] h-[40px] rounded-full bg-[#052531] text-white flex items-center justify-center gap-2 hover:bg-[#052531]/90 transition-colors px-6 py-2">
//                         <span>إنضم الآن</span>
//                         <ArrowUpLeft className="h-4 w-4" />
//                     </button>
//                 </div>
//             </div>

//         </div>
//         </>
//     );
// }

import { ArrowUpLeft } from 'lucide-react';
import Image from 'next/image';

export function JoinUs() {
    return (
        <>
        <div className="relative w-full lg:h-[420px] md:h-[500px] h-[412px] bg-[#052531]/10">

           {/* الصورة في الخلفية للشاشات الصغيرة فقط */}
           <div className="absolute inset-0 lg:hidden">
             <Image
                      src="/main-page/join/Group.svg"
                      alt={"Join Us"}
                      fill
                      className="opacity-40 object-cover"
                    />
            </div>

           {/* الطبقة فوق الصورة للشاشات الصغيرة */}
           <div className="absolute inset-0 lg:hidden" style={{ background: 'rgba(5, 37, 49, 0.1)' }}></div>

            {/* Container للشاشات الكبيرة */}
            <div className="hidden lg:flex gap-[30px] h-full">
                <div className="flex-shrink-0">
                    <Image
                        src="/main-page/join/Group.svg"
                        alt={"Join Us"}
                        width={655}
                        height={420}
                        className="opacity-100 object-cover rounded-2xl h-full"
                    />
                </div>

                <div className="flex items-center">
                    <div className="flex flex-col align-center justify-center w-[599px] rounded-2xl p-[24px] space-y-[20px]">
                        <p className="font-sans font-bold text-4xl leading-normal tracking-normal text-right align-middle not-italic mb-2">
                            إنضم معنا 
                        </p>
                        <div className="text-base font-normal font-sans leading-normal tracking-normal text-right align-middle text-[#45556C] rounded not-italic">
                            كن جزءًا من شبكتنا العقارية واغتنم فرص التعاون، تبادل العملاء، والحصول على مزايا
                            <br />
                            إضافية تدعم نجاحك. نوفر منصة موثوقة تسهّل عليك الوصول للسوق، إدارة معاملاتك،
                            <br />
                            وتعزيز فرصك في البيع والشراء بثقة واحترافية.
                        </div>
                        <button className="w-[175px] h-[40px] rounded-full bg-[#052531] text-white flex items-center justify-center gap-2 hover:bg-[#052531]/90 transition-colors px-6 py-2">
                            <span>إنضم الآن</span>
                            <ArrowUpLeft className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* المحتوى للشاشات الصغيرة والمتوسطة */}
            <div className="lg:hidden relative z-10 h-full flex items-center justify-center p-0">
                <div className="flex flex-col items-center justify-center md:w-[500px] w-full max-w-[375px] rounded-2xl md:p-[20px] p-[16px] space-y-[32px]">
                    <p className="font-sans  text-[#052531] font-bold md:text-3xl text-2xl leading-normal tracking-normal text-center not-italic mb-2">
                        إنضم معنا 
                    </p>
                    <div className="md:text-sm text-sm font-normal font-sans leading-normal tracking-normal text-center text-[#45556C] rounded not-italic">
                        كن جزءًا من شبكتنا العقارية واغتنم فرص التعاون، تبادل العملاء، والحصول على مزايا إضافية تدعم نجاحك. نوفر منصة موثوقة تسهّل عليك الوصول للسوق، إدارة معاملاتك، وتعزيز فرصك في البيع والشراء بثقة واحترافية.
                    </div>
                    <button className="w-full max-w-[200px] h-[40px] rounded-full bg-[#052531] text-white flex items-center justify-center gap-2 hover:bg-[#052531]/90 transition-colors px-6 py-2">
                        <span>إنضم الآن</span>
                        <ArrowUpLeft className="h-4 w-4" />
                    </button>
                </div>
            </div>

        </div>
        </>
    );
}