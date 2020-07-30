import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
// import BtnLink from './components/BtnLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="FullFLix Logo" />
            </a>

            <Button as="a" className="BtnLink" href="/ ">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu; // Exportar esse componente para poder importar em outros lugares