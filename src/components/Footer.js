import React from 'react';
import "./footer.css";
import { FaFacebookSquare, FaInstagramSquare, FaYoutube, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerContainer'>
            <div className='footerTop'>
                <h4>Siguenos en Nuestra Redes Sociales</h4>
                <div className='ContainerIco'>
                < FaFacebookSquare/> <FaInstagramSquare/> <FaYoutube/> <FaTwitterSquare/>
                </div>
            </div>
            <div className='footerBottom'>
                <p>© 2023 Astral Colombia | | Todos los derechos reservados. Astral Colombia S.A.S</p>
            </div>
        </div>
    </div>
  )
}

export default Footer