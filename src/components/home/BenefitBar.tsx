export default function BenefitBar() {
  const benefits = [
    { title: "Antimicrobial Cork", description: "Naturally repels sweat & odor" },
    { title: "Zero-Slip Rubber Grip", description: "Unmatched stability on any floor" },
    { title: "100% Biodegradable", description: "Sustainably harvested in India" },
    { title: "Complimentary Delivery", description: "Free shipping across the UAE" },
  ];

  return (
    <section className="bg-forest text-sand py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-sand/20 text-center">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center justify-center px-4">
              <h3 className="uppercase tracking-[0.1em] text-xs font-semibold mb-2 text-white">{benefit.title}</h3>
              <p className="text-xs text-sand/70 font-light">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
