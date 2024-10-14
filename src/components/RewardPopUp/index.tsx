"use client";
import { useModuleContext } from "@/context/ModuleContext";
import Image from "next/image";
import React from "react";
import rewardImage from "@/assets/RewardImage.png";
import PopUpHeader from "./PopUpHeader";
import LineLeft from "../svg/LineLeft";
import LineRight from "../svg/LineRight";
import RewardItem from "../RewardItem";

const RewardPopUp: React.FC<RewardPopUpProps> = ({
  title,
  subtitle,
  rewards,
}) => {
  const { isModuleOpen, toggleModuleOne } = useModuleContext();
  return (
    <>
      {isModuleOpen && (
        <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
          <div className=" absolute -top-20 flex justify-center items-center w-[900px] md:h-96 h-full rounded-full bg-radial-gradient-cirle" />
          <div className="p-6 m-8 rounded-lg max-w-5xl w-full md:h-[600px]  relative border-2 border-borderYellow overflow-hidden">
            <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#edededb6_20deg,transparent_120deg)] "></div>
            <Image
              src={rewardImage}
              alt="reward_image"
              priority
              quality={100}
              className="h-full w-full absolute top-0 left-0 bottom-0 right-0 object-cover p-[0.8px]"
            />
            <PopUpHeader
              title={title}
              subtitle={subtitle}
              onClose={toggleModuleOne}
            />

            <div className="flex flex-col text-quaternary relative text-center md:py-8 py-6 md:text-xl text-base max-w-4xl mx-auto w-full md:px-10 px-0 font-interMedium">
              <p>
                You have successfully completed a command! Here are your
                well-earned rewards. Keep exploring the Command Center roe even
                more exciting mission and bigger rewards!
              </p>
              <p>You have gained:</p>
            </div>

            <div className="flex gap-4 justify-between relative max-w-xl w-full mx-auto items-center py-4">
              <div className="w-60">
                <LineLeft />
              </div>
              <span className="md:text-xl text-lg">Rewards</span>
              <div className="w-60">
                <LineRight />
              </div>
            </div>

            <div className="py-4 flex justify-center md:gap-10 gap-4 items-center relative max-w-xl mx-auto">
              {rewards.map((reward, index) => (
                <RewardItem
                  key={index}
                  imageSrc={reward.imageSrc}
                  label={reward.label}
                  value={reward.value}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RewardPopUp;
