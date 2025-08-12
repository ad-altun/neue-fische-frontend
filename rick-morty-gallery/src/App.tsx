import { useEffect, useMemo, useState } from "react";
import CharacterCards from "./components/CharacterCards"
import type { Character, CharactersResponse } from "./types/types";
import getRMCharacters from "./service/api";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";

export default function App() {
  const [rmCharacters, setRMCharacters] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");


  const url: string = "https://rickandmortyapi.com/api/character/";

  useEffect(() => {
    const getRes = async () => {
      try {
        const res: CharactersResponse = await getRMCharacters(url);

        const response: Character[] = res.results.map((item: Character) => ({
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

  const Result = useMemo(() => {
    let filteredRMCharacters = rmCharacters;

    const handleSearch = (term: string) => setSearchTerm(term);

    if (searchTerm) {
      filteredRMCharacters = filteredRMCharacters.filter(character => {
        return character.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }
    return { filteredRMCharacters, handleSearch }
  }, [rmCharacters, searchTerm])

  console.log(Result.filteredRMCharacters)

  return (

    <div>
      <Header />
      <SearchBar onChangeProb={Result.handleSearch} />
      <div>
        {Result.filteredRMCharacters.length !== 0 ?
          <div>
            {
              Result.filteredRMCharacters && Result.filteredRMCharacters.map((char) => {
                return (
                  <div key={char.id}>
                    <CharacterCards name={char.name} image={char.image} />
                  </div>
                )
              })
            }
          </div>
          : "Nothing found"}
      </div>
    </div>
  )
}