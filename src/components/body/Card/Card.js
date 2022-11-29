import React from "react";
import "./styles.css";
import ImgShampoo from "../../assets/shampoo.jpg";
import ImgCaminha from "../../assets/caminha.jpg";
import ImgRacao from "../../assets/racao.jpg";

const Card = () => {
  return (
    <div className="cardcontainer">
      <h1 className="cardcontainertitle">Aproveite Nossas Ofertas</h1>
      <div className="cardcontainerimg">
        <a className="a1" href="#">
          <img
            className="cardimage"
            src={ImgShampoo}
            alt="Cachorro marrom"
          ></img>
          Shampoo Pet 5 em 1
        </a>
        <p>R$20</p>
      </div>

      <div className="cardcontainerimg">
        <a className="a1" href="#">
          <img
            className="cardimage"
            src={ImgCaminha}
            alt="Cachorro preto"
          ></img>
          Caminha de Luxo
        </a>
        <p>R$150</p>
      </div>

      <div className="cardcontainerimg">
        <a class="a1" href="#">
          <img
            className="cardimage"
            src={ImgRacao}
            alt="Cachorro loiro"
          ></img>
          Racao Dog Show
        </a>
        <p>R$90</p>
      </div>
    </div>
  );
}
export default Card;