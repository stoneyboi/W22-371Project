import React from "react";
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

function NavBar() {
    return (
        <div className="navBar">
            <table className="navTable">
                <td><Link to="/">Home</Link></td>
                <td><Link to="/recipes">Recipes</Link></td>
                <td><Link to="/ourRecipes">Your Recipes</Link></td>
                <td><Link to="/about">About</Link></td>
            </table>
        </div>
    )
}

export default NavBar;