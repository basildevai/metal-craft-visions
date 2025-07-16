import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Wrench, Construction, DoorOpen, Home, Factory, Grid3X3, Settings } from "lucide-react";
import weldingImage from "@/assets/welding-service.jpg";
import staircaseImage from "@/assets/staircase-work.jpg";
import gateImage from "@/assets/gate-installation.jpg";
import roofingImage from "@/assets/roofing-installation.jpg";
import grindingImage from "@/assets/grinding-service.jpg";

const services = [
  {
    icon: Zap,
    title: "Welding Services",
    description: "Expert welding for structural steel, repairs, and custom fabrication projects.",
    image: weldingImage,
    features: ["Arc Welding", "MIG/TIG Welding", "Structural Welding", "Repair Work"]
  },
  {
    icon: DoorOpen,
    title: "Gate Manufacturing",
    description: "Custom gates designed for security, durability, and aesthetic appeal.",
    image: gateImage,
    features: ["Security Gates", "Decorative Gates", "Automated Systems", "Custom Designs"]
  },
  {
    icon: Home,
    title: "Roofing Sheet Installation",
    description: "Professional metal roofing solutions for industrial and residential buildings.",
    image: roofingImage,
    features: ["Industrial Roofing", "Weather Resistant", "Quick Installation", "Quality Materials"]
  },
  {
    icon: Construction,
    title: "Staircase Fabrication",
    description: "Custom staircases combining safety, functionality, and modern design.",
    image: staircaseImage,
    features: ["Industrial Stairs", "Safety Railings", "Custom Designs", "Code Compliant"]
  },
  {
    icon: Settings,
    title: "Grinding Services",
    description: "Precision grinding and finishing for perfect surface preparation.",
    image: grindingImage,
    features: ["Surface Preparation", "Metal Finishing", "Precision Work", "Quality Control"]
  },
  {
    icon: Factory,
    title: "General Manufacturing",
    description: "Complete fabrication solutions for industrial and commercial projects.",
    image: null,
    features: ["Custom Fabrication", "Industrial Parts", "Prototype Development", "Mass Production"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-steel">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our <span className="text-primary">Expert Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive metal fabrication and construction services delivered with precision and quality
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-steel transition-all duration-300 bg-card border-border hover:border-primary/30">
                {service.image && (
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-colors duration-300"></div>
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <ArrowRight className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="w-full group-hover:border-primary/50">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="cta" size="lg">
            Get Quote for Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;