import Navbar from "../components/Navbar.tsx";
import Blog from "../components/Blog.tsx";
import Footer from "../components/Footer.tsx";

function Homepage() {
    return (
        <div className="homepage">
            <Navbar />
            <Blog />
            <Footer />
        </div>
    );
}

export default Homepage;