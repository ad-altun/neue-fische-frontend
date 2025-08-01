import '../assets/images/image-avatar.jpg'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className={"navbar-profile"}>
                <img src="../assets/images/image-avatar.jpg" alt="avatar"/>
            </div>
            <div className="navbar-links">
                <div>
                    <a href="#">Home</a>
                </div>
                <div>
                    <a href="#">Blog</a>
                </div>
                <div>
                    <a href="#">About</a>
                </div>
                <div>
                    <a href="#">Newsletter</a>
                </div>
            </div>
        </div>
    );
}