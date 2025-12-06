import { PropertyProjectCard } from "./propertyProjectCard";
import { mockProperties } from "../../mockData/PropertyProject";
export default function PropertyProjectSlides() {
  return (
    <div className="py-9">
 <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2  md:grid-cols-2  sm:grid-cols-1 gap-6">
          {mockProperties.map((property) => (
            <PropertyProjectCard key={property.id} {...property} />
          ))}
        </div>
    </div>
  );
}