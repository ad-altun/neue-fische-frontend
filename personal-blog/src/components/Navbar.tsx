import avatar from '../assets/images/image-avatar.jpg'
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className={"navbar-profile"}>
                <img src={avatar} alt="profile avatar" />
            </div>
            <div className='menu-icon'>
                <IoMenu />
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