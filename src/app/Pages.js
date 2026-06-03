import Home from "../features/pages/Home";
import About from "../features/pages/About";

// Array of pages in the application
const pages = [
    {
        "name": "Home",
        "path": "/",
        "element": <Home />
    },
    {
        "name": "About",
        "path": "/about",
        "element": <About />
    }
]

export default pages;