import React from "react";
import "./styles.css";
import adote from "../../assets/adotecachorro.jpg";

const Adote = () => {
    return(
<div className="containeradote">
<div>
  <img className="imgadote"
    src={adote}
    alt="Varios Cachorrinhos deitados numa cesta">
  </img>
  </div>
  <div className="containeradotedescricao">
    <h1>Ainda não tem um bichinho?</h1>
  <span> Uma seleção especial de peludinhos que buscam um lar para chamar de seu</span>
  <span> Visite nossa loja e conheça outros pets disponíveis para adoção pertinho de você.</span>
  </div>
  </div>
  );
}

export default Adote;