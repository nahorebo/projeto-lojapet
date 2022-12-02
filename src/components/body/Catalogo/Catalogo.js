import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import petfood from "../../assets/pet-racao.svg";
import petcaminha from "../../assets/pet-caminha.svg";
import petmedicina from "../../assets/pet-medicinas.svg";
import petbrinquedos from "../../assets/pet-brinquedos.svg";
import petgaiola from "../../assets/pet-transporte.svg";

const Catalogo = () => {
  return (
    <div className="containercatalogo">
      <section className="sectioncatalogo">
        <span className="cardcatalogotitle">
          Navegue pelas Categorias!
        </span>
        <nav>
          <ul className="catalogomenu">
            <li className="catalogoicons iconfood">
              <Link href="/">
                <img src={petfood} alt="comida de pet" width="60" className="iconfood-image"></img>
                <span>Ração</span>
              </Link>
            </li>

            <li className="catalogoicons iconcama">
            <Link href="/">
              <img src={petcaminha} alt="camas de pet" width="60" className="iconcama"></img>
              <span>Caminhas</span>
              </Link>
            </li>

            <li className="catalogoicons icongaiola">
            <Link href="/">
              <img src={petgaiola} alt="Gaiolas" width="60" className="icontransporte"></img>
              <span>Caixa de Transporte</span>
              </Link>
            </li>

            <li className="catalogoicons iconbrinquedos">
            <Link href="/">
              <img src={petbrinquedos} alt="brinquedos de pet" width="60" className="iconbrinquedos"></img>
              <span>Brinquedos</span>
              </Link>
            </li>

            <li className="catalogoicons iconmedicina">
            <Link href="/">
              <img src={petmedicina} alt="medicina de pet" width="60" className="iconmedicina"></img>
              <span>Medicamentos</span>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}
export default Catalogo;