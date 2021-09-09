import React from "react";

export default class Recordatorio extends React.Component {
  render() {
    return (
      <div className="recordatorio">
        <h3>Selección anterior: {this.props.seleccionPrevia.toUpperCase()}</h3>
        <h4>Historial de opciones elegidas: </h4>
        <ul>{this.props.historial.map(
            (e, index) => <li key={index}>{e.toUpperCase()}</li>
          )}</ul>
      </div>
    );
  }
}