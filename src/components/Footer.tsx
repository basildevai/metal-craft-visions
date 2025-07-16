import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">VCM Industries</h3>
            <p className="text-muted-foreground mb-4">
              Professional metal fabrication and construction services. 
              Quality craftsmanship that stands the test of time.
            </p>
            <p className="text-foreground font-semibold">VC Mathai</p>
            <p className="text-sm text-muted-foreground">Owner & Master Fabricator</p>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Our Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Welding Services</li>
              <li>• Gate Manufacturing</li>
              <li>• Roofing Sheet Installation</li>
              <li>• Staircase Fabrication</li>
              <li>• Grinding Services</li>
              <li>• General Manufacturing</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:9494500000" className="text-primary hover:underline">
                  9494500000
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Serving the entire region</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Mon-Sat: 8AM-6PM</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2024 VCM Industries. All rights reserved. | Professional Metal Fabrication & Construction Services
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;