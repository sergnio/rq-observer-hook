"use client";
import useNba from "@/app/hooks/useNba";

export default () => {
  const { data, isLoading, isError, isFetching } = useNba();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error help</div>;

  return <>NBA: {JSON.stringify(data)}</>;
};
