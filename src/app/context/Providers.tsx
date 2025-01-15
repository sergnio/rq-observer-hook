"use client";
import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NbaSuppressionProvider } from "@/app/context/NbaSuppressionProvider";
import { FavoriteSalonProvider } from "@/app/context/FavoriteSalonProvider";

const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NbaSuppressionProvider>
        <FavoriteSalonProvider>{children}</FavoriteSalonProvider>
      </NbaSuppressionProvider>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
};
