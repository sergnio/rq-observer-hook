"use client";
import { useAccountMutator } from "@/app/context/AccountProvider";
interface Props {
  disabled: boolean;
}

export default ({ disabled }: Props) => {
  const { hasAccount, setHasAccount } = useAccountMutator();

  return (
    <button
      onClick={() => {
        setHasAccount(!hasAccount);
      }}
      disabled={disabled}
      style={{
        backgroundColor: hasAccount ? "green" : "red",
      }}
    >
      Account Status: {hasAccount ? "Account Created" : "No Account"}
    </button>
  );
};
