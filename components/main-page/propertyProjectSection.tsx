import SectionTitle from "../common/sectionTitle";
import PropertyProjectSlides from "./propertyProjectSlides";

export default function PropertyProjectSection() {
  return (
    <>  
        <section className="lg:px-20 md:px-10 px-5 pt-10">
            <SectionTitle
                title="مشاريعنا عقارية"
                description={
                    <>
            اكتشف أحدث مشاريعنا العقارية بخيارات مرنة وجودة عالية.  
                    </>
                }
                more
                href={'/propertyProjects'}
            />
                <PropertyProjectSlides  />

        </section>
    </>
  )
}