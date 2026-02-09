import ServiceCard from "./ServiceCard";
import { servicesData } from "./data";

export default function Services() {
  return (
    // <section>
    <section id="services-section">
      <div className="container relative">
        {/* Section Heading */}

        {/* <div className="bg-linear-to-r from-primary to-secondary absolute w-full h-full top-0 -left-1/4 blur-390"></div> */}
        {/* <div className="bg-darkmode border border-white/5 p-8 rounded-lg"> */}
        {/* <div className="bg-darkmode"> */}
          <div className=" text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary uppercase tracking-wider mb-2">
              Services
            </p>
            <h2 className="mb-4">What We Offer</h2>
            <p className="text-lightblue">
              Powerful services designed to simplify loan management and device
              security.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        {/* </div> */}
        {/* </div> */}
      </div>
    </section>
  );
}
