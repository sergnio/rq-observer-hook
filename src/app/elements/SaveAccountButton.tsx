"use client";
import { useAccountMutator } from "@/app/context/AccountProvider";

export default () => {
  const { hasAccount, setHasAccount } = useAccountMutator();

  return (
    <button
      onClick={() => {
        setHasAccount(!hasAccount);
      }}
    >
      Account Status: {hasAccount ? "Account Created" : "No Account"}
    </button>
  );
};
