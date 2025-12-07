export interface PropertyRequestCard {
  id: number;
  title: string;       
  subtitle: string;    
  badge: string;       
  price: string;       
  area: number;        
  bedrooms: number;    
  bathrooms: number;   
  floors: number;      
  company: string;     
  companyLogo: string; 
  daysLeft: number;  
}

export const mockPropertyRequests: PropertyRequestCard[] = [{
    id: 1,
    title: "مطبخ شقة للايجار",
    subtitle: "الرياض - الدوادمي، المحيط، النظيم",
    badge: "إيجار",
    price: "14,339,814",
    area: 257,
    bedrooms: 4,
    bathrooms: 2,
    floors: 1,
    company: "عبد الحكيم سيد القادر",
    companyLogo: "/icons/avatar1.jpg",
    daysLeft: 12,
  },
  {
    id: 2,
    title: "مطبخ شقة للايجار",
    subtitle: "الرياض - الدوادمي، المحيط، النظيم",
    badge: "إيجار",
    price: "14,339,814",
    area: 257,
    bedrooms: 4,
    bathrooms: 2,
    floors: 1,
    company: "عبد الحكيم سيد القادر",
    companyLogo: "/icons/avatar2.jpg",
    daysLeft: 12,
  },
  {
    id: 3,
    title: "مطبخ شقة للايجار",
    subtitle: "الرياض - الدوادمي، المحيط، النظيم",
    badge: "إيجار",
    price: "14,339,814",
    area: 257,
    bedrooms: 4,
    bathrooms: 2,
    floors: 1,
    company: "عبد الحكيم سيد القادر",
    companyLogo: "/icons/avatar3.jpg",
    daysLeft: 12,
  },
 
];