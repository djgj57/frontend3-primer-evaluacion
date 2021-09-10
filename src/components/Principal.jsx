import historias from "./data";
import React from "react";
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio";

export default class Principal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cuento: 2,
      seleccionPrevia: "",
      historiaEnPantalla: historias[0].historia,
      opcionA: historias[0].opciones.a,
      opcionB: historias[0].opciones.b,
      historial: []
    };
    this.handleClick = this.handleClick.bind(this)
  }

  // Se realiza despues del render al actualizar
  componentDidUpdate() {
    let {historial} = this.state;
    historial = historial.push(this.state.seleccionPrevia);
  }

  handleClick(e) {
    const id = e.currentTarget.id;

    if (this.state.cuento <= (historias.length + 1) / 2) {
      this.setState({
        cuento: this.state.cuento + 1,
        seleccionPrevia: id,
        historiaEnPantalla: historias.find(e => e.id === `${this.state.cuento}${id}`).historia,
        opcionA: historias.find(e => e.id === `${this.state.cuento}${id}`).opciones.a,
        opcionB: historias.find(e => e.id === `${this.state.cuento}${id}`).opciones.b
      });
    } else { alert('Fin.') };
  }

  render() {
    const {historial} = this.state;
    return (
      <div className="layout">
        <h1 className="historia">{this.state.historiaEnPantalla}</h1>
        <Opciones handleClick={this.handleClick} opcionA={this.state.opcionA} opcionB={this.state.opcionB} />
        <Recordatorio seleccionPrevia={this.state.seleccionPrevia} historial={historial} />
      </div>
    );
  }

}