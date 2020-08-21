/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { FiFilm, FiChevronsRight } from 'react-icons/fi';
import { FooterBox, FooterTexto } from '../styles';

export default function Footer() {
    return (
        <div>
            <FooterBox>
                <FooterTexto>
                    <FiFilm style={{ color: 'var(--azul)' }} /> Feito por Valesca Soares em 2020 <FiChevronsRight style={{ color: 'var(--azul)' }} /> Brasília, Brasil.
                </FooterTexto>
            </FooterBox>
        </div>
    );
}
