import React from "react";
import "./styles.css";

const Catalogo = () => {
    return(
    <div id="#catalogo">
    <h1>
      Conheça nossos produtos!
    </h1>
    <div class="shampoo">
      <img
        className="img-shampoo"
        src="../public/images/body.cachorro1.jpg"
        alt="shampoo e loções"
        width="500"
        height="600"
      ></img>
    </div>
    <div class="pet-food">
      <img
        className="petfood"
        src="../public/images/body.cachorro1.jpg"
        alt="ração e petiscos"
        width="500"
        height="600"
      ></img>
    </div>
    <div class="catalogo">
      <img
        className="cremes"
        src="../public/images/body.cachorro1.jpg"
        alt="Ccremes"
        width="500"
        height="600"
      ></img>
      <div class="caminhas">
        <img
          className="img-caminhas"
          src="../public/images/body.cachorro1.jpg"
          alt="caminhas"
          width="500"
          height="600"
        ></img>
      </div>
      <div class="bringquedos">
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