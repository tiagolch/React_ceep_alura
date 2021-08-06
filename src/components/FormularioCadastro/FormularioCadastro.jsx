import React, { Component } from "react";
import "../../assets/css/style.css";

class FormularioCadastro extends Component {
  constructor(){
    super();
    this.value = "";
    this.texto = "";
  }

  _handleMudancaDeTitulo(evento) {
    evento.stopPropagation();
    this.value = evento.target.value;

  }

  _handleMudancaDeTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.value, this.texto);
  }

  render() {
    return (
      <form className="form-cadastro"
      onSubmit={this._criarNota.bind(this)}>
        <input    type="text" 
                  placeholder="Título" 
                  className="form-cadastro_input" 
                  onChange={this._handleMudancaDeTitulo.bind(this)} />
        <textarea rows={10} 
                  placeholder="Descrição" 
                  className="form-cadastro_input" 
                  onChange={this._handleMudancaDeTexto.bind(this)} />
        <button   type="submit" 
                  className="form-cadastro_input form-cadastro_submit">
        Criar nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;