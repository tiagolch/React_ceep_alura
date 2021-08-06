import React, { Component } from "react";
import './assets/css/App.css';
import './assets/css/index.css';
import ListaDeNotas  from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';

class App extends Component {
    render() {
      return (
        <section>
          <FormularioCadastro />
          <ListaDeNotas/>
        </section>
      );
  }
}

export default App;
