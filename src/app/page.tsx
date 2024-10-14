"use client";
import Image from "next/image";
import levelImage from "@/assets/LevelImage.png";
import Level from "@/components/svg/Level";
import Progress from "@/components/Progress";
import CustomButton from "@/components/CustomButton";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { rewards } from "@/constants/data";
import RewardPopUp from "../components/RewardPopUp";
import { currentPoints, totalPoints, text } from "@/constants/data";

export default function Home() {
  const scaleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (currentPoints === totalPoints) {
      setAnimate(true);
    }
  }, [currentPoints, totalPoints]);

  useEffect(() => {
    if (animate && textRef.current) {
      const chars = textRef.current?.querySelectorAll(".char");
      gsap.fromTo(
        chars,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.1, ease: "power4.out", duration: 0.8 }
      );

      gsap.fromTo(
        scaleRef.current,
        { scale: 4, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        }
      );
    }
  }, [animate]);

  return (
    <section className="md:h-screen h-full w-full relative md:p-10  ">
      <RewardPopUp
        title="Congratulations!"
        subtitle="Command completed successfully!"
        rewards={rewards}
      />
      <Image
        src={levelImage}
        alt="background_image"
        priority
        className="h-full w-full absolute top-0 left-0 bottom-0 right-0 object-cover "
        quality={100}
      />
      <div className="max-w-5xl mx-auto">
        <div className="relative z-10 flex justify-center items-center flex-col md:gap-2 gap-10 md:py-0 py-20">
          <div className="relative">
            <h1
              ref={textRef}
              className="md:text-6xl text-5xl font-extrabold uppercase text-transparent bg-clip-text bg-radial-gradient"
            >
              {text.split("").map((char, index) => (
                <span key={index} className="char">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
          </div>
          <div className="md:w-56 md:h-48 w-60 h-full relative" ref={scaleRef}>
            <Level />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center z-10 relative md:py-8 px-0 py-8 ">
          <span className="text-primary text-5xl font-bold text-shadow md:mb-1 mb-4  text-shadow-[#834C30] text-shadow-blur-4 text-shadow-x-2 text-shadow-y-2">
            Corporal
          </span>

          <Progress currentPoints={currentPoints} totalPoints={totalPoints} />
          <div className="mt-7">
            <CustomButton />
          </div>
        </div>

        <div className=" relative flex flex-col justify-center items-center text-center gap-4 ">
          <div className="flex flex-col">
            <span className="text-tertiary md:text-2xl text-xl font-bold">
              You’ve leveled up and earned a new badge!{" "}
            </span>
            <span className="text-quaternary md:text-xl text-lg font-interMedium">
              Claim your{" "}
              <span className="font-bold text-quinary font-interBold">
                NFT badge
              </span>{" "}
              now, or retrieve it later from your Inventory.
            </span>
          </div>
          <p className="text-sm text-quaternary md:px-12 font-interMedium">
            To claim your new badge, you ll need to transfer your previous badge
            from your wallet for it to be burned in exchange for the new one. If
            there s insufficient gas in your wallet, the transaction will be
            canceled. You can always visit your Inventory and claim your badge
            at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
