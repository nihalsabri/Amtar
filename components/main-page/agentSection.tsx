import { ArrowUpLeft } from "lucide-react";
import SectionTitle from "../common/sectionTitle";
import { Button } from "../ui/button";
import { AgentCard } from "./agentCard";
import { mockAgents } from "@/mockData/Agent";

export default function AgentSection() {
  return (
    <section
      className="flex flex-col justify-center items-center bg-center bg-cover lg:px-20 md:px-10 px-5 "
      style={{ backgroundImage: "url('/main-page/agent/agent2.png')" }}
    >
      <div className="py-24 flex flex-col gap-10 justify-center items-center w-full">
        <SectionTitle
          title=" ابحث عن وسيط عقاري مرخص  "
          description="ابحث عن الوكلاء الموثوقين الذين حصلوا على جوائز لأدائهم الممتاز"
          centred
        />
        <div className="flex justify-center items-center w-full">
          <Button className="w-full max-w-[455px] h-[36px] rounded-full bg-[#052531] text-white text-base font-medium shadow-md hover:shadow-lg">
            بحث
            <ArrowUpLeft className="h-5 w-5 mr-2" />
          </Button>
        </div>

        <div className="w-full  md:overflow-x-visible overflow-x-auto overflow-y-visible pb-4">
          <div 
            className="flex items-center lg:justify-center  gap-4 md:justify-center justify-start pr-4 pl-4 md:w-auto"
            style={{ 
              paddingLeft: `${(mockAgents.length - 1) * 80 + 16}px`,
              width: `${mockAgents.length * 271 + (mockAgents.length - 1) * 80}px`
            }}
          >
            {mockAgents.map((agent, index) => (
              <AgentCard key={agent.id} {...agent} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}