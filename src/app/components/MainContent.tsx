"use client";
import useNba from "@/app/hooks/useNba";
import SaveAccountButton from "@/app/elements/SaveAccountButton";
import SaveFavoriteSalonButton from "@/app/elements/SaveFavoriteSalonButton";
import { useEffect, useState } from "react";

export default () => {
  const { data, isLoading, isError, isFetching, isFirstLoad } = useNba();

  if (isLoading && isFirstLoad) return <div>Loading...</div>;
  if (isError) return <div>Error help</div>;
  console.log("isLoading,", isLoading);

  return (
    <>
      NBA: {isLoading ? "Getting next NBA..." : JSON.stringify(data)}
      <SaveAccountButton disabled={isFetching || isLoading} />
      <SaveFavoriteSalonButton disabled={isFetching || isLoading} />
    </>
  );
};
