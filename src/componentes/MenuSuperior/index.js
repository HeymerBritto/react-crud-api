import React from 'react';

import './index.css';

import { faHome, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MenuSuperior({ urlLogo }) {

    return (
        <div className="menu-superior">
            <div className="menu-container">
                <div className="menu-container-center">
                    <div className="menu-logo">
                        <a href="/">
                            <img className="menu-logo-png" src={urlLogo} alt="Logo" />
                        </a>
                    </div>
                    <div className="menu-itens">
                        <div className="menu-item-selected">Jornada Financeira</div>
                        <div>Acompanhe sua Obra</div>
                    </div>
                    <button className="menu-item-botao menu-item-botao-espacamento">
                        <FontAwesomeIcon icon={faHome} size="2x"/>
                    </button>
                    <button className="menu-item-botao">
                        <FontAwesomeIcon icon={faBars} size="2x"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MenuSuperior;