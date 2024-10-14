import { SquareX } from "lucide-react";
import React from "react";

const PopUpHeader: React.FC<PopUpHeaderProps> = ({
  title,
  subtitle,
  onClose,
}) => {
  return (
    <>
      <div className="w-full flex justify-end items-center relative">
        <SquareX
          strokeWidth={1}
          color="white"
          onClick={onClose}
          className=" cursor-pointer w-8 h-8"
        />
      </div>
      <div className="flex justify-center items-center relative flex-col py-4 space-y-1 text-center">
        <h2 className="font-bold md:text-4xl text-2xl text-quinary text-shadow text-shadow-blur-10 text-shadow-quinary">
          {title}
        </h2>
        <p className="text-quinary md:text-3xl text-xl">{subtitle}</p>
      </div>
    </>
  );
};

export default PopUpHeader;


