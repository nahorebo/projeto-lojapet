import React from 'react';
import {FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt} from 'react-icons/fa';
import "./styles.css";

function Footer() {
    return (
        <div className='container'>
            <h4>Pet Codigos</h4>
            <p>Para questões e sugestões</p>
            <p>Nós esperamos pela sua visita</p>
            <h4>Serviços</h4>
            <p>Sobre </p>
            <p>Politica e privacidade</p>
            <h4>Segue as Nossas Redes Sociais</h4>
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaEnvelope /> petcodigos@gmail.com
            <FaPhoneAlt />99999999999<br />
            <p><span>Pet Codigos</span>&copy; 2022</p>
        </div>  

    );
}

export default Footer;