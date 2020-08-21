import React from 'react';

import Menu from '../../components/menu';
import Banner from '../../components/banner';
import List from '../../components/list';
import Footer from '../../components/footer';

export default function Home() {
    return (
        <div>
            <Menu botao="Novo Vídeo" url="/cadastro-video" />
            <Banner />
            <List />
            <Footer />
        </div>
    );
}
