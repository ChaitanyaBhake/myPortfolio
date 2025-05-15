'use client';
import React, { useEffect, useRef } from 'react';
import './BlobAnimation.css';

const BlobAnimation = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    const interBubble = blobRef.current;
    if (!interBubble) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(move);
    }

    const handleMouseMove = (e) => {
      tgX = e.clientX;
      tgY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    move();

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden z-0 pointer-events-none">
      <div className="gradient-bg w-full h-full absolute top-0 left-0 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-0 h-0">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <div className="gradients-container">
          <div className="g1" />
          <div className="g2" />
          <div className="g3" />
          <div className="g4" />
          <div className="g5" />
          <div ref={blobRef} className="interactive"></div>
        </div>
      </div>
    </div>
  );
};

export default BlobAnimation;
