import React from "react";
import "../body/styles.css";
import Imgbody from "../../images/cachorrobody.jpg";

export default function Body () {
  return (
      <div className="containerprincipal">
        <div className="divcontainerimg">
            <img
            className="imgcontainer"
              src={Imgbody}
              alt="Cachorro marrom"/>
          </div>
          
          <div className="containerp">
            <h1>Venha nos Conheçer</h1>
            <p>Valores da PetCodigos:</p>
            <p>Ética e transparência;</p>
            <p>Humanização e respeito com os pets, tutores e colaboradores;</p>
            <p>Aprendizagem contínua e treinamento constante;</p>
            <p>Integridade nas relações institucionais;</p>
            <p>Responsabilidade.</p>
          </div>
      </div>
  );
}
