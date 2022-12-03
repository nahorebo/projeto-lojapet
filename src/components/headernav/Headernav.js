import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";
import animais2 from "../assets/animais2.png";
import "./styles.css"

function Headernav() {
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <img />
                    <Link to="/"> <img className="logo1"
                        src={logo}
                        alt="Logo de Pet Codigos"
                        width={250}
                        height={60}>
                    </img>
                    </Link>
                </div>



                <div className="menu-lista">

                    <Link to="/Produtos" className="nav-link">Produtos</Link>
                    <Link to="/Catálogo" className="nav-link">Catálogo</Link>
                    <Link to="/Adote" className="nav-link">Adote</Link>
                    <Link to="/Contato" className="nav-link">Contato</Link>

                </div>


            </nav>

            <div className="containerppal">
                    <div className="image">
                        <img className="image__container"
                            src={animais2}
                            alt="Animais de estimação">
                        </img>
                    </div>
                    <div className="texto">
                        <h1>Bem-vindo à nossa Pet Shop</h1>
                        <p>Faça seu pet feliz, fornecendo para ele os melhores produtos e de qualidade para dar um mimo para seu melhor amigo, ajudamos você a cuidar do seu pet.</p>
                        <p className="visit">Visite nossa loja!</p>
                    </div>
            </div>

        </header>
    );
}


export default Headernav;