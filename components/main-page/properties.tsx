import SectionTitle from "../common/sectionTitle";
import { PropertySlides } from "./propertySlides";

export default function PropertiesSection() {
  return (
     <>
      <section className="w-full overflow-x-hidden">
            <div className="lg:px-20 md:px-10 px-5 pt-10">
            <SectionTitle 
                title="العقارات" 
                description={
                    <>
            اكتشف كلّ ما هو جديد حول العقارات لتحظى بأفضل سعر.

                    </>
                }
                more
                href={'/properties'}
            />
        </div>
        </section>

            <PropertySlides />

</>
    );
}
