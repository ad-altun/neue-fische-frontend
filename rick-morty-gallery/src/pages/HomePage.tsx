import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div>
            <h1>Welcome to Rick & Morty Gallery</h1>
            <Link to="/characters">Start Visiting</Link>
        </div>
    )
}