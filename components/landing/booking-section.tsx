'use client'; 

import Cal from "@calcom/embed-react";
import { BlurFade } from "@/components/magicui/blur-fade";

export function BookingSection() {
  return (
    <BlurFade delay={0.1} inView>
      {/* Section needs an ID for navigation */}
      <section className="py-24 bg-code-black-950 text-code-black-50" id="booking">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-lg font-semibold uppercase tracking-widest text-midori-300">
            Booking
          </h2>
          <p className="mb-12 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight">
            Let&apos;s discuss your project!
          </p>

          <div className="max-w-4xl mx-auto bg-code-black-950 p-4 rounded-lg shadow-lg">
            <Cal
              calLink="abdullahsaeed/15min"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{
                // theme: "dark", // Uncomment if needed
                layout: 'month_view' 
              }}
            />
          </div>
        </div>
      </section>
    </BlurFade>
  );
} 