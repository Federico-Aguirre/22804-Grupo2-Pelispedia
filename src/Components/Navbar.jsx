import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import styles from '../Styles/Navbar.module.css';

function Navbar() {
  const [LoggedIn, setLoggedIn] = useState(false)
  return (
    <nav className={styles.nav}>
      <div>
        <Link to="/">
          <h1>Pelispedia</h1>
        </Link>
        <ul className={styles.list}>
          <li><button type='button'>
            <Link to="/peliculas">
              <h3>Películas</h3>
            </Link></button>
          </li>
          <li><button type='button'>
            <Link to="/series">
              <h3>Series</h3>
            </Link></button>
          </li>
          <li>{ LoggedIn &&<button type='button'>

            {/* Cambiar el link al componente favoritos correspondiente */}

            <Link to="/favs">
              <h3>Favoritos</h3>
            </Link></button>}
          </li>
        </ul>
      </div>
      <div className={styles.search}> 
        <ul>
          <li>

            {/* Crear el routing del componente Login a /Login no a / */}
            
            { !LoggedIn &&
            <button type='button' onClick={()=>{setLoggedIn(!LoggedIn)}}>
              <Link to={"/"}>
                <h3>Login</h3>
              </Link>
            </button>}
            { LoggedIn &&
            <button type='button' onClick={()=>{setLoggedIn(!LoggedIn)}}>
              <Link to={"/"}>
                <h3>Log out</h3>
              </Link>
            </button>}
          </li>
          <li>SearchBar</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
