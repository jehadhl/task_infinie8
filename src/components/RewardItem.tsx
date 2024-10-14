import React from "react";
import Border from "@/components/svg/Border";
import Image from "next/image";
import BorderBottom from "@/components/svg/BorderBottom";

const RewardItem: React.FC<RewardItemProps> = ({ imageSrc, label, value }) => {
  return (
    <div className=" relative md:w-36 w-28 ">
      <div className="md:w-36  w-28"> 
        <Border />
      </div>
      <Image
        src={imageSrc}
        alt={label}
        className="absolute inset-x-0 top-4 mx-auto md:w-24 md:h-24 w-16 h-16 mt-1"
      />
      <div className="absolute  bottom-0 w-full ">
        <BorderBottom />
      </div>
      <div className="absolute  bottom-0 left-2">
        <span className="text-tertiary font-bold md:text-base text-sm pl-1 ">
          {value}
        </span>
      </div>
    </div>
  );
};

export default RewardItem;
