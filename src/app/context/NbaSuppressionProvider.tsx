// app/context/SuppressedNbaProvider.tsx
"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface SuppressedNbaProviderContext {
  suppressedNba: boolean;
  setSuppressedNba: (state: boolean) => void;
}

const Context = createContext<SuppressedNbaProviderContext | undefined>(
  undefined,
);

export const NbaSuppressionProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [suppressedNba, setSuppressedNba] = useState(false);

  return (
    <Context.Provider value={{ suppressedNba, setSuppressedNba }}>
      {children}
    </Context.Provider>
  );
};

export const useSuppressedNbaMutator = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error(
      "useSuppressedNbaProvider must be used within SuppressedNbaProvider",
    );
  return context;
};
