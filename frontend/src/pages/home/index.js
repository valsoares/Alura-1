import React from 'react';

import Menu from '../../components/menu'
import Banner from '../../components/banner'
import List from '../../components/list'

export default class Home extends React.Component {
    render() {
        return(
            <div>
                <Menu/>
                <Banner/>
                <List/>
            </div>
        );
    }
}