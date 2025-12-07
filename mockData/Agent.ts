
export interface AgentCard {
  id: number;
  name: string;      
  location: string;   
  description: string; 
  color:  'green' | 'black' | 'blue'  | 'white'; 
  image: string;  
  index:number    
}

export const mockAgents: AgentCard[] = [
  {
    id: 1,
    name: "عبد العزيز الحريبي",
    location: "الرياض - مطور عقاري",
    description: "مشوق عقاري",
    color: "green",
    image: "/icons/avatar1.jpg",
    index:1
  },
  {
    id: 2,
    name: "عبد المنعم المهمدي",
    location: "الرياض - مطور عقاري",
    description: "مشوق عقاري",
    color: "black",
    image: "/icons/avatar2.jpg",
        index:1
  },
  {
    id: 3,
    name: "عبد العزيز الحريبي",
    location: "الرياض - مطور عقاري",
    description: "مشوق عقاري",
    color: "blue",
    image: "/icons/avatar1.jpg",
        index:1
  },
  {
    id: 4,
    name: "فارس عبد المالك",
    location: "المدينة المنورة - مسوق عقاري",
    description: "مشوق عقاري",
    color: "white",
    image: "/icons/avatar2.jpg",
        index:1
  },
];