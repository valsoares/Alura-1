import styled from 'styled-components';
import { Link } from 'react-router-dom';

import banner from '../itens/banner.jpg'

// Componentes Padrões

export const Button = styled(Link)`
    background-color: transparent;
    color: white;
    font-size: 15px;
    /* font-weight: bold; */
    padding: 10px;
    border: 1px white solid;
    border-radius: 5px;
    transition: opacity .3s;

    &:hover {
        opacity: .8;
    }
`;

export const Logo = styled.img`
    width: 300px;
`;

export const Titulo = styled.h1`
    color: white;
    font-weight: 400;
    text-align: center;
    margin-bottom: 10px;

    @media(max-width: 800px) {
        font-size:40px;
    }
`;

//Componentes Específicos

//Header
export const MenuHeader = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    width: 100vw;
    height: 80px;
    border-bottom: 3px solid var(--azul);

`;

export const ButtonHeader = styled(Button)`
    margin-right: 5%;

    @media(max-width: 800px) {
        position: fixed;
        background-color: var(--azul);
        text-align: center;
        font-size:40px;
        bottom: 0;
        left: 0;
        right: 0;
        margin-right: 0;
        border: none;
        border-radius: 0px;
    }
`;

export const LogoHeader = styled(Logo)`
    width: 150px;
    margin-left: 5%;

    @media(max-width: 800px) {
        margin-left: auto;
        margin-right: auto;
    }
`;

//Banner
export const BannerTotal = styled.div`
    display: flex;
    background-color: hsla(0,0%,0%,0.70);
    background-blend-mode: overlay;
    background-image: url(${banner}) ;
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 60vh;
    align-items: center;
    justify-content:space-around;
    margin-bottom: 50px;

    @media(max-width: 800px) {
        flex-direction: column;
    }

    /* opacity: .5; */
`;

export const BannerBox = styled.div`
    background-color: rgb(0,0,0,.7);
    width: 30vw;
    border-radius: 10px;
    padding: 10px;

    @media(max-width: 800px) {
        width: 80vw;
    }
`;

export const BannerTexto = styled.p`
    color: white;
    text-align: center;

    @media(max-width: 800px) {
        font-size:25px;
    }
`;

//List

export const ListTitulo = styled(Titulo)`
    width: fit-content;
    text-align: left;
    margin-left: 10px;
    border-bottom:2px solid ${props => `${props.borderColor}`};
`;

export const ListVideo = styled.div`
    background-color:${props => `${props.color}`};
    width: 300px;
    height: 200px;
    padding: 10px;
    margin-left: 10px;
    border-radius: 10px;

    opacity: .5;
`;

export const ListContent = styled.div`
    display: inline-flex;
    margin-bottom: 50px;
`;