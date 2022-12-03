import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import "./styles.css";
import fundofooter from "../assets/fundofooter.jpg";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer' style={{ backgroundImage: `url(${fundofooter})` }}>
            <div className='container'>
                <div className='row'>
                    <div className='footer-col'>
                        <h4>Pet codigos</h4>
                        <ul>
                            <li><a href='#'>Sobre nós</a></li>
                            <li><a href='#'>Nossos serviços</a></li>
                            <li><a href='#'>Politica e privacidade</a></li>
                            <li><a href='#'>Programas</a></li>
                        </ul>

                    </div>
                    <div className='footer-col'>
                        <h4>Obter ajuda</h4>
                        <ul>
                            <li><a href='#'>Perguntas Frequentes</a></li>
                            <li><a href='#'>Transporte</a></li>
                            <li><a href='#'>Retorno</a></li>
                            <li><a href='#'>Status de Pedidos</a></li>
                            <li><a href='#'>Opção de pagamento</a></li>
                        </ul>

                    </div>
                    <div className='footer-col'>
                        <h4>Produtos mais vendidos</h4>
                        <ul>
                            <li><a href='#'>Ração</a></li>
                            <li><a href='#'>Cama</a></li>
                            <li><a href='#'>Leite</a></li>
                            <li><a href='#'>Outros</a></li>
                        </ul>

                    </div>
                    <div className='footer-col'>
                        <p>Siga-nos</p>
                        <div className='social-links'>
                            <ul>
                                <li><Link><FaFacebook /></Link></li>
                                <li><Link> <FaInstagram /></Link></li>
                                <li><Link> <FaLinkedin /></Link></li>
                                <li><FaEnvelope /> petcodigos@gmail.com</li>
                                <li><FaPhoneAlt/>99999999999</li>
                                <li><span>Pet Codigos</span>&copy; 2022</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;