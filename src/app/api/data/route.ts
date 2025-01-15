// app/api/data/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Arbitrary 1 second delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const suppressionStatus = body.suppressionStatus;
    if (!suppressionStatus) {
      return NextResponse.json(
        { error: "Missing suppressionStatus in request body" },
        { status: 400 },
      );
    }

    const { hasAccount, hasFavoriteSalon } = suppressionStatus;

    if (!hasAccount) {
      return NextResponse.json({ result: "newAddress" });
    }

    if (!hasFavoriteSalon) {
      return NextResponse.json({ result: "favoriteSalon" });
    }

    return NextResponse.json({ result: "some other result" });
  } catch (error) {
    console.error("Error processing API request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
