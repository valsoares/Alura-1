import React from 'react';

import {
    BannerTotal, BannerTexto, Titulo, BannerBox, ListVideo,
} from '../styles';

export default class Banner extends React.Component {
    constructor() {
        super();
        this.state = {
            data: '',
        };

        this.catchVideo = this.catchVideo.bind(this);
    }

    async componentDidMount() {
        const URL = 'http://localhost:3333/videos?_sort=id&_order=desc';
        await fetch(URL).then((response) => response.json()).then((data) => this.setState({ data }));
    }

    catchVideo() {
        let variavel = '';
        if (this.state.data) {
            const vetor = this.state.data[0].link.split('=');
            variavel = vetor[1].substring(0, 11);
            console.log(variavel);
        }
        return variavel;
    }

    render() {
        return (
            <BannerTotal>
                <BannerBox>
                    <Titulo>
                        Cinema da Val
                    </Titulo>
                    <BannerTexto>
                        Aqui você encontrará trailers das melhores séries eleitas por mim mesma!!
                    </BannerTexto>
                </BannerBox>

                <BannerBox>
                    <Titulo>
                        Recente Adicionado
                    </Titulo>
                    <ListVideo
                        color="black"
                        style={{ marginRight: 'auto', marginLeft: 'auto' }}
                        src={`https://www.youtube.com/embed/${this.catchVideo()}`}
                    />

                </BannerBox>
            </BannerTotal>
        );
    }
}
