import { useEffect, useState } from "react";
import getRMCharacters from "../service/api"
import type { Character, CharactersResponse } from "../types/types";

// alternative
/*
const [rmCharacters, setRMCharacters] = useState<CharacterPreview[]>([]);

const response: CharacterPreview[] = res.results.map((item) => ({
  id: item.id,
  name: item.name,
  image: item.image,
}));

setRMCharacters(response);
*/

export default function CharacterCards() {


    return (
        <>

        </>
    )
}