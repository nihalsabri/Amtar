import { mockAreas } from "@/mockData/Area";
import { AreaCard } from "./areaCard";

export default function AreaSlides() {
    
return (
    <> <div className=" lg:pr-20 md:pr-10 pr-5 lg:px-20 md:px-10 px-5  bg-[#F1F5F9]">
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 pt-10 gap-6 lg:h-[600px] ">
        {mockAreas.map((area) => (
          <AreaCard key={area.id} {...area} />
        ))}
      </div>

     <div className="md:hidden flex overflow-x-auto  pt-10 pb-6  -mx-5 px-5 scrollbar-hide ">
  {mockAreas.map((area) => (
     <div key={area.id}  className="flex-shrink-0 w-[calc(50vw+50px)] mr-4">
    <AreaCard
      key={area.id}
      title={area.title}
      image={area.image}
      link={area.link}
      size="small"
      position={{ row: 1, col: 1 }}
      count={0} 

    />
{/* //  {index < mockAreas.length - 1 && ( */}
{/* //         <div className="w-4" />
//       )} */}

    </div>
  ))}
</div>
</div>
</>
)
}