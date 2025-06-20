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
  BarChart3,
  Users,
  Settings,
  Paintbrush,
  FileText
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Website Development",
    description: "Custom websites built with modern technologies, responsive design, and optimized performance for Pakistani businesses.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile Friendly", "Content Management", "E-commerce Ready"],
    pricing: {
      basic: "PKR 25,000 - 50,000",
      standard: "PKR 50,000 - 100,000",
      premium: "PKR 100,000+"
    }
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications for iOS and Android with seamless user experience.",
    features: ["iOS & Android", "Cross-Platform", "UI/UX Design", "API Integration", "App Store Deployment", "Maintenance Support"],
    pricing: {
      basic: "PKR 75,000 - 150,000",
      standard: "PKR 150,000 - 300,000",
      premium: "PKR 300,000+"
    }
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies including SEO, PPC, Social Media Marketing, and Content Marketing.",
    features: ["SEO Optimization", "PPC Campaigns", "Social Media Marketing", "Content Marketing", "Email Marketing", "Analytics & Reporting"],
    pricing: {
      basic: "PKR 15,000/month",
      standard: "PKR 30,000/month",
      premium: "PKR 60,000/month"
    }
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Professional graphic design services including logo creation, brochures, business cards, and marketing materials.",
    features: ["Logo Design", "Brand Identity", "Business Cards", "Brochures", "Social Media Graphics", "Print Design"],
    pricing: {
      basic: "PKR 5,000 - 15,000",
      standard: "PKR 15,000 - 30,000",
      premium: "PKR 30,000+"
    }
  },
  {
    icon: PenTool,
    title: "Content Writing",
    description: "High-quality content writing services for blogs, websites, marketing materials, and copywriting needs.",
    features: ["Blog Writing", "Website Content", "SEO Articles", "Copywriting", "Technical Writing", "Social Media Content"],
    pricing: {
      basic: "PKR 2,000/article",
      standard: "PKR 5,000/article",
      premium: "PKR 10,000/article"
    }
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Professional video production services including explainer videos, product demos, and promotional content.",
    features: ["Explainer Videos", "Product Demos", "Promotional Videos", "Animation", "Video Editing", "Motion Graphics"],
    pricing: {
      basic: "PKR 20,000 - 50,000",
      standard: "PKR 50,000 - 100,000",
      premium: "PKR 100,000+"
    }
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "Complete social media management services to build and engage your online community across all platforms.",
    features: ["Content Creation", "Post Scheduling", "Community Management", "Analytics", "Campaign Management", "Influencer Outreach"],
    pricing: {
      basic: "PKR 20,000/month",
      standard: "PKR 40,000/month",
      premium: "PKR 80,000/month"
    }
  },
  {
    icon: Store,
    title: "E-commerce Solutions",
    description: "Complete e-commerce development with payment gateways, inventory management, and online store optimization.",
    features: ["Online Store Setup", "Payment Integration", "Inventory Management", "Order Processing", "SEO Optimization", "Mobile App"],
    pricing: {
      basic: "PKR 50,000 - 100,000",
      standard: "PKR 100,000 - 200,000",
      premium: "PKR 200,000+"
    }
  },
  {
    icon: Megaphone,
    title: "Online Advertising",
    description: "Targeted online advertising campaigns on Google Ads, Facebook Ads, Instagram Ads, and other platforms.",
    features: ["Google Ads", "Facebook Ads", "Instagram Ads", "Campaign Management", "A/B Testing", "Performance Tracking"],
    pricing: {
      basic: "PKR 10,000/month",
      standard: "PKR 25,000/month",
      premium: "PKR 50,000/month"
    }
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    description: "Comprehensive cybersecurity solutions including penetration testing, vulnerability assessment, and security consulting.",
    features: ["Security Audits", "Penetration Testing", "Vulnerability Assessment", "Security Consulting", "Incident Response", "Compliance"],
    pricing: {
      basic: "PKR 30,000 - 50,000",
      standard: "PKR 50,000 - 100,000",
      premium: "PKR 100,000+"
    }
  },
  {
    icon: Server,
    title: "Web Hosting",
    description: "Reliable and secure web hosting solutions with 99.9% uptime guarantee and 24/7 technical support.",
    features: ["Shared Hosting", "VPS Hosting", "Dedicated Servers", "SSL Certificates", "Daily Backups", "24/7 Support"],
    pricing: {
      basic: "PKR 3,000/year",
      standard: "PKR 8,000/year",
      premium: "PKR 15,000/year"
    }
  },
  {
    icon: Globe,
    title: "Domain Registration",
    description: "Domain registration and management services for all popular extensions with competitive pricing.",
    features: ["Domain Registration", "Domain Transfer", "DNS Management", "Email Hosting", "Domain Privacy", "Renewal Management"],
    pricing: {
      basic: "PKR 2,000/year",
      standard: "PKR 3,500/year",
      premium: "PKR 5,000/year"
    }
  },
  {
    icon: Mic,
    title: "Voice Over Services",
    description: "Professional voice over services for commercials, explainer videos, presentations, and multimedia content.",
    features: ["Commercial Voice Over", "Narration", "Multiple Languages", "Professional Equipment", "Script Writing", "Audio Editing"],
    pricing: {
      basic: "PKR 5,000 - 10,000",
      standard: "PKR 10,000 - 20,000",
      premium: "PKR 20,000+"
    }
  },
  {
    icon: FileText,
    title: "Transcription Services",
    description: "Accurate transcription services for audio and video content in multiple languages with quick turnaround.",
    features: ["Audio Transcription", "Video Transcription", "Multiple Languages", "Time Stamping", "Subtitle Creation", "Proofreading"],
    pricing: {
      basic: "PKR 500/minute",
      standard: "PKR 800/minute",
      premium: "PKR 1,200/minute"
    }
  },
  {
    icon: Star,
    title: "Online Reputation Management",
    description: "Monitor and manage your online reputation across all digital platforms to maintain a positive brand image.",
    features: ["Reputation Monitoring", "Review Management", "Crisis Management", "Brand Monitoring", "Social Listening", "Reporting"],
    pricing: {
      basic: "PKR 20,000/month",
      standard: "PKR 40,000/month",
      premium: "PKR 80,000/month"
    }
  },
  {
    icon: Settings,
    title: "Web Maintenance",
    description: "Ongoing website maintenance and support services to keep your website secure, updated, and performing optimally.",
    features: ["Security Updates", "Content Updates", "Performance Optimization", "Backup Management", "Bug Fixes", "Technical Support"],
    pricing: {
      basic: "PKR 8,000/month",
      standard: "PKR 15,000/month",
      premium: "PKR 25,000/month"
    }
  },
  {
    icon: Paintbrush,
    title: "UI/UX Design",
    description: "User-centered design services focusing on creating intuitive and engaging user experiences for digital products.",
    features: ["User Research", "Wireframing", "Prototyping", "User Testing", "Interface Design", "Design Systems"],
    pricing: {
      basic: "PKR 30,000 - 60,000",
      standard: "PKR 60,000 - 120,000",
      premium: "PKR 120,000+"
    }
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Comprehensive data analytics services to help you understand your customers and optimize business performance.",
    features: ["Web Analytics", "Performance Tracking", "Customer Analytics", "Business Intelligence", "Custom Reports", "Data Visualization"],
    pricing: {
      basic: "PKR 15,000/month",
      standard: "PKR 30,000/month",
      premium: "PKR 60,000/month"
    }
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Digital Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to elevate your business and drive growth in the Pakistani market.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="service-card-hover">
                  <CardContent className="p-8">
                    <div className="flex items-start mb-6">
                      <div className="text-primary mr-4 flex-shrink-0">
                        <IconComponent size={40} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Pricing Tiers:</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Basic:</span>
                          <span className="text-sm font-medium text-primary">{service.pricing.basic}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Standard:</span>
                          <span className="text-sm font-medium text-primary">{service.pricing.standard}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Premium:</span>
                          <span className="text-sm font-medium text-primary">{service.pricing.premium}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't see exactly what you're looking for? We create custom digital solutions tailored to your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-blue-700 px-8 py-3">
                Request Custom Quote
              </Button>
            </Link>
            <Link href="/packages">
              <Button variant="outline" className="px-8 py-3">
                View Service Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
