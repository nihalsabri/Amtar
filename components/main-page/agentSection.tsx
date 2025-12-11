
import { ArrowUpLeft } from "lucide-react";
import SectionTitle from "../common/sectionTitle";
import { Button } from "../ui/button";
import { AgentCard } from "./agentCard";
import { mockAgents } from "@/mockData/Agent";

export default function AgentSection() {
  return (
    <section
      className="flex flex-col justify-center items-center bg-center bg-cover lg:px-20 md:px-10 px-5 mb-20"
      style={{ backgroundImage: "url('/main-page/agent/agent2.png')" }}
    >
      <div className="py-24 flex flex-col gap-10 justify-center items-center w-full">
        <SectionTitle
          title="ابحث عن وسيط عقاري مرخص"
          description="ابحث عن الوكلاء الموثوقين الذين حصلوا على جوائز لأدائهم الممتاز"
          centred
        />
        <div className="flex justify-center items-center w-full">
          <Button className="w-full max-w-[455px] h-[36px] rounded-full bg-[#052531] text-white text-base font-medium shadow-md hover:shadow-lg">
            بحث
            <ArrowUpLeft className="h-5 w-5 mr-2" />
          </Button>
        </div>

        <div className="w-full pb-4">
          {/* للشاشات الكبيرة - كروت مركزة مع باقي العناصر */}
          {/* <div className="hidden md:flex justify-center items-center gap-4 px-4 max-w-6xl mx-auto">
            {mockAgents.map((agent, index) => (
              <AgentCard key={agent.id} {...agent} index={index} />
            ))}
          </div> */}

<div className="hidden md:flex justify-center items-center gap-2 px-6 w-full max-w-6xl lg:mr-[10vw] md:mr-0">  {mockAgents.map((agent, index) => (
    <AgentCard key={agent.id} {...agent} index={index} />
  ))}
</div>

          {/* للشاشات الصغيرة - scroll أفقي */}
          <div className="md:hidden flex overflow-x-auto scrollbar-hide px-4">
            <div className="flex items-center gap-6 min-w-max">
              {mockAgents.map((agent, index) => (
                <div key={agent.id} className="flex-shrink-0 w-[85vw]">
                  <AgentCard {...agent} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}