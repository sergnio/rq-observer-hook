"use client";
import useNba from "@/app/hooks/useNba";
import SaveAccountButton from "@/app/elements/SaveAccountButton";
import SaveFavoriteSalonButton from "@/app/elements/SaveFavoriteSalonButton";
import { useEffect, useState } from "react";

export default () => {
  const { data, isLoading, isError, isFetching } = useNba();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  // Set `isFirstLoad` to false after the initial data is loaded
  useEffect(() => {
    if (!isLoading) {
      setIsFirstLoad(false);
    }
  }, [isLoading]);

  if (isLoading && isFirstLoad) return <div>Loading...</div>;
  if (isError) return <div>Error help</div>;

  return (
    <>
      NBA: {isLoading ? "Getting next NBA..." : JSON.stringify(data)}
      <SaveAccountButton disabled={isFetching || isLoading} />
      <SaveFavoriteSalonButton disabled={isFetching || isLoading} />
    </>
  );
};
