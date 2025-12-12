import { Link } from "react-router-dom";



function Navbar() {
    return (
        <div>
            <Link to = "/dashboard">Dashbaord</Link>
            <Link to = "/login">Login</Link>
            <Link to = "/register">Register</Link>
            <Link to = "/watchlist">WatchList</Link>
        </div>

    )
}

export default Navbar;