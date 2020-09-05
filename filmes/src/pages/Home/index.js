import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filmes: []
        };

        this.loadfilmes = this.loadfilmes.bind(this);

    }

    componentDidMount() {
        this.loadfilmes();
    }

    loadfilmes() {
        let url = 'http://sujeitoprogramador.com/r-api/?api=filmes';
        fetch(url)
            .then((r) => r.json())
            .then((json) => {
                this.setState({ filmes: json });
                console.log(json);
            });
    }
    render() {
        return (
            <div className="container">
                <div className="lista-filmes">
                    {this.state.filmes.map((filme) => {
                        return (
                            <article key={filme.id} className="filme">
                                <strong className="filme-nome">{filme.nome} </strong>
                                <img className="filme-imagem" src={filme.foto} alt="Capa" />
                                <Link className="filme-botao" to="/">Acessar</Link>
                            </article>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Home;