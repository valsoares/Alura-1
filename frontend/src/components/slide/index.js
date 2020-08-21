import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import {
    ListVideo, ListTitulo, Descrip, ListTexto,
} from '../styles';

export default class Slide extends React.Component {
    constructor() {
        super();
        this.state = {
            data: '',
        };
        this.catchVideo = this.catchVideo.bind(this);
    }

    async componentDidMount() {
        const URL = 'http://localhost:3333/categorias?_embed=videos';
        await fetch(URL).then((response) => response.json()).then((data) => this.setState({ data }));
    }

    catchVideo(video) {
        const vetor = `${video.link}`.split('=');
        const variavel = vetor[1].substring(0, 11);
        return variavel;
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToScroll: 1,
            variableWidth: true,
            adaptiveHeight: false,
            swipeToSlide: true,
        };
        console.log(this.state.data);
        return (
            <div style={{
                width: '80vw', marginLeft: 'auto', marginRight: 'auto', color: 'white', marginTop: '50px',
            }}
            >
                {this.state.data
                    && this.state.data.map((text) => (
                        <div key={text.id}>
                            <ListTitulo borderColor={text.cor}>{text.nome}</ListTitulo>
                            <Slider {...settings}>
                                {text.videos.map((video) => (
                                    <div key={video.id}>
                                        <ListVideo
                                            color={text.cor}
                                            src={`https://www.youtube.com/embed/${this.catchVideo(video)}`}
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen
                                        />
                                        <Descrip color={text.cor}>
                                            Sinopse
                                            <ListTexto>{video.descricao}</ListTexto>
                                        </Descrip>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    ))}
            </div>
        );
    }
}
