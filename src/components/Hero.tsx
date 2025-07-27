import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-workshop.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Professional 
            <span className="text-primary block">Metal Fabrication</span>
            & Construction Services
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Expert craftsmanship in welding, gate manufacturing, roofing, and industrial fabrication. 
            Quality metalwork that stands the test of time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:9495194214">
              <Button variant="cta" size="lg" className="animate-glow-pulse">
                <Phone className="mr-2 h-5 w-5" />
                Call 9495194214
              </Button>
            </a>
            
            <Button variant="outline" size="lg">
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-2">Trusted by</p>
            <p className="text-2xl font-semibold text-primary">VC Mathai</p>
            <p className="text-muted-foreground">Owner & Master Fabricator</p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;