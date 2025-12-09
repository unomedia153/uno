"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isOnSubPage = pathname !== "/";

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
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "News", href: "/news" },
    { name: "Contact us", href: "/contact" },
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
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative z-50">
        {/* Logo */}
        <Link href="/" className={`flex items-center gap-2 font-bold text-2xl tracking-tighter cursor-pointer`} style={{ fontFamily: "Raleway, sans-serif" }}>
          <span style={{ color: "#2C94F5" }}>UNO</span>
          <span className={isScrolled || isOnSubPage ? "text-black" : "text-white"}>MEDIA</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const textColor = isScrolled || isOnSubPage ? "text-gray-700" : "text-white/90";
            
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[1.1rem] font-medium relative ${textColor} transition-colors`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <span className="relative inline-block">
                  {link.name}
                  <motion.span
                    className="absolute bottom-0 left-0 h-[3px] bg-white"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ display: isScrolled || isOnSubPage ? "none" : "block" }}
                  />
                </span>
              </Link>
            );
          })}
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
            <X className="text-white w-6 h-6 z-50" />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled || isOnSubPage ? "text-black" : "text-white"}`} />
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
                <motion.div
                  key={link.name}
                  variants={itemVariants}
                  className="group block py-2"
                >
                  <Link
                    href={link.href}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      // 모바일에서도 서브 페이지로 이동 시 색상 변경을 위해 약간의 딜레이
                      setTimeout(() => {
                        window.dispatchEvent(new Event('resize'));
                      }, 100);
                    }}
                    className="block"
                  >
                    <span 
                      className="block text-[2rem] font-bold text-white group-hover:text-primary transition-colors"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
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
