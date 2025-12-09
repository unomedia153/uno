"use client";

import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                A
              </div>
              <span>AGENCY</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We create digital experiences that transform brands and grow businesses. 
              Let's build something amazing together.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Our Services</FooterLink>
              <FooterLink href="#">Portfolio</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <FooterLink href="#">Web Development</FooterLink>
              <FooterLink href="#">Mobile Apps</FooterLink>
              <FooterLink href="#">UI/UX Design</FooterLink>
              <FooterLink href="#">Digital Marketing</FooterLink>
              <FooterLink href="#">Consulting</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={16} />
                <span>123 Innovation Dr, Tech City, TC 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={16} />
                <span>hello@agency.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Agency Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a
      href="#"
      className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a href={href} className="hover:text-white transition-colors block">
        {children}
      </a>
    </li>
  );
}
