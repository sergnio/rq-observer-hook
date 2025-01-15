// app/api/data/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const firstState = url.searchParams.get("firstState") === "true";
  const secondState = url.searchParams.get("secondState") === "true";

  if (firstState) {
    return NextResponse.json({ result: "newAccount" });
  }
  if (secondState) {
    return NextResponse.json({ result: "favoriteSalon" });
  }
  return NextResponse.json({ result: "newAddress" });
}
