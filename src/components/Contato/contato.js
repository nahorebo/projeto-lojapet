import React from 'react';
import "./styles.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

function Contato() {
    return (
        <div className="container">
            <span><FaFacebook /></span>
            <span><FaInstagram /></span>
            <span><FaLinkedin /></span>
            <span><FaEnvelope /> petcodigos@gmail.com</span>
            <span><FaPhoneAlt />99999999999</span>
        </div>
    );
}

export default Contato;