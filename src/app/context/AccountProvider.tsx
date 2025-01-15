// app/context/AccountProvider.tsx
"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface AccountProviderContext {
  hasAccount: boolean;
  setHasAccount: (state: boolean) => void;
}

const Context = createContext<AccountProviderContext | undefined>(undefined);

export const AccountProvider = ({ children }: { children: ReactNode }) => {
  const [hasAccount, setHasAccount] = useState(false);

  return (
    <Context.Provider value={{ hasAccount, setHasAccount }}>
      {children}
    </Context.Provider>
  );
};

export const useAccountMutator = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error("useAccountProvider must be used within AccountProvider");
  return context;
};
