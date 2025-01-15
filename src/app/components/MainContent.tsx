"use client";
import useNba from "@/app/hooks/useNba";
import SaveAccountButton from "@/app/elements/SaveAccountButton";
import SaveFavoriteSalonButton from "@/app/elements/SaveFavoriteSalonButton";

export default () => {
  const { data, isLoading, isError } = useNba();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error help</div>;

  return (
    <>
      NBA: {data}
      <SaveAccountButton />
      <SaveFavoriteSalonButton />
    </>
  );
};
