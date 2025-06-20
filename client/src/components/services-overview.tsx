import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Code, 
  Smartphone, 
  TrendingUp, 
  Palette, 
  PenTool, 
  Video,
  Store,
  Megaphone,
  Shield,
  Server,
  Globe,
  Mic,
  Star,
  BarChart3
} from "lucide-react";

const mainServices = [
  {
    icon: Code,
    title: "Website Development",
    description: "Custom websites built with modern technologies, responsive design, and optimized performance.",
    price: "Starting from PKR 25,000",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications for iOS and Android with seamless user experience.",
    price: "Starting from PKR 75,000",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "SEO, PPC, Social Media Marketing, Content Marketing, and Email Marketing campaigns.",
    price: "Starting from PKR 15,000/month",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Logo creation, brochures, business cards, social media graphics, and infographic design.",
    price: "Starting from PKR 5,000",
  },
  {
    icon: PenTool,
    title: "Content Writing",
    description: "Blog posts, articles, website content, and copywriting services for all your marketing needs.",
    price: "Starting from PKR 2,000/article",
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Explainer videos, product demos, promotional videos, and professional video editing services.",
    price: "Starting from PKR 20,000",
  },
];

const additionalServices = [
  { icon: Store, title: "E-commerce Solutions", price: "From PKR 50,000" },
  { icon: Megaphone, title: "Online Advertising", price: "From PKR 10,000/month" },
  { icon: Shield, title: "Cybersecurity", price: "From PKR 30,000" },
  { icon: Server, title: "Web Hosting", price: "From PKR 3,000/year" },
  { icon: Globe, title: "Domain Registration", price: "From PKR 2,000/year" },
  { icon: Mic, title: "Voice Over", price: "From PKR 5,000" },
  { icon: Star, title: "Reputation Management", price: "From PKR 20,000/month" },
  { icon: BarChart3, title: "Data Analytics", price: "From PKR 15,000/month" },
];

export default function ServicesOverview() {
  return (
    <>
      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Digital Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital services designed to elevate your business presence and drive growth in the Pakistani market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="service-card-hover bg-gray-50 border-gray-200">
                  <CardContent className="p-8">
                    <div className="text-primary text-4xl mb-4">
                      <IconComponent size={40} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-sm text-primary font-medium">
                      {service.price}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-primary hover:bg-blue-700 px-8 py-3">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Complete Digital Solutions</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <IconComponent className="text-primary mx-auto mb-3" size={24} />
                    <h4 className="font-semibold text-gray-900 mb-1">{service.title}</h4>
                    <p className="text-sm text-gray-600">{service.price}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
