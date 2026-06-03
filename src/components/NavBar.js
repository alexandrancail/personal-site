import { pages, homepage } from "../app/Pages";
import { useLocation } from "react-router-dom";

// Navbar which supplies links to pages in the website.
function NavBar() {
    // Get the relative path for the currently open page
    let currentPath = useLocation().pathname;

    // Returns true if otherPath is equal to the currently open path
    //  otherPath: Path to compare to currentPath
    function isCurrentPath(otherPath) {
        return currentPath === otherPath;
    }

    return(
        <nav id="navbar">
            {pages.map(page => {
                return page["name"] === homepage["name"] && isCurrentPath(homepage["path"]) ?
                    (<></>)
                    : (<a 
                        // Style button specifically if it is the currently open page
                        className={`page-link ${isCurrentPath(page["path"]) ? ("current-pg") : ("")}`}
                        href={page["path"]}
                        >
                            {page["name"]}
                        </a>)
            })}
        </nav>
    )
}

export default NavBar;