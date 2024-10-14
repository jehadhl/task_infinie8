"use client";
import { useModuleContext } from "@/context/ModuleContext";
import React from "react";

const CustomButton = () => {
  const { toggleModuleOne } = useModuleContext();

  return (
    <button
      onClick={toggleModuleOne}
      className="font-bold text-tertiary md:text-xl text-lg  bg-button-gradient w-56 md:h-14 h-12 border-r-[3px] border-l-[3px] border-t-2 border-b-4 border-tertiary rounded-lg"
    >
      Claim NFT Badge
    </button>
  );
};

export default CustomButton;
