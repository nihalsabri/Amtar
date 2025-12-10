
import { mockPropertyRequests } from "@/mockData/PropertyRequests";
import { PropertyRequestsCard } from "./propertyRequestsCard";

export default function PropertyRequestsSlides() {
  return (
    <div className="py-9">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockPropertyRequests.map((property) => (
          <PropertyRequestsCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
}