

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

import type { CharacterPreview } from "../types/types"


export default function CharacterCards({ name, image }: CharacterPreview) {


    return (
        <>
            <main className="main">
                <div>
                    <p>{name}</p>
                    <img src={image} alt="" />
                </div>
            </main>
        </>
    )
}