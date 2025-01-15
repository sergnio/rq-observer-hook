import { useQuery } from "@tanstack/react-query";
import { useFavoriteSalonMutator } from "@/app/context/FavoriteSalonProvider";
import { useSuppressedNbaMutator } from "@/app/context/NbaSuppressionProvider";

export default () => {
  const { hasFavoriteSalon } = useFavoriteSalonMutator();
  const { suppressedNba } = useSuppressedNbaMutator();

  return useQuery({
    queryKey: [{ favoriteSalon: hasFavoriteSalon }, { account: suppressedNba }],
    queryFn: async () => {
      const response = await fetch("/api/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          suppressionStatus: { hasFavoriteSalon, suppressedNba },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch API data");
      }

      return response.json();
    },
  });
};
