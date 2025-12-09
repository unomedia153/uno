"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // 링크나 버튼에 호버 시 크기 증가
    const handleLinkHover = () => setIsHovering(true);
    const handleLinkLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // 링크와 버튼에 호버 이벤트 추가
    const links = document.querySelectorAll("a, button");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHover);
      link.addEventListener("mouseleave", handleLinkLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover);
        link.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, []);

  return (
    <>
      {/* 큰 동그라미 - 배경 (블러 효과) */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 0.4 : 0.25,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        <div
          className="rounded-full"
          style={{
            width: "60px",
            height: "60px",
            background: "linear-gradient(135deg, #FFE5F1 0%, #E0F2FE 50%, #F0E6FF 100%)",
            filter: "blur(12px)",
          }}
        />
      </motion.div>

      {/* 중간 동그라미 */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: isHovering ? 1.3 : 1,
          opacity: 0.5,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        <div
          className="rounded-full"
          style={{
            width: "30px",
            height: "30px",
            background: "linear-gradient(135deg, #FFD1E8 0%, #BFDBFE 50%, #DDD6FE 100%)",
            filter: "blur(4px)",
          }}
        />
      </motion.div>

      {/* 작은 동그라미 - 포인트 */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        <div
          className="rounded-full"
          style={{
            width: "10px",
            height: "10px",
            background: "linear-gradient(135deg, #FFB3D9 0%, #93C5FD 50%, #C4B5FD 100%)",
            boxShadow: "0 0 15px rgba(44, 148, 245, 0.4)",
          }}
        />
      </motion.div>
    </>
  );
}

