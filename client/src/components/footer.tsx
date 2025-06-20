import { Link } from "wouter";
import { Box, Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center text-2xl font-bold text-white mb-4">
              <Box className="mr-2" size={28} />
              Pixel Craft
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Leading digital marketing solutions provider in Pakistan, helping businesses grow their online presence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Website Development</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">App Development</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Graphic Design</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Content Writing</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Video Production</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/packages" className="text-gray-300 hover:text-white transition-colors">Packages</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="text-primary mr-3 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-sm">
                  Suite 204, Plaza Center,<br />
                  Blue Area, Islamabad, Pakistan
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="text-primary mr-3 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-sm">+92-51-1234567</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-primary mr-3 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-sm">info@pixelcraftpk.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Pixel Craft Marketing Solutions. All rights reserved. |{" "}
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link> |{" "}
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
