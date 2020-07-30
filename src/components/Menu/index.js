import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
// import BtnLink from './components/BtnLink';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
            <img className="Logo" src={Logo} alt="FullFLix Logo" />
            </Link>

            <Button as={Link } className="BtnLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu; // Exportar esse componente para poder importar em outros lugares