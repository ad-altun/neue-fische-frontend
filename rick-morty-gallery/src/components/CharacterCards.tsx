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
    const [rmCharacters, setRMCharacters] = useState<Character[]>([]);

    const url: string = "https://rickandmortyapi.com/api/character/";

    useEffect(() => {
        const getRes = async () => {
            try {
                const res: CharactersResponse = await getRMCharacters(url);

                const response: Character[] = res.results.map((item) => ({
                    ...item,
                    id: item.id,
                    name: item.name,
                    image: item.image,
                }));

                // setRMCharacters(res.results);
                setRMCharacters(response);
            } catch (e) {
                console.log(e);
            }
        };

        getRes();

    }, []);

    return (
        <>
            <main className="main">
                {
                    rmCharacters.map((char) => {
                        return (
                            <div key={char.id}>
                                <p>{char.name}</p>
                                <img src={char.image} alt="" />
                            </div>)
                    }
                    )
                }
            </main>
        </>
    )
}