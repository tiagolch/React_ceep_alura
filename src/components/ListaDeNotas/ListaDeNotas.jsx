import React, { Component } from "react";
import CardNota from "../CardNota";
import "../../assets/css/style.css"

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
          return (
            <li className="lista-notas_item " key={index}>
              <div><h2>{categoria}</h2></div>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
