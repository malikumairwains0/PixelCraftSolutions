import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, Star } from "lucide-react";

const packages = [
  {
    name: "Starter Package",
    price: "PKR 35,000",
    description: "Perfect for small businesses getting started online",
    badge: null,
    features: [
      "5-Page Website Development",
      "Responsive Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "Social Media Links",
      "3 Months Support",
      "Basic Analytics Setup",
      "Mobile Optimization"
    ],
    popular: false,
    buttonText: "Choose Starter",
    buttonVariant: "outline" as const
  },
  {
    name: "Professional Package",
    price: "PKR 75,000",
    description: "Ideal for growing businesses with advanced needs",
    badge: "Most Popular",
    features: [
      "10-Page Website + Blog",
      "Custom Design & Development",
      "Advanced SEO Setup",
      "Social Media Integration",
      "Google Analytics Setup",
      "6 Months Support",
      "Logo Design Included",
      "Content Management System",
      "Email Marketing Setup",
      "Performance Optimization"
    ],
    popular: true,
    buttonText: "Choose Professional",
    buttonVariant: "default" as const
  },
  {
    name: "Enterprise Package",
    price: "PKR 150,000",
    description: "Complete digital solution for established businesses",
    badge: null,
    features: [
      "Unlimited Pages + E-commerce",
      "Custom Web Application",
      "Advanced SEO + Marketing",
      "Social Media Management",
      "Content Writing (10 Articles)",
      "12 Months Support",
      "Complete Brand Package",
      "Mobile App Development",
      "Advanced Analytics",
      "Priority Support",
      "Training & Documentation",
      "Security Features"
    ],
    popular: false,
    buttonText: "Choose Enterprise",
    buttonVariant: "outline" as const
  }
];

const addOnServices = [
  {
    name: "Digital Marketing Boost",
    price: "PKR 25,000/month",
    description: "Comprehensive digital marketing services",
    features: ["SEO Optimization", "PPC Campaigns", "Social Media Marketing", "Content Creation", "Analytics & Reporting"]
  },
  {
    name: "E-commerce Add-on",
    price: "PKR 40,000",
    description: "Complete online store functionality",
    features: ["Payment Gateway Integration", "Inventory Management", "Order Processing", "Customer Accounts", "Product Catalog"]
  },
  {
    name: "Mobile App Development",
    price: "PKR 100,000",
    description: "Native mobile app for iOS and Android",
    features: ["Cross-platform Development", "App Store Deployment", "Push Notifications", "User Authentication", "API Integration"]
  },
  {
    name: "Maintenance & Support",
    price: "PKR 15,000/month",
    description: "Ongoing website maintenance and support",
    features: ["Security Updates", "Content Updates", "Performance Monitoring", "Backup Management", "Technical Support"]
  }
];

export default function Packages() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Service Packages & Pricing</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Choose from our carefully crafted packages designed to meet different business needs and budgets.
            </p>
          </div>
        </div>
      </section>

      {/* Main Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Main Service Packages</h2>
            <p className="text-lg text-gray-600">Complete solutions for businesses at every stage of growth</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-yellow-400 text-primary hover:bg-yellow-400 px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      {pkg.badge}
                    </Badge>
                  </div>
                )}
                <CardContent className={`p-8 ${pkg.popular ? 'bg-gradient-to-b from-blue-50 to-white' : ''}`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-primary mb-2">{pkg.price}</div>
                    <p className="text-gray-600">{pkg.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="text-secondary mr-3 flex-shrink-0" size={16} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/contact">
                    <Button 
                      className={`w-full ${pkg.popular ? 'bg-primary hover:bg-blue-700 text-white' : ''}`}
                      variant={pkg.buttonVariant}
                    >
                      {pkg.buttonText}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Add-on Services</h2>
            <p className="text-lg text-gray-600">Enhance your package with additional services tailored to your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOnServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{service.price}</div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="text-secondary mr-2 flex-shrink-0" size={14} />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Something Different?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand that every business is unique. That's why we offer completely customized solutions 
              tailored to your specific requirements and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Development</h3>
                <p className="text-gray-600 mb-6">
                  Bespoke solutions built from scratch to meet your exact specifications and business goals.
                </p>
                <p className="text-lg font-semibold text-primary">Starting from PKR 100,000</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Large-scale projects with advanced features, integrations, and ongoing support for enterprises.
                </p>
                <p className="text-lg font-semibold text-primary">Starting from PKR 500,000</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Consultation Services</h3>
                <p className="text-gray-600 mb-6">
                  Expert consultation to help you choose the right digital strategy and technology stack.
                </p>
                <p className="text-lg font-semibold text-primary">PKR 10,000/hour</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment & Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Payment Terms</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>50% advance payment to start the project</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>50% payment upon project completion and delivery</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Monthly retainer for ongoing services</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Flexible payment plans available for large projects</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Detailed project planning and timeline</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Regular progress updates and communication</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Quality assurance and testing</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Training and documentation</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Post-launch support and maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and get a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
                Get Free Consultation
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
              Call: +92-51-1234567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
