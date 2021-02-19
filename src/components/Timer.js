import React from "react";
import abdou from '../abdousidious.jpg'
import Nav from "./Nav";

import "./Timer.css"

class Timer extends React.Component {
  state = {
    counter1: null,
    intervalId1: null,
    counter2: null,
  };
  timer1 = () => {
    this.setState({ counter1: 5, intervalId1: setInterval(this.bip1, 1000) });
  };
  timer2 = () => {
    this.setState({ counter2: 5, intervalId1: setInterval(this.bip2, 1000) });
  };
  bip1 = () => {
    this.setState({ counter1: this.state.counter1 - 1 });
    if (this.state.counter1 === 0) {
      clearInterval(this.state.intervalId1);
      this.timer2();
    }
  };
  bip2 = () => {
    this.setState({ counter2: this.state.counter2 - 1 });
    if (this.state.counter2 === 0) {
      clearInterval(this.state.intervalId1);
    }
  };

  render() {
    return (
      <div className="timer">
        <Nav />
        <div id="bip" className="compteur">
          {this.state.counter1 === 0
            ? <div><img src={abdou} /><h1>Réussi tu as !</h1></div>
            : this.state.counter1
            ? this.state.counter1 >= 60
              ? Math.trunc(this.state.counter1 / 60) +
                " : " +
                (this.state.counter1 % 60 < 10
                  ? `0${this.state.counter1 % 60}`
                  : this.state.counter1 % 60) + " d'entraînement"
              : `${this.state.counter1} secondes avant la pause.`
            : "Bouton tu cliqueras"}
        </div>
        <button className="button" onClick={this.timer1}>
          Exercice tu commenceras
        </button>
        <div className="break">
          {this.state.counter2 === 0
            ? "Finis est la pause. Bouton tu recliqueras !"
            : this.state.counter2
            ? this.state.counter2 >= 60
              ? Math.trunc(this.state.counter2 / 60) +
                " : " +
                (this.state.counter2 % 60 < 10
                  ? `0${this.state.counter2 % 60}`
                  : this.state.counter2 % 60)+" de pause tu as."
              : `pause de ${this.state.counter2} secondes tu as.`
            : "Sport avant la pause tu feras  !"}
        </div>
      </div>
    );
  }
}

export default Timer;
