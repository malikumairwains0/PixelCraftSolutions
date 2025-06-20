import ContactForm from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to transform your digital presence? Contact us today for a free consultation and let's discuss your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-8">Contact Information</h2>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-primary text-white p-3 rounded-lg mr-4 flex-shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                        <p className="text-gray-600">
                          Suite 204, Plaza Center,<br />
                          Blue Area, Islamabad,<br />
                          Pakistan 44000
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-primary text-white p-3 rounded-lg mr-4 flex-shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Phone Numbers</h3>
                        <p className="text-gray-600">
                          Office: +92-51-1234567<br />
                          Mobile: +92-300-1234567
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-primary text-white p-3 rounded-lg mr-4 flex-shrink-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email Addresses</h3>
                        <p className="text-gray-600">
                          General: info@pixelcraftpk.com<br />
                          Support: support@pixelcraftpk.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-primary text-white p-3 rounded-lg mr-4 flex-shrink-0">
                        <Clock size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 9:00 AM - 2:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <Card>
                  <CardContent className="p-0">
                    <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <MapPin size={48} className="mx-auto mb-2" />
                        <p>Interactive Map</p>
                        <p className="text-sm">Blue Area, Islamabad, Pakistan</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Common questions about our services and process</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does it take to complete a website project?",
                answer: "Project timelines vary depending on complexity. A basic website typically takes 2-4 weeks, while more complex projects with custom features may take 6-8 weeks. We provide detailed timelines during the planning phase."
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Yes, all our packages include post-launch support. We offer various maintenance plans ranging from basic updates to comprehensive ongoing support and optimization services."
              },
              {
                question: "Can you help with digital marketing for my existing website?",
                answer: "Absolutely! We offer comprehensive digital marketing services including SEO, PPC, social media marketing, and content marketing for both new and existing websites."
              },
              {
                question: "What is your payment structure?",
                answer: "We typically require 50% advance payment to start the project and 50% upon completion. For larger projects, we can arrange milestone-based payments. Monthly retainer fees apply for ongoing services."
              },
              {
                question: "Do you work with businesses outside of Pakistan?",
                answer: "While we're based in Pakistan, we work with clients globally. We have experience serving international markets and can accommodate different time zones and requirements."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait any longer. Contact us today and let's transform your digital presence together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+92-51-1234567" className="inline-block">
              <div className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Call Now: +92-51-1234567
              </div>
            </a>
            <a href="mailto:info@pixelcraftpk.com" className="inline-block">
              <div className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors">
                Email Us: info@pixelcraftpk.com
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
