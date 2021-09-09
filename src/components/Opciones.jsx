import React from "react";

export default class Opciones extends React.Component {
  render() {
    return (
      <div className="opciones">

        <div className="opcion">
          <button id="a" className="botones" onClick={(e)=>this.props.handleClick(e)}>A</button>
          <h2>{this.props.opcionA}</h2> 
        </div>
        
        <div className="opcion">
          <button id="b" className="botones" onClick={(e)=>this.props.handleClick(e)}>B</button>
          <h2>{this.props.opcionB}</h2>
        </div>
      
      </div>
    );
  }
}