import React from "react";
import "../body/styles.css";
import Imgbody from "../assets/cachorrobody.png";

export default function Body () {
  return (
      <div className="containerprincipal">
        <div>
            <img
            className="imgcontainer"
              src={Imgbody}
              alt="Cachorro marrom"/>
          </div>
          <div className="containerp">
            <h1>Venha nos Conheçer!</h1>
            <ul>
            <p>Valores da PetCodigos:</p>
            <li>Ética e transparência;</li>
            <li>Humanização e respeito com os pets, tutores e colaboradores;</li>
            <li>Aprendizagem contínua e treinamento constante;</li>
            <li>Integridade nas relações institucionais;</li>
            <li>Responsabilidade.</li>
            </ul>
          </div>
      </div>
  );
}
