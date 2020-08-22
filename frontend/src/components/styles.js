import styled from 'styled-components';
import { Link } from 'react-router-dom';

import banner from '../itens/banner.jpg';

// Componentes Padrões

export const Button = styled(Link)`
    background-color: transparent;
    color: white;
    font-size: 15px;
    padding: 10px;
    border: 1px white solid;
    border-radius: 3px;
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
        font-size:35px;
    }
`;

export const InputBox = styled.form`
    display: flex;
    flex-direction: column;
    width: 40vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;

    @media(max-width: 800px) {
        width: 80vw;
    }
`;

export const Input = styled.input`
    width: 100%;
    color: gray;
    padding: 10px;
    margin-bottom: 20px;

    @media(max-width: 800px) {
        font-size: 18px;
    }
`;

export const InputTitulo = styled.h3`
    color: white;
    font-weight: 400;
    margin-bottom: 5px;

`;

export const InputSelect = styled.select`
    color: gray;
    padding: 10px;
    margin-bottom: 20px;

    @media(max-width: 800px) {
        font-size: 18px;
    }
`;

export const SelectOption = styled.option`
    
`;

export const Text = styled.textarea`
    max-width: 100%;
    width: 100%;
    color: gray;
    margin-bottom: 20px;
    padding: 10px;

    @media(max-width: 800px) {
        font-size: 18px;
    }
`;

export const Paragrafo = styled.p`
    color: white;
    text-align:justify;
`;

// Componentes Específicos

// Header
export const MenuHeader = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    height: 80px;
    border-bottom: 3px solid var(--azul);

    
    @media(max-width: 800px) {
        justify-content: center;
    }

`;

export const ButtonHeader = styled(Button)`
    margin-right: 5%;

    @media(max-width: 800px) {
        position: fixed;
        background-color: var(--azul);
        text-align: center;
        font-size:30px;
        bottom: 0;
        left: 0;
        right: 0;
        margin-right: 0;
        padding: 15px;
        border: none;
        border-radius: 0px;
        z-index: 100;
    }
`;

export const LogoHeader = styled(Logo)`
    width: 150px;
    margin-left: 5%;

`;

// Banner
export const BannerTotal = styled.div`
    display: flex;
    background-color: hsla(0,0%,0%,0.70);
    background-blend-mode: overlay;
    background-image: url(${banner}) ;
    background-size: cover;
    background-position: center;
    height: 60vh;
    align-items: center;
    justify-content:space-around;
    margin-bottom: 50px;

    @media(max-width: 800px) {
        flex-direction: column;
        height: 80vh;
        /* margin-bottom: 30%; */
    }
`;

export const BannerBox = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: rgb(0,0,0,.7);
    width: 30vw;
    border-radius: 10px;
    padding: 10px;

    @media(max-width: 800px) {
        width: 90vw;
        background-color: rgb(0,0,0,.5);
    }
`;

export const BannerTexto = styled(Paragrafo)`
    text-align: center;

    @media(max-width: 800px) {
        font-size:22px;
    }
`;

// List

export const ListTitulo = styled(Titulo)`
    width: fit-content;
    text-align: left;
    margin-left: 10px;
    border-bottom:2px solid ${(props) => `${props.borderColor}`};
`;

export const ListTexto = styled(Paragrafo)`
    display: none;
    color: white;
    font-size: 15px;
    text-align: center;
    font-weight:normal;
    padding-top: 5px;

    @media(max-width: 800px) {
        font-size: 20px;
    }
`;

export const Descrip = styled.div`
    display: block;
    cursor: pointer;
    width: 300px;
    color: ${(props) => `${props.color}`};
    border-radius: 10px;
    text-align: center;
    font-size: 20px;
    font-weight: 300;
    padding: 10px;
    transition: .5s;

    &:hover ${ListTexto} {
        display: block;
    }
`;

export const ListVideo = styled.iframe`
    background-color:${(props) => `${props.color}`};
    width: 300px;
    height: 200px;
    padding: 5px;
    margin-right: 10px;
    border-radius: 10px;
    border: none;
`;

// Footer
export const FooterBox = styled.div`
    display: flex;
    position: relative;
    align-items:center;
    justify-content: center;
    background-color: black;
    height: 80px;
    margin-top:50px;
    border-top: 3px solid var(--azul);
    bottom: 0;

    @media(max-width: 800px) {
        margin-top: 15vh;
        bottom: 10vh;
    }
`;

export const FooterTexto = styled(Paragrafo)`
    color: white;

    @media(max-width: 800px) {
        font-size: 20px;
        text-align: center;
        padding: 20px;
    }
`;

// Register Video

export const InputButton = styled.button`
    cursor: pointer;
    background-color:${(props) => `${props.color}`};
    color: white;
    width: 20vw;
    text-align: center;
    border: none;
    padding: 10px;
    
    &:hover {
        opacity: .8;
    }

    @media(max-width: 800px) {
        font-size: 18px;
        width: auto;
    }
`;

export const InputColor = styled(Input)`
    height: 39px;
    width: 50px;
    padding:0;
    margin-left: 10px;
`;

// Register Genero
export const EditTotal = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: space-between;

    @media(max-width: 800px) {
        flex-direction: column;
    }
`;

export const EditBox = styled.div`
    color: white;
    width: 40vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    border-right: 3px solid var(--azul);

    @media(max-width: 800px) {
        border: none;
        width: 80vw;
    }
`;

export const EditButton = styled(Button)`
    background-color:${(props) => `${props.color}`};
    font-size: 12px;
    text-align: center;
    min-width: 60px;
    border: none;
    margin-right: 5px;

    @media(max-width: 800px) {
        font-size: 15px;
    }

`;

export const EditGroup = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    margin-right: 10px;
    padding: 5px;
    padding-right: 0;
    border: 2px solid var(--azul);

`;

export const EditText = styled(Paragrafo)`
    border-bottom: 2px solid ${(props) => `${props.color}`};
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;

    @media(max-width: 800px) {
        font-size: 20px;
    }
`;
