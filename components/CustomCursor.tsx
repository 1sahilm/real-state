"use client";
import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorBorderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorBorder = cursorBorderRef.current;
    const cursorPos = { x: 0, y: 0 };
    const cursorBorderPos = { x: 0, y: 0 };

    document.addEventListener("mousemove", (e) => {
      cursorPos.x = e.clientX;
      cursorPos.y = e.clientY;

      if (cursor) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    });

    function loop() {
      const easting = 10; // Decreased from 20 to 10 for increased sensitivity
      cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
      cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

      if (cursorBorder) {
        cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
      }
      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.dataset.cursor === "pointer" && cursorBorder) {
        cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
        cursorBorder.style.setProperty("--size", "30px");
      }
      if (target.dataset.cursor === "pointer2" && cursorBorder) {
        cursorBorder.style.backgroundColor = "white";
        cursorBorder.style.mixBlendMode = "difference";
        cursorBorder.style.setProperty("--size", "80px");
      }
    };

    const handleMouseOut = () => {
      if (cursorBorder) {
        cursorBorder.style.backgroundColor = "unset";
        cursorBorder.style.mixBlendMode = "unset";
        cursorBorder.style.setProperty("--size", "50px");
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor"></div>
      <div ref={cursorBorderRef} className="custom-cursor-border"></div>
      <style jsx global>{`
        .custom-cursor, .custom-cursor-border {
          pointer-events: none;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999;
          mix-blend-mode: difference;
        }
        .custom-cursor {
          width: 18px;
          height: 18px;
          background-color: white;
          border-radius: 50%;
        }
        .custom-cursor-border {
          width: var(--size, 50px);
          height: var(--size, 50px);
          border-radius: 50%;
          border: 1px solid black;
          transition: all 0.08s ease-out;
        }
        body {
          cursor: none;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
