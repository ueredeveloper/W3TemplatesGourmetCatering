import React from 'react';
import backimage from './res/images/hamburger.jpg';
import './header.css';

function Header() {

    const style = {
        maxWidth:"2560px",
        minWidth:"500px",
    };
    return (
    <header className="header-display-container header-content header-wide" style={style} id="home">
        <img className="header-image" src={backimage} alt="Hamburger Catering" width="2560" height="800"/>
            <div className="header-display-bottomleft header-padding-large header-opacity">
                <h1 className="header-xxlarge">Le Catering</h1>
            </div>
    </header>
    );
}

export default Header;

/**
 * <header className="header-display-container header-content header-wide"     style="max-width:1600px;min-width:500px" id="home">
 */