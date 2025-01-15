"use client";
import { useSuppressedNbaMutator } from "@/app/context/NbaSuppressionProvider";
interface Props {
  disabled: boolean;
}

export default ({ disabled }: Props) => {
  const { suppressedNba, setsuppressedNba } = useSuppressedNbaMutator();

  return (
    <button
      onClick={() => {
        setsuppressedNba(!suppressedNba);
      }}
      disabled={disabled}
      style={{
        backgroundColor: suppressedNba ? "green" : "red",
      }}
    >
      Account Status: {suppressedNba ? "Account Created" : "No Account"}
    </button>
  );
};
