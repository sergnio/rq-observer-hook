import { useAccountMutator } from "@/app/context/AccountProvider";
import SaveFavoriteSalonButton from "@/app/elements/SaveFavoriteSalonButton";
import SaveAccountButton from "@/app/elements/SaveAccountButton";

export default () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <SaveAccountButton />
        <SaveFavoriteSalonButton />
      </main>
    </div>
  );
};
