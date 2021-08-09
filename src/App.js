import React, { Component } from "react";
import './assets/css/App.css';
import './assets/css/index.css';
import ListaDeNotas  from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      notas: []
    };
  }

  criarNota(titulo, texto) {
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado);
  }
  
    render() {
      return (
        <section>
          <FormularioCadastro criarNota={this.criarNota.bind(this)} />
          <ListaDeNotas notas={this.state.notas} />
        </section>
      );
  }
}

export default App;
