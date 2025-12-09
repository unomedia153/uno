"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const SLIDE_DURATION = 6000; // 6 seconds per slide

const slides = [
  {
    id: 1,
    title: "Digital Innovation",
    slogan: "Building the future of web, one pixel at a time.",
    image: "https://images.unsplash.com/photo-1652212976547-16d7e2841b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" // Public domain sample
  },
  {
    id: 2,
    title: "Expert Development",
    slogan: "Robust, scalable, and secure applications for your business.",
    image: "https://images.unsplash.com/photo-1559842135-8d5e4214ae77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    video: ""
  },
  {
    id: 3,
    title: "Creative Solutions",
    slogan: "Designing experiences that captivate and convert.",
    image: "https://images.unsplash.com/photo-1742440710226-450e3b85c100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    video: ""
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Background Media */}
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay */}
            
            {slides[currentSlide].video ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                poster={slides[currentSlide].image}
                key={slides[currentSlide].video} // Force re-render on change
              >
                <source src={slides[currentSlide].video} type="video/mp4" />
              </video>
            ) : (
              <motion.div
                className="w-full h-full relative"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
              >
                <Image
                  src={slides[currentSlide].image}
                  alt="Background"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            )}
          </div>

          {/* Content */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter"
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto"
              >
                {slides[currentSlide].slogan}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="pt-8 flex flex-col md:flex-row gap-4 justify-center items-center"
              >
                <Button size="lg" className="rounded-full px-8 text-lg h-14 bg-white text-black hover:bg-gray-200 border-none">
                  Start Project <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-14 border-white text-white hover:bg-white/20">
                  <Play className="mr-2 w-5 h-5 fill-current" /> Watch Reel
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress / Navigation */}
      <div className="absolute bottom-12 left-0 right-0 z-30 flex justify-center gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className="group relative h-1 w-16 bg-white/30 overflow-hidden rounded-full transition-all hover:h-2"
          >
            {index === currentSlide && (
              <motion.div
                className="absolute top-0 left-0 h-full bg-white"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
    </section>
  );
}
