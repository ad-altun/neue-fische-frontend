import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav>
            <Link to='/' className="link-button" >Home</Link>
            <Link to='/characters' className="link-button" >Characters</Link>
        </nav>
    )
}