"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Progress: React.FC<ProgressProps> = ({

  currentPoints,
  totalPoints,
}) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const targetWidth = `${(currentPoints / totalPoints) * 100}%`;

  useEffect(() => {
    gsap.fromTo(
      progressRef.current,
      { width: "0%" },
      { width: targetWidth, duration: 2, ease: "power1.out" }
    );
  }, [targetWidth]);

  return (
    <div className="max-w-2xl mx-auto flex flex-col relative w-full mt-1">
      <div className="flex justify-between items-center font-semibold">
        <span className="text-lg">
          XP: <span className="text-secondary">{currentPoints}</span>
        </span>
        <span className="text-lg">{totalPoints}</span>
      </div>

      <div className="w-full bg-[#35241C] rounded-sm mt-2 border-t-8 border-[#291911] pl-2 pb-1 h-6">
        <div
          ref={progressRef}
          className="h-full rounded-sm bg-custom-gradient w-0"
        ></div>
      </div>
    </div>
  );
};

export default Progress;
