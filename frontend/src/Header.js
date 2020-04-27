import React from 'react';
import Navbar from './Navbar'
import NavbarL from './NavbarL'

function Header() {
    return (
<header id="header">
<div>
    <div className="container">
        <div className="row">
            <div id="header_logo">
                <a href="/"> <img className="logo img-responsive" src="img/logo1.png" width="239" height="64"/> </a>
            </div>
             <Navbar/>
             <NavbarL/>
        </div>
    </div>
</div>
</header>

)}

export default Header