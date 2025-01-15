"use client";
import { useFavoriteSalonMutator } from "@/app/context/FavoriteSalonProvider";

interface Props {
  disabled: boolean;
}

export default ({ disabled }: Props) => {
  const { hasFavoriteSalon, setHasFavoriteSalon } = useFavoriteSalonMutator();

  return (
    <button
      onClick={() => {
        setHasFavoriteSalon(!hasFavoriteSalon);
      }}
      disabled={disabled}
      style={{
        backgroundColor: hasFavoriteSalon ? "green" : "red",
      }}
    >
      Fav. Salon Status: {hasFavoriteSalon ? "Favorited" : "Not Favorited"}
    </button>
  );
};
