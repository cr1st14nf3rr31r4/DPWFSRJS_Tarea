import React from 'react';
import MediaIcons from '../MediaIcons';

const Navbar = () => {
    return (  
        <nav data-scroll-header className="nav_bar">
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn"><span className="nav-icon"></span></label>
          <ul className="menu">
            <li><a className="activo" href="#inicio">Inicio</a></li>
            <li><a href="#bio">Bio</a></li>
            <li><a href="#videos">Videos</a></li>
            <li><a href="#discos">Discos</a></li>
            <li><a href="#conciertos">Conciertos</a></li>
            <li><a href="#galeria">Galería</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>

          <MediaIcons />          
        </nav>
    );
}
 
export default Navbar;