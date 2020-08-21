/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable prefer-destructuring */
import React from 'react';
import { Link } from 'react-router-dom';

import {
    Input, InputBox, InputTitulo, Titulo,
    InputButton, InputColor,
} from '../../components/styles';
import Menu from '../../components/menu';
import Footer from '../../components/footer';

import { editCategoria } from '../../server/controllers';

export default class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cadastro: {
                nome: '',
                cor: '#000',
            },
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    async componentDidMount() {
        const id = this.props.match.params.id;
        const URL = `http://localhost:3333/categorias/${id}`;
        await fetch(URL).then((response) => response.json()).then((data) => this.setState({ cadastro: data }));
    }

    handleInput(event) {
        const item = event.target.name;
        const { value } = event.target;

        console.log(value);

        this.setState((prevState) => ({
            cadastro: {
                ...prevState.cadastro,
                [item]: value,
            },
        }));
    }

    handleRegister(event) {
        event.preventDefault();
        const id = this.props.match.params.id;
        const { cadastro } = this.state;
        const data = JSON.parse(JSON.stringify(cadastro));
        editCategoria(id, data);
    }

    render() {
        return (
            <div>
                <Menu botao="Nova Categoria" url="/cadastro-categoria" />
                <InputBox onSubmit={this.handleRegister}>
                    <Titulo>Edição de Gênero</Titulo>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '100%' }}>
                            <InputTitulo>Nome</InputTitulo>
                            <Input name="nome" placeholder="Nome" value={this.state.cadastro.nome} onChange={this.handleInput} required />
                        </div>
                        <div style={{ marginRight: '10px' }}>
                            <InputTitulo>Cor</InputTitulo>
                            <InputColor name="cor" type="color" value={this.state.cadastro.cor} onChange={this.handleInput} required />
                        </div>
                    </div>
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
