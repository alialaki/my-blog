import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <url>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/articles">Articles</Link>
                </li>
            </url>
        </nav>
    )
}

export default NavBar;