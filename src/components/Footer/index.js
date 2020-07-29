import React from 'react';
import {FooterBase} from './style';
import Logo from '../../assets/img/logo-dramaflix.png';

function Footer() {
    return (
        <FooterBase>
            <a href="/">
            <img className="Logo" src={Logo} alt="Logo Dramaflix"/>
            </a>
            <p>
                Orgulhosamente criado por Gabriela Garcia durante a
                {' '}
                <a href="https://www.alura.com.br/" style={{color: "#2E2EFE"}}>
                    Imersão React da Alura
                </a>
            </p>
        </FooterBase>
    );
}

export default Footer;