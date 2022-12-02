import React from "react";
import "./styles.css";
import petfood from "../../assets/pet-racao.svg";
import petcaminha from "../../assets/pet-caminha.svg";
import petmedicina from "../../assets/pet-medicinas.svg";
import petbrinquedos from "../../assets/pet-brinquedos.svg";
import pettrasnporte from "../../assets/pet-transporte.svg";

const Catalogo = () => {
  return (
    <section className="containercatalogo">
     <h1 className="catalogo-title">
        Conheça nossos produtos!
      </h1>
      <nav>
      <ul>
      <div className="cardcatalogo iconfood">
        <img src={petfood} alt="comida de pet" width="60" className="iconfood"></img>
        <p>Raçoes</p>
      </div>

      <div className="cardcatalogo iconcama">
        <img src={petcaminha} alt="camas de pet" width="60" className="iconcama"></img>
        <p>Caminhas</p>
      </div>

      <div className="cardcatalogo icontransporte">
        <img src={pettrasnporte} alt="transporte de pet" width="60" className="icontransporte"></img>
        <p>Transporte</p>
        </div>

        <div className="cardcatalogo iconbrinquedos">
          <img src={petbrinquedos} alt="brinquedos de pet" width="60" className="iconbrinquedos"></img>
          <p>Brinquedos</p>
        </div>

        <div className="cardcatalogo iconmedicina">
          <img src={petmedicina} alt="medicina de pet" width="60" className="iconmedicina"></img>
          <p>Medicina</p>
        </div>
        </ul>
        </nav>
      </section>
  );
}
export default Catalogo;