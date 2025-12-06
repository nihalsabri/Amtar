
import SectionTitle from "../common/sectionTitle";
import MarketSlides from "./MarketSlides";
export default function MarketSection() {
  return (
    <>
      <section className="lg:px-20 md:px-10 px-5 pt-10">
        <SectionTitle
          title="تسويق عقارات الملاك"
          description="عقار من المالك مباشرة… سهولة في التواصل وفرص أفضل للاتفاق"
          more
          href={'/market'}
        />
      </section>
      <MarketSlides />
    </>
  );
}