"use client";
import { useAccountMutator } from "@/app/context/AccountProvider";

export default () => {
  const { setHasAccount } = useAccountMutator();

  return (
    <button
      onClick={() => {
        setHasAccount(true);
      }}
    >
      Save Account
    </button>
  );
};
