import React from "react";

function Body() {
  return (
    <body>

      <div>
        <p>Loja Pet codigos</p>
      </div>

      <h1> Aproveite nossas ofertas</h1>
      <div id="cards">
        <div class="card1">
          <a class="a1" href="#">
            <img
              className="img-card1"
              src="../public/images/body.cachorro1.jpg"
              alt="Cachorro marrom"
              width="500"
              height="600"
            ></img>
            cachorro 1
          </a>
        </div>
        <div class="card-2">
          <a class="a1" href="#">
            <img
              className="img-card1"
              src="../public/images/body.cachorro1.jpg"
              alt="Cachorro preto"
              width="500"
              height="600"
            ></img>
            Cachorro 2
          </a>
        </div>
        <div class="projeto3">
          <a class="a1" href="#">
            <img
              className="img-card1"
              src="../public/images/body.cachorro1.jpg"
              alt="Cachorro loiro"
              width="500"
              height="600"
            ></img>
            Cachorro 3
          </a>
        </div>
      </div>

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

      <div id="#Adote">
        <div>
          <img className="img-adoto"
            src=""
            alt="Cachorrinho deitado"
            width="500"
            height="600">
          </img>
          <p> Uma seleção especial de peludinhos que buscam um lar para chamar de seu</p>
          <p> visite nossa loja e conheça outros pets disponíveis para adoção pertinho de você.</p>
        </div>
      </div>
    </body>
  );
}
export default Body;