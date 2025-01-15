import { useQuery } from "@tanstack/react-query";
import { useFavoriteSalonMutator } from "@/app/context/FavoriteSalonProvider";
import { useAccountMutator } from "@/app/context/AccountProvider";

export default () => {
  const { hasFavoriteSalon } = useFavoriteSalonMutator();
  const { hasAccount } = useAccountMutator();
  return useQuery({
    queryKey: [hasFavoriteSalon, hasAccount],
  });
};
