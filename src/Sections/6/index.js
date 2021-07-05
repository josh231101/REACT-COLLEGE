import React, { Component, useRef } from "react";
import Chart from "chart.js";

/**
 * Sección 6: Entendiendo las Refs en React
 */

// 53. REF con Class
class Entrada extends Component {
  constructor() {
    super();
    this.entrada = React.createRef();
  }
  componentDidMount() {
    //this.focus();
  }

  focus = () => {
    this.entrada.current.focus();
  };
  blur = () => {
    this.entrada.current.blur();
  };

  render() {
    return (
      <div>
        <h3>Usando las refs con input </h3>
        <input type="text" ref={this.entrada} />
        <button onClick={this.focus}>Focus</button>
        <button onClick={this.blur}>Blur</button>
      </div>
    );
  }
}

// 54. Integrar librerías de terceros usando las refs de React
class Graficas extends Component {
  grafica = React.createRef();

  componentDidMount() {
    const ctx = this.grafica.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [10, 7, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  render() {
    return (
      <div>
        <canvas ref={this.grafica} width="10" height="4"></canvas>
      </div>
    );
  }
}

// 55. Reenvió de la prop especial ref con forwardref
const FancyInput = React.forwardRef((props, ref) => (
  <div>
    <button ref={ref}></button>
  </div>
));

const Section6 = () => {
  const myButton = useRef();
  console.log("myButton ref: ", myButton);

  return (
    <>
      <h1 className="section-title">
        Sección 6: Entendiendo las Refs en React
      </h1>
      <Entrada />
      <Graficas />
      <FancyInput ref={myButton} />
    </>
  );
};

export default Section6;
