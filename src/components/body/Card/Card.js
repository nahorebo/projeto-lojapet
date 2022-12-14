import React from "react";
import "./styles.css";
import ImgShampoo from "../../assets/shampoo.png";
import ImgCaminha from "../../assets/caminha.png";
import ImgRacao from "../../assets/racao.png";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="cardcontainer">
      <p className="cardtitle">Aproveite Nossas Ofertas</p>

      <div className="cardcontainerimg">
        <Link className="a1" href="/">
          <img
            className="cardimage1"
            src={ImgShampoo}
            alt="Cachorro marrom"
          ></img>
          <span className="cardimagetitle">Oferta do Dia</span>
          <span>Shampoo Pet 5 em 1</span>
          <span className= "cardpromocao">R$50</span>
          <span>R$20</span>
        </Link>
      </div>

      <div className="cardcontainerimg">
        <Link className="a1" href="/">
          <img
            className="cardimage2"
            src={ImgCaminha}
            alt="Cachorro preto"
          ></img>
          <span className="cardimagetitle">Oferta do Dia</span>
          <span>Caminha</span>
          <span className= "cardpromocao">R$200</span>
          <span>R$100</span>
        </Link>
      </div>

      <div className="cardcontainerimg">
        <Link class="a1" href="#">
          <img
            className="cardimage1"
            src={ImgRacao}
            alt="Cachorro loiro"
          ></img>
          <span className="cardimagetitle">Oferta do Dia</span>
          <span>Raçao Pet</span>
          <span className= "cardpromocao">R$150</span>
          <span>R$70</span>
        </Link>
      </div>
    </div>
  );
}
export default Card;