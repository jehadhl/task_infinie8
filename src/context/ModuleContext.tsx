"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface ModuleContextType {
  isModuleOpen: boolean;
  toggleModuleOne: () => void;
}

const ModuleContext = createContext<ModuleContextType | undefined>(undefined);

export const ModuleProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isModuleOpen, setIsModuleOpen] = useState<boolean>(false);

  const toggleModuleOne = () => {
    setIsModuleOpen((prev) => !prev);
  };

  return (
    <ModuleContext.Provider
      value={{
        isModuleOpen,
        toggleModuleOne,
      }}
    >
      {children}
    </ModuleContext.Provider>
  );
};

export const useModuleContext = (): ModuleContextType => {
  const context = useContext(ModuleContext);
  if (context === undefined) {
    throw new Error("useModuleContext must be used within a ModuleProvider");
  }
  return context;
};
