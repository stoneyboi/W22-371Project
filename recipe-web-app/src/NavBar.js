import React from "react";
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

function NavBar() {
    return (
        <div className="navBar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/recipes">Recipes</Link></li>
                <li><Link to="/ourRecipes">Our Recipes</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;