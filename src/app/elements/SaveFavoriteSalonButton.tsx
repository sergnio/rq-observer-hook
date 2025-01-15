"use client";
import { useFavoriteSalonMutator } from "@/app/context/FavoriteSalonProvider";

export default () => {
  const { setHasFavoriteSalon } = useFavoriteSalonMutator();

  return (
    <button
      onClick={() => {
        setHasFavoriteSalon(true);
      }}
    >
      Save as Favorite Salon
    </button>
  );
};
