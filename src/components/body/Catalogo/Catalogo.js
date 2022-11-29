import React from "react";
import "./styles.css";

const Catalogo = () => {
    return(
    <div className="containercatalogo">
    <h1>
      Conheça nossos produtos!
    </h1>
    <div className="cardcatalogo">
      <img
        className="img-shampoo"
        src="../public/images/body.cachorro1.jpg"
        alt="shampoo e loções"
        width="500"
        height="600"
      ></img>
    </div>
    <div className="cardcatalogo">
      <img
        className="petfood"
        src="../public/images/body.cachorro1.jpg"
        alt="ração e petiscos"
        width="500"
        height="600"
      ></img>
    </div>
    <div className="ccardcatalogo">
      <img
        className="cremes"
        src="../public/images/body.cachorro1.jpg"
        alt="Ccremes"
        width="500"
        height="600"
      ></img>
      <div class="cardcatalogo">
        <img
          className="img-caminhas"
          src="../public/images/body.cachorro1.jpg"
          alt="caminhas"
          width="500"
          height="600"
        ></img>
      </div>
      <div class="cardcatalogo">
        <img
          className="img-brinquedos"
          src="../public/images/body.cachorro1.jpg"
          alt="brinquedos"
          width="500"
          height="600"
        ></img>
      </div>
    </div>
  </div>
  );
}
export default Catalogo;