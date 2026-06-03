import Home from "../features/pages/Home";
import About from "../features/pages/About";

// Data about the application homepage
const homepage = {
    "name": "Home",
    "path": "/",
    "element": <Home />
};

// Array of pages in the application
const pages = [
    homepage,
    {
        "name": "About",
        "path": "/about",
        "element": <About />
    }
]

export { pages, homepage };