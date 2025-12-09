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
  
  // 메인 페이지("/")가 아니면 서브 페이지로 간주
  const isOnSubPage = pathname !== "/";

  // 텍스트가 검정색이어야 하는 상황: 스크롤이 되었거나 OR 서브 페이지일 때
  const isDarkText = isScrolled || isOnSubPage;

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
          : isOnSubPage 
            ? "bg-white/90 backdrop-blur-md shadow-sm py-4" // 서브페이지면 배경 흰색
            : "bg-transparent py-6" // 메인이고 스크롤 안했으면 투명
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative z-50">
        {/* Logo */}
        <Link href="/" className={`flex items-center gap-2 font-bold text-2xl tracking-tighter cursor-pointer`} style={{ fontFamily: "Raleway, sans-serif" }}>
          {/* UNO는 항상 파란색 */}
          <span style={{ color: "#2C94F5" }}>UNO</span>
          {/* MEDIA는 상황에 따라 색상 변경 */}
          <span className={isDarkText ? "text-black" : "text-white"}>MEDIA</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            
            return (
              <Link
                key={link.name}
                href={link.href}
                // isDarkText가 true면 검정, 아니면 흰색. transition-colors로 부드럽게.
                className={`text-[1.1rem] font-medium relative transition-colors ${
                  isDarkText ? "text-black" : "text-white"
                }`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <span className="relative inline-block py-1">
                  {link.name}
                  {/* 밑줄 애니메이션 */}
                  <motion.span
                    className={`absolute bottom-0 left-0 h-[3px] ${isDarkText ? "bg-black" : "bg-white"}`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
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
            // 메뉴가 열렸을 때는 X 아이콘 (보통 오버레이 위라 흰색 유지)
            <X className="text-white w-6 h-6 z-50" />
          ) : (
            // 메뉴가 닫혔을 때는 햄버거 아이콘 (배경색에 따라 색상 변경)
            <Menu className={`w-6 h-6 ${isDarkText ? "text-black" : "text-white"}`} />
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
                      // 페이지 이동 트리거
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