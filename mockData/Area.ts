
export const mockAreas = [
  {
    id: 1,
    title: "الرياض",
    image: "/main-page/areas/riyyad.png",
    link: "/areas/riyadh",
    size: "large" as const,
    
 position: { row: 1, col: 1, rowSpan: 2, colSpan: 1 },  },
  {
    id: 2,
    title: "جدة",
    image: "/main-page/areas/jedda.png",
    link: "/areas/jeddah",
     size: "small" as const,
    position: { row: 1, col: 3 },
  },
  {
    id: 3,
    title: "المدينة المنورة",
    image: "/main-page/areas/city.png",
    link: "/areas/medina",
   size: "small" as const,
    position: { row: 1, col: 2 },
  },
  {
    id: 4,
    title: "الرياض",
    image: "/main-page/areas/riyad.png",
    link: "/areas/riyadh",
    size: "small" as const,
    position: { row: 1, col: 4 },
  },
  {
    id: 5,
    title: "الدمام",
    image: "/main-page/areas/damam.png",
    link: "/areas/dammam",
  size: "small" as const,
    position: { row: 2, col: 3, colSpan: 2 },
  },
  {
    id: 6,
    title: "مكة",
    image: "/main-page/areas/makka.png",
    link: "/areas/mecca",
   size: "small" as const,
    position: { row: 2, col: 2},
  },
];