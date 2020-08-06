import React from 'react';

import {BannerTotal, BannerTexto, Titulo, BannerBox} from '../styles';

export default function Banner() {
    return(
        <BannerTotal>
            <BannerBox>
                <Titulo>
                    Cinema da Val
                </Titulo>
                <BannerTexto>Aqui você encontrará trailers dos melhores filmes e séries eleitos por mim mesma!!</BannerTexto>
            </BannerBox>

            <BannerBox>
                <Titulo>
                    Recente Adicionado
                </Titulo>

            </BannerBox>
        </BannerTotal>
    );
}