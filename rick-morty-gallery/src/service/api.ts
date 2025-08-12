import type { CharactersResponse } from "../types/types";

async function getRMCharacters(url: string): Promise<CharactersResponse> {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`HTTP error. Status: ${res.status}`);
  }

  return res.json();
}

export default getRMCharacters;
