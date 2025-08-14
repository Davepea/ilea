"use client"
import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'

type BlendMode = 
  | 'normal' 
  | 'multiply' 
  | 'screen' 
  | 'overlay' 
  | 'darken' 
  | 'lighten' 
  | 'color-dodge' 
  | 'color-burn' 
  | 'hard-light' 
  | 'soft-light' 
  | 'difference' 
  | 'exclusion' 
  | 'hue' 
  | 'saturation' 
  | 'color' 
  | 'luminosity';

interface CursorProps {
  className?: string;
  dotColor?: string;
  hoverColor?: string;
  blendMode?: BlendMode;
  size?: {
    dot: number;
    hover: number;
  };
}

const Cursor: React.FC<CursorProps> = ({
  className = '',
  dotColor = '#ffffff',
  hoverColor = '#ff6b6b',
  blendMode = 'difference',
  size = { dot: 8, hover: 40 }
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    // Check if element is hoverable (text, links, buttons, etc.)
    const isHoverableElement = (element: Element): boolean => {
      const hoverableSelectors = [
        'a', 'button', 'input', 'textarea', 'select',
        '[role="button"]', '[role="link"]', '.cursor-hover',
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span',
        'label', '.clickable', '[data-cursor="hover"]'
      ];
      
      return hoverableSelectors.some(selector => 
        element.matches(selector) || element.closest(selector)
      );
    };

    // Mouse over handler
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element;
      if (isHoverableElement(target)) {
        setIsHovering(true);
      }
    };

    // Mouse out handler
    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as Element;
      if (isHoverableElement(target)) {
        setIsHovering(false);
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.body.style.cursor = 'auto';
    };
  }, []);

  // Update cursor position and state
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    gsap.to(cursor, {
      x: cursorPos.x,
      y: cursorPos.y,
      duration: 0.15,
      ease: "power2.out"
    });
  }, [cursorPos]);

  // Handle hover state changes
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    if (isHovering) {
      gsap.to(cursor, {
        scale: size.hover / size.dot,
        backgroundColor: hoverColor,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
    } else {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: dotColor,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  }, [isHovering, dotColor, hoverColor, size]);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full ${className}`}
      style={{
        width: `${size.dot}px`,
        height: `${size.dot}px`,
        backgroundColor: dotColor,
        mixBlendMode: blendMode,
        transform: 'translate(-50%, -50%)',
        transition: 'mix-blend-mode 0.3s ease'
      }}
    />
  );
};

export default Cursor;