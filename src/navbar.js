const Navbar = () => {
    const home = 'home.js';
    return(
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href={home}>Home</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>
    )
}
export default Navbar;