import type { Character, CharactersResponse } from "../types/types";

async function getRMCharacters(url: string): Promise<CharactersResponse> {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`HTTP error. Status: ${res.status}`);
  }

  return res.json();
}

async function getRMCharacterById(url: string): Promise<Character> {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`HTTP error. Status: ${res.status}`);
  }

  return res.json();
}

export { getRMCharacters, getRMCharacterById };
