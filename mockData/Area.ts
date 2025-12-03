export interface AreaCard {
  id: number;
  title: string;      // مثل: "الرياض"
  subtitle: string;   // مثل: "مشرف"
  image: string;      // رابط الصورة
  link: string;       // رابط صفحة التفاصيل
    size: 'large' | 'small';
}

// lib/mock/areas.ts
export const mockAreas = [
  {
    id: 1,
    title: "الرياض",
    subtitle: "مشرف",
    image: "/images/riyadh.jpg",
    link: "/areas/riyadh",
    size: "large", // ← كبير
  },
  {
    id: 2,
    title: "جدة",
    subtitle: "مشرف",
    image: "/images/jeddah.jpg",
    link: "/areas/jeddah",
    size: "small", // ← صغير
  },
  {
    id: 3,
    title: "المدينة المنورة",
    subtitle: "مشرف",
    image: "/images/medina.jpg",
    link: "/areas/medina",
    size: "small", // ← صغير
  },
  {
    id: 4,
    title: "الرياض",
    subtitle: "مشرف",
    image: "/images/riyadh2.jpg",
    link: "/areas/riyadh",
    size: "large", // ← كبير
  },
  {
    id: 5,
    title: "الدمام",
    subtitle: "مشرف",
    image: "/images/dammam.jpg",
    link: "/areas/dammam",
    size: "small", // ← صغير
  },
  {
    id: 6,
    title: "مكة",
    subtitle: "مشرف",
    image: "/images/mecca.jpg",
    link: "/areas/mecca",
    size: "small", // ← صغير
  },
];