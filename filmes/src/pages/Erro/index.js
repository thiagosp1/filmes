import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Erro extends Component {
   
    render() {
        return (
            <div >
               <h1>A página que você procura não foi encontrada.</h1>
               <Link to='/' >ir para a Home</Link>
               
            </div>
        );
    }
}


export default Erro;
