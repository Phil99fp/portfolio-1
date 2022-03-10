import React from 'react';
import { NavLink } from 'react-router-dom';

import { BackButton } from '../../components';
import './style.css'

const Header = () => {
    return (
        <nav>
            <NavLink exact to="/" activeClassName="current">Home</NavLink>
            <NavLink to="/portfolio" activeClassName="current">Portfolio</NavLink>
            <NavLink to="/skills" activeClassName="current">Skills</NavLink>
            <NavLink to="/contact" activeClassName="current">Contact</NavLink>
        </nav>
    );
}

export default Header;
