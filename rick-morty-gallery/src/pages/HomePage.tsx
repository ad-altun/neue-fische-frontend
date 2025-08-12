import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <div className="startpage">
                <h1>Welcome to Rick & Morty Gallery</h1>
                <Link className="link-button" to="/characters">Start Visiting</Link>
            </div>
        </>
    )
}