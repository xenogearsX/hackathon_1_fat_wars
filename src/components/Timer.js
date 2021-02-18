import React from "react";

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
        <div id="bip" className="compteur">
          {this.state.counter1 === 0
            ? "May the force be with you !"
            : this.state.counter1
            ? this.state.counter1 >= 60
              ? Math.trunc(this.state.counter1 / 60) +
                " : " +
                (this.state.counter1 % 60 < 10
                  ? `0${this.state.counter1 % 60}`
                  : this.state.counter1 % 60) + " of hard work remaining"
              : `Train hard for ${this.state.counter1} seconds.`
            : "Click to start"}
        </div>
        <button className="start" onClick={this.timer1}>
          Start training
        </button>
        <div className="break">
          {this.state.counter2 === 0
            ? "Break is over. Please click on start training again !"
            : this.state.counter2
            ? this.state.counter2 >= 60
              ? Math.trunc(this.state.counter2 / 60) +
                " : " +
                (this.state.counter2 % 60 < 10
                  ? `0${this.state.counter2 % 60}`
                  : this.state.counter2 % 60)+" breaktime."
              : `Break for ${this.state.counter2} seconds.`
            : "Train first before break time !"}
        </div>
      </div>
    );
  }
}

export default Timer;
