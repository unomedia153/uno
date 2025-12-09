"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // 트레일 위치 추가
      setTrail((prev) => {
        const newTrail = [{ x: e.clientX, y: e.clientY, id: Date.now() }, ...prev];
        // 최대 8개의 트레일 포인트만 유지
        return newTrail.slice(0, 8);
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      {/* 메인 커서 */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        <div
          className="rounded-full border-2"
          style={{
            width: "80px",
            height: "80px",
            borderColor: "#2C94F5",
            opacity: 0.6,
          }}
        />
      </motion.div>

      {/* 트레일 동그라미들 */}
      {trail.map((point, index) => {
        const opacity = 0.3 - (index * 0.03);
        const scale = 1 - (index * 0.05);
        
        return (
          <motion.div
            key={point.id}
            className="fixed pointer-events-none z-[9998]"
            style={{
              left: point.x,
              top: point.y,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: opacity > 0 ? opacity : 0,
              scale: scale > 0.5 ? scale : 0.5,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: index * 0.02,
            }}
          >
            <div
              className="rounded-full border-2"
              style={{
                width: "80px",
                height: "80px",
                borderColor: "#2C94F5",
                opacity: opacity,
              }}
            />
          </motion.div>
        );
      })}
    </>
  );
}
