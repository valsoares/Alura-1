import React from 'react';
import Slider from "react-slick";

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { ListVideo, ListTitulo } from '../styles';

export default class Slide extends React.Component {

    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return(
            <div>
                <ListTitulo borderColor={'red'}>Ação e Aventura</ListTitulo>
                <Slider {...settings}>
                    <div>
                        <ListVideo color={'red'}></ListVideo>
                    </div>
                    <div>
                        <ListVideo color={'red'}></ListVideo>
                    </div>
                    <div>
                        <ListVideo color={'red'}></ListVideo>
                    </div>
                </Slider>
            </div>
        );
    }
}