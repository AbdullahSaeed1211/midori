import ParallaxTextDemo from "@/components/ui/parallax-text-scroll";
import { Skiper19 } from "@/components/ui/skiper19";

export default function ParallaxPage() {
  return (
    <div className="min-h-screen">
      {/* Parallax Text Scroll Component */}
      <section className="py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Parallax Text Scroll</h2>
          <p className="text-gray-600">Scroll to see the velocity-based text animation</p>
        </div>
        <ParallaxTextDemo />
      </section>

      {/* Divider */}
      <div className="h-20 bg-gradient-to-b from-transparent via-gray-100 to-transparent"></div>

      {/* Skiper19 Scroll Path Component */}
      <section>
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold mb-4">Skiper19 Scroll Path</h2>
          <p className="text-gray-600">Watch the curved stroke follow your scroll progress</p>
        </div>
        <Skiper19 />
      </section>
    </div>
  );
}
