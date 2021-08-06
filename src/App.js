import React, { Component } from "react";
import './assets/css/App.css';
import './assets/css/index.css';
import ListaDeNotas  from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';

class App extends Component {

  criarNota(titulo, texto) {
     console.log('uma nova nota criada ' + titulo + " " + texto);
  }
  
    render() {
      return (
        <section>
          <FormularioCadastro criarNota={this.criarNota} />
          <ListaDeNotas/>
        </section>
      );
  }
}

export default App;
