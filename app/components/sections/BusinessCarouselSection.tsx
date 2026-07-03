import { BUSINESS_CAROUSEL_SECTION } from "@/utils/data/businessCarouselSection";
import { TESTIMONIALS } from "@/utils/data/testimonials";
import TestimonialCard from "./TestimonialCard";
import JsonLd from "../JsonLd";
import { reviewsSchema } from "@/lib/structured-data";

const BusinessCarouselSection = () => {
  // Hide the section entirely until there are real CodetoKloud testimonials.
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="w-full">
      <section className="relative bg-[url('/Images/Differentiate_Bg.webp')] bg-cover bg-center bg-no-repeat py-28 px-4 md:px-28 flex flex-col justify-center">
        <h2 className="text-4xl md:text-6xl text-center mb-4 text-white">
          {BUSINESS_CAROUSEL_SECTION.heading}
        </h2>

        <a
          href="https://clutch.co/profile/codetokloud"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 mb-12 text-white/90 hover:text-white transition-colors"
        >
          <span className="text-yellow-400 text-xl tracking-tight">★★★★★</span>
          <span className="text-base md:text-lg">
            Rated 4.9/5 from 9 verified reviews on Clutch
          </span>
        </a>

        {/* Continuous leftward auto-scrolling marquee of testimonials. */}
        <div className="testimonial-marquee overflow-hidden w-full">
          <div className="testimonial-marquee-track">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex gap-8 pr-8 items-stretch"
                aria-hidden={copy === 1}
              >
                {TESTIMONIALS.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-[320px] md:w-[380px] shrink-0"
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <JsonLd data={reviewsSchema(TESTIMONIALS)} />
    </section>
  );
};

export default BusinessCarouselSection;
