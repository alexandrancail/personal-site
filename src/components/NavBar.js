import pages from "../app/Pages";

// Navbar which supplies links to pages in the website.
function NavBar(props) {
    return(
        <nav id="navbar">
            {pages.map(page => {
                return page["name"] === "Home" && props.isHomepage ?
                    (<></>)
                    : (<a className="page-link" href={page["path"]}>{page["name"]}</a>)
            })}
        </nav>
    )
}

export default NavBar;