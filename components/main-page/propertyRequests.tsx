import SectionTitle from "../common/sectionTitle";
import PropertyRequestsSlides from "./propertyRequestsSlides";

export default function PropertyRequestsSection() {
  return (
     <>
      <section className="lg:px-20 md:px-10 px-5 pt-10">
            <SectionTitle 
                title="الطلبات العقارية" 
                description={
                    <>
                 استكشف أحدث العقارات المنشورة واطّلع على الطلبات العقارية النشطة
        <br />
       
          فرصة مثالية للبيع أو الشراء بخطوات بسيطة وواضحة.

                    </>
                }
                more
                href={'/propertyRequests'}
            />
                        <PropertyRequestsSlides />

        </section>


</>
    );
}
