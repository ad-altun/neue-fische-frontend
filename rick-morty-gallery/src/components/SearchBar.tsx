import { FaSearch } from 'react-icons/fa';
import type { ChangeEvent } from "react"

type SearchBarProbs = {
    onChangeProb: (term: string) => void
}

export default function SearchBar({ onChangeProb }: SearchBarProbs) {

    const handleChange = (term: string) => onChangeProb(term);

    return (
        <>
            <div className="search-bar">
                <h3>Search for character here: </h3>
                <div className='search'>
                    <FaSearch className='search-icon' />
                    <input type="text" className='search-input'
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleChange(e.target.value)} />
                </div>
            </div>
        </>
    )
}