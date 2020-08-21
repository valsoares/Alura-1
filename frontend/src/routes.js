import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/home';
import Video from './pages/video';
import Categoria from './pages/categoria';
import Edit from './pages/edit';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cadastro-video" component={Video} />
                <Route path="/cadastro-categoria" component={Categoria} />
                <Route path="/edit/:id" component={Edit} />
            </Switch>
        </BrowserRouter>
    );
}
