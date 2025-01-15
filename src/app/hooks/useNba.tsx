import { useQuery } from "@tanstack/react-query";
import { useFavoriteSalonMutator } from "@/app/context/FavoriteSalonProvider";
import { useAccountMutator } from "@/app/context/AccountProvider";

export default () => {
  const { hasFavoriteSalon } = useFavoriteSalonMutator();
  const { hasAccount } = useAccountMutator();

  return useQuery({
    queryKey: [{ favoriteSalon: hasFavoriteSalon }, { account: hasAccount }],
    queryFn: async () => {
      const response = await fetch("/api/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          suppressionStatus: { hasFavoriteSalon, hasAccount },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch API data");
      }

      return response.json();
    },
  });
};
