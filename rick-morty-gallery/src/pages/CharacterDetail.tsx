import { useParams } from "react-router-dom"
import type { Character } from "../types/types";
import { getRMCharacterById } from "../service/api";
import { useEffect, useState } from "react";


export default function CharacterDetail() {
    const [character, setCharacter] = useState<Character | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    const { id } = useParams<{ id: string }>();


    useEffect(() => {
        const getChacracter = async () => {
            if (!id) {
                setError("No Character ID provided.")
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                const url: string = `https://rickandmortyapi.com/api/character/${id}`;
                const result = await getRMCharacterById(url);

                setCharacter(result);
                setError("");

            } catch (error) {
                console.log(error)
                setError("sdfdgff")
            } finally {
                setLoading(false);
            }
        }

        getChacracter();

    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>
    if (!character) return <div>No characterr</div>

    return (
        <div>

            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} />
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin.name}</p>
            <p>Location: {character.location.name}</p>

        </div>
    )
}