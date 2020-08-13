import React from 'react';
import './navbar.css';


function Navbar() {
    return (
    <div className="nav-top">
        <div className="nav-bar nav-white nav-padding nav-card" style={{letterSpacing: "4px"}}>
          <a href="#home" className="nav-bar-item nav-button">Gourmet au Catering</a>
        
          <div className="nav-right nav-hide-small">
            <a href="#about" className="nav-bar-item nav-button">About</a>
            <a href="#menu" className="nav-bar-item nav-button">Menu</a>
            <a href="#contact" className="nav-bar-item nav-button">Contact</a>
          </div>
        </div>
    </div>
    );
}

export default Navbar

 /** see
  * letterSpacing: espaço entre as letras
  */