import React from "react";
import axios from "axios";
import "./APIimc.css";
import Nav from "./Nav";

class APIimc extends React.Component {
  state = {
    characters: [],
    userTaille: "",
    userPoids: "",
    IMC: 0,
    IMC0: [],
    IMC1: [],
    IMC2: [],
    IMC3: [],
    IMC4: [],
    IMC5: [],
    category: "",
  };

  handleIMC = async () => {
    await this.setState({
      IMC: (
        (this.state.userPoids /
          (this.state.userTaille * this.state.userTaille)) *
        10000
      ).toFixed(2),
    });
    await this.setState({
      category:
        this.state.IMC <= 18.5
          ? 0
          : this.state.IMC <= 25
          ? 1
          : this.state.IMC <= 30
          ? 2
          : this.state.IMC <= 35
          ? 3
          : this.state.IMC <= 40
          ? 4
          : 5,
    });
    this.test();
  };
  test = () =>
    this.state.category
      ? this.state.category === 0
        ? this.setState({
            random: this.state.IMC0[
              this.getRandom(0, this.state.IMC0.length - 1)
            ],
          })
        : this.state.category === 1
        ? this.setState({
            random: this.state.IMC1[
              this.getRandom(0, this.state.IMC1.length - 1)
            ],
          })
        : this.state.category === 2
        ? this.setState({
            random: this.state.IMC2[
              this.getRandom(0, this.state.IMC2.length - 1)
            ],
          })
        : this.state.category === 3
        ? this.setState({
            random: this.state.IMC3[
              this.getRandom(0, this.state.IMC3.length - 1)
            ],
          })
        : this.state.category === 4
        ? this.setState({
            random: this.state.IMC4[
              this.getRandom(0, this.state.IMC4.length - 1)
            ],
          })
        : this.setState({
            random: this.state.IMC5[
              this.getRandom(0, this.state.IMC5.length - 1)
            ],
          })
      : null;
  getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  handlePoids = async (e) => {
    await this.setState({ userPoids: e.target.value });
    this.handleIMC();
  };
  handleTaille = async (e) => {
    await this.setState({ userTaille: e.target.value });
    this.handleIMC();
  };

  componentDidMount() {
    axios
      .get("https://miadil.github.io/starwars-api/api/all.json")
      .then((res) =>
        this.setState({
          characters: res.data,
          IMC0: res.data.filter(
            (perso) => perso.mass / (perso.height * perso.height) <= 18.5
          ),
          IMC1: res.data.filter(
            (perso) =>
              perso.mass / (perso.height * perso.height) <= 25 &&
              perso.mass / (perso.height * perso.height) > 18.5
          ),
          IMC2: res.data.filter(
            (perso) =>
              perso.mass / (perso.height * perso.height) <= 30 &&
              perso.mass / (perso.height * perso.height) > 25
          ),
          IMC3: res.data.filter(
            (perso) =>
              perso.mass / (perso.height * perso.height) <= 35 &&
              perso.mass / (perso.height * perso.height) > 30
          ),
          IMC4: res.data.filter(
            (perso) =>
              perso.mass / (perso.height * perso.height) <= 40 &&
              perso.mass / (perso.height * perso.height) > 35
          ),
          IMC5: res.data.filter(
            (perso) => perso.mass / (perso.height * perso.height) > 40
          ),
        })
      );
  }

  render() {
    return (
      <div className="imcPage">
        <Nav />
        <h1 className="imcTitle">Toi-même tu connaîtras</h1>
        <div className="imcInput">
          <div className="imcTaille">
            <label className="taille">Taille en cm</label>
            <input
            className="inputTaille"
            type="number"
            name="taille"
            value={this.state.userTaille}
            onChange={this.handleTaille}
            />
          </div>
          <div className="imcTaille">
            <label className="poids">Poids</label>
            <input
            className="inputPoids"
            type="number"
            name="poids"
            value={this.state.userPoids}
            onChange={this.handlePoids}
            />
          </div>
        </div>
          <div className="imcFinal">
            {this.state.IMC? <p className="imcResult">Résultat: tu es</p>:null}
            {this.state.random? <div><img className="imcImg" src={this.state.random.image} alt={this.state.random.name}/><p>{this.state.random.name}</p></div> : null}
            
          </div>
      </div>
    );
  }
}

export default APIimc;
