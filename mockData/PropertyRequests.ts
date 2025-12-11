
export interface PropertyRequestCard {
  id: number;
  title: string;
  subtitle: string;
  badge: string;
  price: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  floors: number;
  company: string;
  companyLogo: string;
  daysLeft: number;
  priceRange?: string;
  propertyType?: string;
}

export const mockPropertyRequests: PropertyRequestCard[] = [
  {
    id: 1,
    title: "مطبخ شقة للايجار",
    subtitle: "الرياض - الدوادمي، المحيط، النظيم",
    badge: "إيجار",
    price: "1500 - 2000",
    area:"200 : 250",
    bedrooms: 2,
    bathrooms: 2,
    floors: 1,
    company: "عبد الحكيم سيد القادر",
    companyLogo: "/icons/avatar1.jpg",
    daysLeft: 12,
    priceRange: "1500 - 2000",
    propertyType: "شقة",
  },
  {
    id: 2,
    title: "مطبخ شقة للايجار",
    subtitle: "الرياض - الدوادمي، المحيط، النظيم",
    badge: "بيع",
    price: "1500 - 2000",
    area: "200 : 250",
    bedrooms: 3,
    bathrooms: 2,
    floors: 1,
    company: "عبد الحكيم سيد القادر",
    companyLogo: "/icons/avatar2.jpg",
    daysLeft: 12,
    priceRange: "سعر السوق",
    propertyType: "شقة",
  },
  {
    id: 3,
    title: "مطبخ شقة للايجار",
    subtitle: "الرياض - الدوادمي، المحيط، النظيم",
    badge: "إيجار",
    price:"1500 - 2000",
    area: "200 : 250",
    bedrooms: 2,
    bathrooms: 3,
    floors: 1,
    company: "عبد الحكيم سيد القادر",
    companyLogo: "/icons/avatar3.jpg",
    daysLeft: 12,
    priceRange: "1200 - 1800",
    propertyType: "شقة",
  },
];