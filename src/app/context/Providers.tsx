"use client";
import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AccountProvider } from "@/app/context/AccountProvider";
import { FavoriteSalonProvider } from "@/app/context/FavoriteSalonProvider";

const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AccountProvider>
        <FavoriteSalonProvider>{children}</FavoriteSalonProvider>
      </AccountProvider>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
};
