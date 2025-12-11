
import Image from "next/image";

export default function Partners() {
  return (
    <>
      <section className="w-full overflow-x-hidden">
        <div className="lg:px-20 md:px-10 px-5 pt-10">
          <div className="flex items-center shrink-0 md:shrink flex-wrap md:justify-between justify-center mb-8">
            <div className="flex flex-col gap-3 justify-start text-right">
              <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-primary">
                شركاء النجاح
              </h2>
              
              <p className="text-muted-foreground">
                شراكات قوية… نتائج أقوى. نفخر بتعاوننا مع شركاء يساهمون في توسيع
                <br /> 
                خدماتنا وتقديم قيمة حقيقية في السوق العقاري.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto pb-4">
            <div className="flex gap-[25px] min-w-max">
              <Image src="/main-page/partners/partner1.svg" alt="Partner 1" width={100} height={100} className="shrink-0" />
              <Image src="/main-page/partners/partner2.svg" alt="Partner 2" width={100} height={100} className="shrink-0" />
              <Image src="/main-page/partners/partner3.svg" alt="Partner 3" width={100} height={100} className="shrink-0" />
              <Image src="/main-page/partners/partner4.svg" alt="Partner 4" width={100} height={100} className="shrink-0" />
              <Image src="/main-page/partners/partner5.svg" alt="Partner 5" width={100} height={100} className="shrink-0" />
              <Image src="/main-page/partners/partner6.svg" alt="Partner 6" width={100} height={100} className="shrink-0" />
              <Image src="/main-page/partners/partner7.svg" alt="Partner 7" width={100} height={100} className="shrink-0" />
              <Image src="/main-page/partners/partner8.svg" alt="Partner 8" width={100} height={100} className="shrink-0" />
              <Image src="/main-page/partners/partner9.svg" alt="Partner 9" width={100} height={100} className="shrink-0" />
              <Image src="/main-page/partners/partner10.svg" alt="Partner 10" width={100} height={100} className="shrink-0" />
              <Image src="/main-page/partners/partner11.svg" alt="Partner 11" width={100} height={100} className="shrink-0" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
