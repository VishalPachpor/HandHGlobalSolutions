export function CompanyDescription() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              {"Transforming Operations Across Industries"}
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Your Strategic Partner for Operational Excellence At HS Global
              Services, we meet you where you are understanding your unique
              challenges and delivering tailored solutions that drive measurable
              success. With deep expertise across{" "}
              <span className="font-semibold uppercase">
                Mortgage, Banking, and Insurance
              </span>
              and Finance, Healthcare, Digital Services, Logistics, and Customer
              Support, we architect solutions that adapt to your evolving needs
              and dynamic market conditions.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Our consultative approach combines proven methodologies with
              innovative thinking to design compliant, modernized operations
              that enhance agility, elevate performance, and unlock value at
              every stage of your business journey. Powered by advanced
              technology, adaptive operating models, and world-class global
              talent, our solutions scale seamlessly with your growth—creating
              operational synergies and delivering transformational results.
            </p>
          </div>

          <div className="relative">
            <img
              src="/professional-business-team-collaborating-in-modern.jpg"
              alt="Professional team collaboration"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
