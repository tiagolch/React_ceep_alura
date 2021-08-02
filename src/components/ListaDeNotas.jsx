import React, { Component } from "react";
import CardNota from "./CardNota";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
          return (
            <li key={index}>
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
