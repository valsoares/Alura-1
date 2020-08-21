import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ButtonHeader, LogoHeader, MenuHeader } from '../styles';

import logoimage from '../../itens/logo.png';

export default function Menu({ botao, url }) {
    return (
        <MenuHeader>
            <Link to="/">
                <LogoHeader src={logoimage} alt="logo" />
            </Link>
            <ButtonHeader to={url}>{botao}</ButtonHeader>
        </MenuHeader>
    );
}

Menu.propTypes = {
    botao: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};
