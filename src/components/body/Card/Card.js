import React from "react";
import "./styles.css";

const Card = () => {
    return(
      <div className="cardcontainer">
      <div>
        <h1 className="cardtitle">Aproveite Nossas Ofertas</h1>
      </div>

      <section id="cards">

        <div class="card1">
          <a class="a1" href="#">
            <img
              className="cardimage"
              src="https://m.media-amazon.com/images/I/814PDB8E9nL._AC_SX679_.jpg"
              alt="Cachorro marrom"
              width="500"
              height="600"
            ></img>
            Shampoo Pet 5 em 1
          </a>
          <p>R$</p>
        </div>

        <div class="card-2">
          <a class="a1" href="#">
            <img
              className="cardimage"
              src="https://m.media-amazon.com/images/I/814PDB8E9nL._AC_SX679_.jpg"
              alt="Cachorro preto"
              width="500"
              height="600"
            ></img>
            Caminha de Luxo
          </a>
        </div>

        <div class="projeto3">
          <a class="a1" href="#">
            <img
              className="cardimage"
              src="https://m.media-amazon.com/images/I/814PDB8E9nL._AC_SX679_.jpg"
              alt="Cachorro loiro"
              width="500"
              height="600"
            ></img>
            Racao Dog Show
          </a>
        </div>

      </section>
    </div>
    );
}
export default Card;