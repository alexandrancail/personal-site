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

    // Returns true if the current page is the app homepage.
    function isHomepage() {
        return isCurrentPath(homepage["path"]);
    }

    return(
        <nav id="navbar">
            <a id="smaller-name" href={homepage["path"]}>
                {/* Only show name in navbar if we're not on homepage */}
                <h1 style={isHomepage() ? ({visibility: "hidden"}) : ({})}>
                    alex cail
                </h1>
            </a>
            <div id="menu">
                {pages.map(page => {
                    return page["name"] === homepage["name"] && isHomepage() ?
                        (<></>)
                        : (<a 
                            // Style button specifically if it is the currently open page
                            className={`page-link ${isCurrentPath(page["path"]) ? ("current-pg") : ("")}`}
                            href={page["path"]}
                            >
                                {page["name"]}
                            </a>)
                })}
            </div>
        </nav>
    )
}

export default NavBar;