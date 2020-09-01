import React from 'react'
import logo from '../logo.svg';
const Header =()=> {
    return (
        <header className="header">
            <img src={logo} className="rona-logo" alt="logo" />
            <h1>Coronavirus Counter</h1>
        </header>
    )
}
export default Header;