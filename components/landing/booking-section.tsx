'use client'; 

import Cal from "@calcom/embed-react";
import { BlurFade } from "@/components/magicui/blur-fade";

export function BookingSection() {
  return (
    <BlurFade delay={0.1} inView>
      {/* Section needs an ID for navigation */}
      <section className="py-24 bg-charcoal-black text-off-white" id="booking">
        <div className="container mx-auto px-4 text-center">
          {/* Updated subtitle style for consistency */}
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-verdant-green font-semibold">
            Booking
          </p>
          {/* Main title */}
          <h2 className="mb-12 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight text-off-white">
            Let&apos;s discuss your project!
          </h2>

          <div className="max-w-4xl mx-auto bg-deep-gray p-4 rounded-lg shadow-lg border border-code-black-700">
            <Cal
              calLink="abdullahsaeed/15min"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{
                // theme: "dark", // Keep commented
                layout: 'month_view' 
              }}
            />
          </div>
        </div>
      </section>
    </BlurFade>
  );
} 