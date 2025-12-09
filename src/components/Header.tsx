"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "News", href: "#news" },
    { name: "Contact us", href: "#contact" },
  ];

  const menuVariants = {
    closed: {
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    open: {
      y: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1 }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled && !isMobileMenuOpen
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4 text-black"
          : "bg-transparent py-6 text-white"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative z-50">
        {/* Logo */}
        <div className={`flex items-center gap-2 font-bold text-2xl tracking-tighter cursor-pointer ${isMobileMenuOpen ? "text-white" : ""}`}>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
            U
          </div>
          <span style={{ fontFamily: "Raleway, sans-serif" }}>UNOMEDIA</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[1.1rem] font-medium hover:text-primary transition-colors ${
                isScrolled ? "text-gray-700" : "text-white/90"
              }`}
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {link.name}
            </a>
          ))}
          <Button
            variant={isScrolled ? "default" : "secondary"}
            className="ml-4"
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="text-white w-6 h-6" />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-black z-40 flex flex-col pt-32 px-6 md:hidden h-screen text-right"
          >
            <div className="flex flex-col gap-2 items-end">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={itemVariants}
                  className="group block py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span 
                    className="block text-[2rem] font-bold text-white group-hover:text-primary transition-colors"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {link.name}
                  </span>
                </motion.a>
              ))}
              
              <motion.div variants={itemVariants} className="mt-12 space-y-2 text-gray-400 text-sm">
                <p>123 Innovation Dr, Tech City</p>
                <p>hello@unomedia.com</p>
                <p>+1 (555) 123-4567</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
