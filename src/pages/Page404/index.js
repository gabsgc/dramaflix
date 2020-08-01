import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo-dramaflix.png';
import NotFound from '../../assets/img/not_found.svg';
import './style.css';

function Page404() {
  return (
    <div className="container">
      <Link to="/">
        <img src={Logo} alt="Dramaflix" className="Logo" />
      </Link>

      <h1>Oops... Página não encontrada :(</h1>

      <div className="img404">
        <img src={NotFound} alt="404 Not Found" />
      </div>
    </div>
  );
}

export default Page404;
