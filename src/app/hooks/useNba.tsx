import { useQuery } from "@tanstack/react-query";
import { useFavoriteSalonMutator } from "@/app/context/FavoriteSalonProvider";
import { useAccountMutator } from "@/app/context/AccountProvider";
import { useEffect, useState } from "react";

export default () => {
  const { hasFavoriteSalon } = useFavoriteSalonMutator();
  const { hasAccount } = useAccountMutator();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const query = useQuery({
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
    staleTime: Infinity,
  });
  const { isLoading } = query;

  // Set `isFirstLoad` to false after the initial data is loaded
  useEffect(() => {
    if (!isLoading) {
      setIsFirstLoad(false);
    }
  }, [isLoading]);

  return { isFirstLoad, ...query };
};
