import pages from "../app/Pages";

// Navbar which supplies links to pages in the website.
function NavBar(props) {
    return(
        <nav id="navbar">
            {Object.keys(pages).map(page => {
                // Don't show link to homepage if we're on homepage
                return page === "Home" && props.isHomepage ? 
                    (<></>)
                    : (<a className="page-link" href={pages[page]}>{page}</a>)
            })}
        </nav>
    )
}

export default NavBar;