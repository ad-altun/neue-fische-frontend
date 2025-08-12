export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface LocationReference {
  name: string;
  url: string;
}

export type Status = "Alive" | "Dead" | "unknown";
export type Gender = "Female" | "Male" | "Genderless" | "unknown";

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: LocationReference;
  location: LocationReference;
  image: string;
  episode: string[];
  url: string;
  created: string; // ISO date string
}

export interface CharactersResponse {
  info: Info;
  results: Character[];
}

export interface CharacterPreview {
  name: string;
  image: string;
}
