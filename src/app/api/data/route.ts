// app/api/data/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const suppressionStatus = body.suppressionStatus;
    if (!suppressionStatus) {
      return NextResponse.json(
        { error: "Missing suppressionStatus in request body" },
        { status: 400 },
      );
    }

    const { addAddress, favoriteSalon } = suppressionStatus;

    if (favoriteSalon) {
      return NextResponse.json({ result: "favoriteSalon" });
    }

    if (addAddress) {
      return NextResponse.json({ result: "newAddress" });
    }

    return NextResponse.json({ result: "defaultResult" });
  } catch (error) {
    console.error("Error processing API request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
