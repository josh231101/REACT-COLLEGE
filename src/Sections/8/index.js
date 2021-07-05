import React, { Component, useRef } from "react";

/**
 * Sección 8: Debuggin y control de Errores
 */
class LimiteErrores extends Component {
  state = {
    tieneError: false
  };
  componentDidCatch(error, errorInfo) {
    this.setState({ tieneError: true, error });
  }

  render() {
    const { tieneError, error, errorInfo } = this.state;
    if (tieneError) {
      return (
        <div>
          <p>UPs! Ocurrió un error inesperado en la aplicación :/ </p>
          <h2>{!!error && error.toString()}</h2>
        </div>
      );
    }
    return this.props.children;
  }
}

class FailedButton extends Component {
  state = {
    dispararError: false
  };
  dispararError = () => this.setState({ dispararError: true });

  render() {
    if (this.state.dispararError) {
      throw new Error("Lo siento he fallado ️‍🔥️‍🔥️‍🔥");
    }
    return <button onClick={this.dispararError}>Button with Bug</button>;
  }
}

const Section8 = () => {
  return (
    <>
      <h1 className="section-title">
        Sección 8: Debuggin y control de Errores
      </h1>
      <p>El poderoso Chrome DevTools</p>
      <LimiteErrores>
        <FailedButton />
      </LimiteErrores>
    </>
  );
};

export default Section8;
