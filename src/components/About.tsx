import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "15+" },
    { icon: Users, label: "Projects Completed", value: "500+" },
    { icon: CheckCircle, label: "Satisfied Clients", value: "100%" },
    { icon: Clock, label: "Response Time", value: "24hrs" }
  ];

  const specialties = [
    "Structural Welding",
    "Custom Fabrication", 
    "Industrial Projects",
    "Residential Work",
    "Emergency Repairs",
    "Quality Assurance"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              About <span className="text-primary">VCM Industries</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                Led by <strong className="text-foreground">VC Mathai</strong>, VCM Industries has been at the forefront 
                of metal fabrication and construction services, delivering exceptional quality and craftsmanship 
                for over a decade.
              </p>
              
              <p>
                Our team combines traditional metalworking expertise with modern techniques to create 
                durable, functional, and aesthetically pleasing solutions for both industrial and 
                residential clients.
              </p>
              
              <p>
                From intricate gate designs to large-scale structural projects, we approach every 
                job with the same commitment to excellence and attention to detail that has made 
                us a trusted name in the industry.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Our Specialties</h3>
              <div className="flex flex-wrap gap-2">
                {specialties.map((specialty, index) => (
                  <Badge key={index} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center p-6 bg-gradient-steel border-border hover:border-primary/30 transition-colors duration-300">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
        
        {/* Why Choose Us */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            Why Choose <span className="text-primary">VCM Industries?</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">Quality Craftsmanship</h4>
              <p className="text-muted-foreground">Every project is executed with precision and attention to detail</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">Timely Delivery</h4>
              <p className="text-muted-foreground">We respect deadlines and deliver projects on schedule</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">Customer Satisfaction</h4>
              <p className="text-muted-foreground">100% commitment to exceeding client expectations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;