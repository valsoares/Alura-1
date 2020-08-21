import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
    Input, InputBox, InputTitulo, Titulo,
    InputButton, EditBox, EditButton,
    EditGroup, EditText, InputColor,
} from '../../components/styles';
import Menu from '../../components/menu';
import Footer from '../../components/footer';

import { createCategoria, deleteCategoria, } from '../../server/controllers';

export default class Categoria extends React.Component {
    constructor() {
        super();
        this.state = {
            cadastro: {
                nome: '',
                cor: '',
            },
            data: '',
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.backVideo = this.backVideo.bind(this);
    }

    async componentDidMount() {
        const URL = 'http://localhost:3333/categorias';
        await fetch(URL).then((response) => response.json()).then((data) => this.setState({ data }));
    }

    handleInput(event) {
        const item = event.target.name;
        const { value } = event.target;

        this.setState((prevState) => ({
            cadastro: {
                ...prevState.cadastro,
                [item]: value,
            },
        }));
    }

    backVideo() {
        const { history } = this.props;
        setTimeout(() => history.push('/cadastro-video'), 2000);
    }

    handleRegister(event) {
        event.preventDefault();
        const { cadastro } = this.state;
        const data = JSON.parse(JSON.stringify(cadastro));
        try {
            createCategoria(data);
            this.backVideo();
        } catch (error) {
            alert('erro ao cadastrar o genero.');
        }
    }

    handleDelete = id => event => {
        try {
            deleteCategoria(id);
        } catch (error) {
            alert('erro ao deletar o genero.');
        }
    }

    render() {
        return (
            <div>
                <Menu botao="Novo Vídeo" url="/cadastro-video" />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <EditBox>
                        <Titulo>Edição de Gênero</Titulo>
                        {this.state.data
                            && this.state.data.map((text) => (
                                <EditGroup key={text.id}>
                                    <EditText color={text.cor}>{text.nome}</EditText>
                                    <EditButton color="var(--azul)" to={`edit/${text.id}`}>Editar</EditButton>
                                    <EditButton color="red" to="/cadastro-video" onClick={this.handleDelete(`${text.id}`)}>Deletar</EditButton>
                                </EditGroup>

                            ))}
                    </EditBox>

                    <InputBox onSubmit={this.handleRegister}>
                        <Titulo>Cadastro de Gênero</Titulo>
                        <div style={{ display: 'flex' }}>
                            <div style={{ width: '100%' }}>
                                <InputTitulo>Nome</InputTitulo>
                                <Input name="nome" placeholder="Nome" onChange={this.handleInput} required />
                            </div>
                            <div style={{ marginRight: '10px' }}>
                                <InputTitulo>Cor</InputTitulo>
                                <InputColor name="cor" type="color" onChange={this.handleInput} required />
                            </div>
                        </div>
                        <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                            <InputButton type="submit" color="var(--azul)">Cadastrar</InputButton>
                            <Link to="/">
                                <InputButton color="gray" style={{ marginLeft: '10px' }}>Cancelar</InputButton>
                            </Link>
                        </div>
                    </InputBox>
                </div>
                <Footer />
            </div>
        );
    }
}

Categoria.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};
