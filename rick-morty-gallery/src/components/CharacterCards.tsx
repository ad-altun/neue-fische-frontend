import type { CharacterPreview } from "../types/types"

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

export default function CharacterCards({ name, image }: CharacterPreview) {

    return (
        <>
            <main className="card">
                <p>{name}</p>
                <img src={image} alt={name} />
            </main>
        </>
    )
}