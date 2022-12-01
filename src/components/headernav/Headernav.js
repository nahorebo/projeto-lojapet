import React from "react";
import {Link} from "react-router-dom";
import logo from "../assets/logoprincipal.jpeg";
import "./styles.css"

function Headernav() {
  return (
    // <header>

    // <div className="logo2">
    //   <h2 className="nome">Pet Codigos</h2>

    //   <nav className="menu">
    //     <ul>
    //       <Link to="/">Sobre</Link>
    //       <Link to="/post">Produtos</Link>
    //       <Link to="/Catalogo">Catálogo</Link>
    //       <Link to="/Adote">Adote</Link>
    //       <Link to="/Contato">Contato</Link>
    //     </ul>
    //   </nav>

    //   <div className="logo1">
    // <img
    //         className="imgcontainer"
    //           src={Imgheader}
    //           alt="Cachorro marrom"
    //           width="300" height="400"/>
    //         <h2 className="nome">Pet Codigos</h2>
    //     </div>
    // </div>
    // </header>

    <nav className="navbar">
    <div className="logo">
        <Link to= "/"> <img className="logo1"
    //     {/* <h2>Pet Codigos </h2> */}
    // {/* <img /> */}
    src={logo}
    alt="Logo de Pet Codigos"
    width={250}
    height={60}>
    </img>
    </Link>
    </div>

    {/* <div class="nav-menu">
    <input type="checkbox" id="check"/>
    <label for="check" class="checkbtn">
        <i class="menu-icon"><img src={menu} alt=""/></i>
    </label> */}


    <div className="menu-lista">
        {/* <ul>
        <li> */}
    <Link to="/" className="nav-link">Produtos</Link>
    <Link to="/post" className="nav-link">Catálogo</Link>
    <Link to="/" className="nav-link">Adote</Link>
    <Link to="/" className="nav-link">Contato</Link>                
    {/* </li>
    </ul> */}
    </div>
    {/* </div> */}
</nav>




  );
}

export default Headernav;