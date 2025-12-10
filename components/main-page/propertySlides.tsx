// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { mockData, mockData2 } from "@/mockData/Property";
// import { PropertyCard } from "./propertyCard";

// export function PropertySlides() {
//   return (
//     <div className="flex w-full flex-col gap-6 py-9 lg:pr-20 md:pr-10 pr-5">
//       <Tabs defaultValue="Riyadh" dir="rtl">
//         <TabsList className="bg-white rounded-none">
//           <TabsTrigger
//             value="Riyadh"
//             className="rounded-none px-4 py-2 text-gray-600
//       data-[state=active]:text-black
//       data-[state=active]:border-b-2
//       data-[state=active]:border-b-black
//       border-b-2 border-transparent text-xs md:text-sm"
//           >
//             بيع
//           </TabsTrigger>
//           <TabsTrigger
//             value="Macca"
//             className="rounded-none px-4 py-2 text-gray-600
//       data-[state=active]:text-black
//       data-[state=active]:border-b-2
//       data-[state=active]:border-b-black
//       border-b-2 border-transparent text-xs md:text-sm"
//           >
// إيجار          </TabsTrigger>
         
//         </TabsList>
//         <TabsContent value="Riyadh">
//           <div className="grid 
//   grid-flow-col 
//   auto-cols-[403px] 
//  lg :gap-x-4
//  md:gap-x-2
//   overflow-x-auto
//   snap-x
//   snap-mandatory
//   sm:gap-x-0
  
//   ">
//             {mockData.map((card, index) => (
//               <PropertyCard key={index} {...card} />
//             ))}
//           </div>
//         </TabsContent>
//         <TabsContent value="Macca">
//           <div className="grid 
//   grid-flow-col 
//   auto-cols-[403px] 
//  lg :gap-x-4
//  md:gap-x-2
//   overflow-x-auto
//   snap-x
//   snap-mandatory 
  
// sm:gap-x-0


// ">
//             {mockData2.map((card, index) => (
//                    <div key={index} className="flex-shrink-0 w-[403px] "> 
//               <PropertyCard key={index} {...card} />
//             </div>
//             ))}
//           </div>
//         </TabsContent>
        
//       </Tabs>
//     </div>
//   );
// }

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockData, mockData2 } from "@/mockData/Property";
import { PropertyCard } from "./propertyCard";

export function PropertySlides() {
  return (
    <div className="flex w-full flex-col gap-6 py-9 lg:pr-20 md:pr-10 pr-5">
      <Tabs defaultValue="Riyadh" dir="rtl">
        <TabsList className="bg-white rounded-none">
          <TabsTrigger
            value="Riyadh"
            className="rounded-none px-4 py-2 text-gray-600
              data-[state=active]:text-black
              data-[state=active]:border-b-2
              data-[state=active]:border-b-black
              border-b-2 border-transparent text-xs md:text-sm"
          >
            بيع
          </TabsTrigger>
          <TabsTrigger
            value="Macca"
            className="rounded-none px-4 py-2 text-gray-600
              data-[state=active]:text-black
              data-[state=active]:border-b-2
              data-[state=active]:border-b-black
              border-b-2 border-transparent text-xs md:text-sm"
          >
            إيجار
          </TabsTrigger>
        </TabsList>

   
        <TabsContent value="Riyadh">
          <div className="flex overflow-x-auto pb-4 -mx-5 px-5 snap-x snap-mandatory">
            {mockData.map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[403px] px-1 md:px-2 lg:px-4"
              >
                <PropertyCard {...card} />
              </div>
            ))}
          </div>
        </TabsContent>

      
        <TabsContent value="Macca">
          <div className="flex overflow-x-auto pb-4 -mx-1 px-2 snap-x snap-mandatory">
            {mockData2.map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[403px] px-1 md:px-2 lg:px-4"
              >
                <PropertyCard {...card} />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}