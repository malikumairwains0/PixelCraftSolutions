import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Users, Award, Clock, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Pixel Craft Marketing Solutions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your trusted digital partner in Pakistan, delivering innovative solutions that drive business growth and success.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Based in Pakistan, Pixel Craft Marketing Solutions is a leading digital marketing agency specializing in comprehensive
                digital solutions for businesses of all sizes. Our team of experienced professionals is
                dedicated to helping Pakistani businesses establish a strong digital presence and achieve
                measurable growth.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 5 years of experience in the industry, we have successfully delivered 500+ projects
                and helped numerous businesses transform their digital presence. Our expertise spans across
                web development, mobile applications, digital marketing, and creative design services.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We pride ourselves on our commitment to quality, innovation, and customer satisfaction. Our approach
                combines cutting-edge technology with creative strategies to deliver solutions that not only meet
                but exceed our clients' expectations.
              </p>
              
              <Link href="/contact">
                <Button className="bg-primary hover:bg-blue-700 px-8 py-3">
                  Get Started With Us
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

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Track Record</h2>
            <p className="text-lg text-gray-600">Numbers that speak for our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Client-Centric",
                description: "We put our clients at the center of everything we do, ensuring their success is our priority."
              },
              {
                icon: Award,
                title: "Quality Excellence",
                description: "We deliver high-quality solutions that exceed expectations and stand the test of time."
              },
              {
                icon: Clock,
                title: "Timely Delivery",
                description: "We respect deadlines and ensure projects are completed on time, every time."
              },
              {
                icon: HeartHandshake,
                title: "Trust & Transparency",
                description: "We build lasting relationships based on trust, honesty, and transparent communication."
              }
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-8">
                    <div className="text-primary mb-4">
                      <IconComponent size={48} className="mx-auto" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To empower Pakistani businesses with innovative digital solutions that drive growth, enhance online presence, 
                  and create meaningful connections with their customers. We strive to be the catalyst that transforms 
                  traditional business models into digital success stories.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become Pakistan's most trusted digital partner, recognized for our innovative solutions, 
                  exceptional service quality, and commitment to client success. We envision a future where 
                  every Pakistani business has the digital tools and strategies needed to compete globally.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A diverse team of passionate professionals dedicated to delivering exceptional digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
              alt="Web development team coding in modern workspace"
              className="rounded-xl shadow-lg w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
              alt="Graphic design team working on creative projects"
              className="rounded-xl shadow-lg w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1665686304355-0b09b1e3b03c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
              alt="Video production team setting up equipment"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals and grow your business online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
                Start Your Project
              </Button>
            </Link>
            <Link href="/packages">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
                View Our Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
