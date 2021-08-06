import React, { Component } from "react";
import "../../assets/css/style.css";

class FormularioCadastro extends Component {
  constructor(){
    super();
    this.value = "";
  }

  handleMudancaDeTitulo(evento) {
    this.value = evento.target.value;
  }

  render() {
    return (
      <form className="form-cadastro">
        <input    type="text" 
                  placeholder="Título" 
                  className="form-cadastro_input" 
                  onChange={this.handleMudancaDeTitulo.bind(this)} />
        <textarea rows={10} 
                  placeholder="Descrição" 
                  className="form-cadastro_input" />
        <button   type="submit" 
                  className="form-cadastro_input form-cadastro_submit">
        Criar nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;