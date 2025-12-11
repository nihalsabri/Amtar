import { Activity } from "react";
import { ArrowUpLeft } from "lucide-react";
import { Button } from "../ui/button";
import { type SectionTitleProps } from "@/types/section-title";
import Link from "next/link";

export default function SectionTitle({
  title,
  description = "",
  more = false,
  more2 = false,
  centred = false,
  href,
}: SectionTitleProps) {
  return (
    <div
      className={`flex items-center shrink-0 md:shrink flex-wrap ${
    more || more2 ? "md:justify-between justify-end" : "justify-center"
  } 
      `}
    >
      <div className={`flex flex-col gap-3 ${centred ? "items-center" : "justify-start text-right"}`}>
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-primary ">
          {title}
        </h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <Activity mode={more ? "visible" : "hidden"}>
        <Link href={href || "/#"} className="pt-3 md:pt-0">
          <Button className="bg-primary-muted text-primary text-xs md:text-base hover:text-white rounded-full self-end">
            استكشف المزيد <ArrowUpLeft />
          </Button>
        </Link>{" "}
      </Activity>
 <Activity mode={more2 ? "visible" : "hidden"}>
        <Link href={href || "/#"} className="pt-3 md:pt-0">
          <Button className="bg-primary-muted text-primary text-xs md:text-base hover:text-white rounded-full self-end">
            مشاهدة جميع مناطق الممكلة    <ArrowUpLeft />
          </Button>
        </Link>{" "}
      </Activity>


    </div>
  );
}