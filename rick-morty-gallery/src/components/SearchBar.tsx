import { FaSearch } from 'react-icons/fa';
import type { ChangeEvent } from "react"

type SearchBarProbs = {
    onChangeProb: (term: string) => void
}

export default function SearchBar({ onChangeProb }: SearchBarProbs) {

    const handleChange = (term: string) => onChangeProb(term);

    return (
        <div>
            <FaSearch />
            <h3>Search for character here: </h3>
            <input type="text"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleChange(e.target.value)} />
        </div>
    )
}