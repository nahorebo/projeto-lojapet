import React from "react";
import {Link} from "react-router-dom";
import Imgheader from "../../images/caeegato.jpg";
import "./styles.css"

function Headernav() {
  return (
    <header>

    <div className="logo">
      <h2 className="nome">Pet Codigos</h2>

      <nav className="menu">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/post">Produtos</Link>
          <Link to="/Catalogo">Catálogo</Link>
          <Link to="/Adote">Adote</Link>
          <Link to="/Contato">Contato</Link>
        </ul>
      </nav>

      <div className="logo">
    <img
            className="imgcontainer"
              src={Imgheader}
              alt="Cachorro marrom"
              width="300" height="400"/>
            <h2 className="nome">Pet Codigos</h2>
        </div>
    </div>
    </header>


  );
}

export default Headernav;