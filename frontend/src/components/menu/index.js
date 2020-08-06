import React from 'react';

import {ButtonHeader, LogoHeader, MenuHeader} from '../styles';

import logoimage from '../../itens/logo.png'

export default function Menu() {
    return(
        <MenuHeader>
            <LogoHeader src={logoimage} alt="logo" />
            <ButtonHeader to='/'>Novo Vídeo</ButtonHeader>
        </MenuHeader>
    );
};