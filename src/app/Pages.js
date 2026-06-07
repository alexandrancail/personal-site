import Home from "../features/Home";
import Resume from "../features/resume/Resume";

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
        "name": "Resume",
        "path": "/resume",
        "element": <Resume />
    }
]

export { pages, homepage };