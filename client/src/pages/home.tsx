import HeroSection from "@/components/hero-section";
import ServicesOverview from "@/components/services-overview";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, RotateCcw, Truck, FileText } from "lucide-react";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      
      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Pixel Craft Marketing Solutions</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Based in Pakistan, we are a leading digital marketing agency specializing in comprehensive
                digital solutions for businesses of all sizes. Our team of experienced professionals is
                dedicated to helping Pakistani businesses establish a strong digital presence and achieve
                measurable growth.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
              </div>
              <Link href="/about">
                <Button className="bg-primary hover:bg-blue-700">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
                alt="Modern office workspace with team collaboration"
                className="rounded-xl shadow-lg w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
                alt="Professional business meeting discussing digital strategy"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your project is delivered on time and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Discovery & Planning",
                description: "We understand your business goals and create a detailed project roadmap.",
              },
              {
                step: "2",
                title: "Design & Development",
                description: "Our team creates stunning designs and develops robust solutions.",
              },
              {
                step: "3",
                title: "Testing & Review",
                description: "Thorough testing and client review ensure perfect delivery.",
              },
              {
                step: "4",
                title: "Launch & Support",
                description: "We launch your project and provide ongoing support and maintenance.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Pages Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Legal & Policy Information</h2>
            <p className="text-lg text-gray-600">Transparent policies to ensure trust and clarity in our business relationship.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Privacy Policy",
                description: "How we collect, use, and protect your personal information.",
                href: "/privacy-policy"
              },
              {
                icon: RotateCcw,
                title: "Return/Refund Policy",
                description: "Clear guidelines on returns, refunds, and revision policies.",
                href: "/refund-policy"
              },
              {
                icon: Truck,
                title: "Service Delivery Policy",
                description: "Timeline, delivery methods, and service completion guidelines.",
                href: "/delivery-policy"
              },
              {
                icon: FileText,
                title: "Terms & Conditions",
                description: "Legal terms governing the use of our services and website.",
                href: "/terms-conditions"
              }
            ].map((policy, index) => {
              const IconComponent = policy.icon;
              return (
                <Card key={index} className="bg-white border border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-primary text-2xl mb-4">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{policy.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{policy.description}</p>
                    <Link href={policy.href}>
                      <span className="text-primary hover:text-blue-700 font-medium text-sm">
                        Read Full Policy →
                      </span>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
