// app/context/FavoriteSalonProvider.tsx
"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface FavoriteSalonProviderContext {
  hasFavoriteSalon: boolean;
  setHasFavoriteSalon: (state: boolean) => void;
}

const Context = createContext<FavoriteSalonProviderContext | undefined>(
  undefined,
);

export const FavoriteSalonProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [hasFavoriteSalon, setHasFavoriteSalon] = useState(false);

  return (
    <Context.Provider value={{ hasFavoriteSalon, setHasFavoriteSalon }}>
      {children}
    </Context.Provider>
  );
};

export const useFavoriteSalonMutator = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error(
      "useFavoriteSalonProvider must be used within FavoriteSalonProvider",
    );
  return context;
};
