import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Rocket, Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your Digital Presence in{" "}
              <span className="text-yellow-300">Pakistan</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Leading digital marketing solutions provider offering comprehensive web development,
              app development, and digital marketing services tailored for Pakistani businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 h-auto">
                  <Rocket className="mr-2" size={20} />
                  Start Your Project
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 h-auto"
              >
                <Phone className="mr-2" size={20} />
                Call Now: +92-51-1234567
              </Button>
            </div>
          </div>
          <div className="lg:text-right">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Digital marketing team collaborating in modern office"
              className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
