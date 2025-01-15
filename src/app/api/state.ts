import fs from "fs/promises";
import path from "path";

const filePath = path.resolve(process.cwd(), "data/state.json");

// Utility function to read the state file
const readState = async () => {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading state file:", err);
    return { hasFavoriteSalon: false, suppressedNba: false };
  }
};

// Utility function to write to the state file
const writeState = async (newState) => {
  try {
    await fs.writeFile(filePath, JSON.stringify(newState, null, 2), "utf8");
  } catch (err) {
    console.error("Error writing to state file:", err);
  }
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Fetch the current state
    const state = await readState();
    return res.status(200).json(state);
  }

  if (req.method === "POST") {
    const { suppressionStatus } = req.body;

    if (!suppressionStatus) {
      return res
        .status(400)
        .json({ error: "Missing suppressionStatus in request body" });
    }

    // Update the state
    const state = await readState();
    const updatedState = { ...state, ...suppressionStatus };

    await writeState(updatedState);

    return res.status(200).json(updatedState);
  }

  return res.status(405).json({ error: "Method not allowed" });
}
