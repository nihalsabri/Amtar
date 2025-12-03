export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const mockServices: Service[] = [
  {
    id: 1,
    title: "وَثِق عقد الإيجار",
    description: "وَثِق عقدك الآن بسرعة، وبأقل تكلفة ممكنة، ودون أي تعقيدات.",
    icon: "/main-page/services/Services1.svg", 
  },
  {
    id: 2,
    title:"سوق عقارك ب 300 ريال فقط",
    description: "اعرض عقارك من بين المسوقين وراح يعرضونه لعملائهم",
    icon: "/main-page/services/Services2.svg", 

  },
  {
    id: 3,
    title: "طلب حساب تمويل",
    description: "عندنا حلول تمويلية انت اختر عقارك ونحن نخلص امورك بالبنك",
   icon: "/main-page/services/Services3.svg", 

  },
    {
    id: 4,
    title: " إصدار ترخيص إعلاني",
    description: "إنهاء إجراءات الترخيص الإعلاني بسرعة وبخطوات بسيطة… وابدأ حملتك بثقة.",
    icon: "/main-page/services/Services4.svg",
    },
];