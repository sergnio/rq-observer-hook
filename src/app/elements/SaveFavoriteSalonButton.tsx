"use client";
import { useFavoriteSalonMutator } from "@/app/context/FavoriteSalonProvider";

export default () => {
  const { hasFavoriteSalon, setHasFavoriteSalon } = useFavoriteSalonMutator();

  return (
    <button
      onClick={() => {
        setHasFavoriteSalon(!hasFavoriteSalon);
      }}
    >
      Fav. Salon Status: {hasFavoriteSalon ? "Favorited" : "Not Favorited"}
    </button>
  );
};
