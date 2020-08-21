/* eslint-disable prefer-destructuring */
/* eslint-disable no-alert */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { createVideo } from '../../server/controllers';

import {
    Input, InputBox, InputTitulo, Titulo, InputButton, InputSelect, SelectOption, Text,
} from '../../components/styles';
import Menu from '../../components/menu';
import Footer from '../../components/footer';

export default class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cadastro: {
                titulo: '',
                link: '',
                categoria: '',
                categoriaId: '',
                descricao: '',
            },
            generos: [],
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.backHome = this.backHome.bind(this);
    }

    async componentDidMount() {
        const URL = 'http://localhost:3333/categorias';
        await fetch(URL).then((response) => response.json()).then((data) => this.setState({ generos: data }));
    }

    handleInput(event) {
        const item = event.target.name;
        const { value } = event.target;

        if (item === 'categoria') {
            const id = parseInt(event.target[event.target.selectedIndex].id);
            this.setState((prevState) => ({
                cadastro: {
                    ...prevState.cadastro,
                    categoriaId: id,
                },
            }));
        }

        this.setState((prevState) => ({
            cadastro: {
                ...prevState.cadastro,
                [item]: value,
            },
        }));
    }

    backHome() {
        const { history } = this.props;
        setTimeout(() => history.push('/'), 2000);
    }

    handleRegister(event) {
        event.preventDefault();
        const { cadastro } = this.state;
        const data = JSON.parse(JSON.stringify(cadastro));
        try {
            createVideo(data);
            this.backHome(data);
        } catch (error) {
            alert('erro ao cadastrar o video.');
        }
    }

    render() {
        return (
            <div>
                <Menu botao="Nova Categoria" url="/cadastro-categoria" />
                <InputBox onSubmit={this.handleRegister}>
                    <Titulo>Cadastro de Vídeo</Titulo>
                    <InputTitulo>Titulo</InputTitulo>
                    <Input name="titulo" placeholder="Titulo" onChange={this.handleInput} required />
                    <InputTitulo>Link do Vídeo</InputTitulo>
                    <Input name="link" type="url" placeholder="Link do Vídeo" onChange={this.handleInput} required />
                    <InputTitulo>Categoria</InputTitulo>
                    <InputSelect name="categoria" onChange={this.handleInput} required>
                        <SelectOption value="">Selecione um gênero</SelectOption>
                        {this.state.generos
                            && this.state.generos.map((text) => (
                                <SelectOption key={text.id} id={text.id}>{text.nome}</SelectOption>
                            ))}
                    </InputSelect>
                    <InputTitulo>Descrição</InputTitulo>
                    <Text name="descricao" placeholder="Descrição" onChange={this.handleInput} required />
                    <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                        <InputButton type="submit" color="var(--azul)">Cadastrar</InputButton>
                        <Link to="/">
                            <InputButton color="gray" style={{ marginLeft: '10px' }}>Cancelar</InputButton>
                        </Link>
                    </div>
                </InputBox>
                <Footer />
            </div>
        );
    }
}

Video.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};
