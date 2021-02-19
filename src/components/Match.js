import React, { useState, useEffect, useImperativeHandle } from "react";
import axios from "axios";

import GlobalCard from "./GlobalCard";

import "./Match.css";
import Nav from "./Nav";

function Match() {
  const [persos, setPersos] = useState([]);
  const [filteredPersos, setFilteredPersos] = useState([]);
  const [filterPerso, setFilterPerso] = useState("");
  const [hair, setHair] = useState("");
  const [species, setSpecies] = useState("");
  const [eye, setEye] = useState("");

  useEffect(() => {
    axios
      .get("https://miadil.github.io/starwars-api/api/all.json")
      .then((res) => setPersos(res.data));
  }, []);

  const filterFunction = (filterArray, dataArray) => {
    if (!filterArray[0]) return dataArray;
    const filteredData = dataArray.filter((data) => {
      let missingFilter = false;
      const allFilterOk = filterArray.filter((filter, index) => {
        if (missingFilter) return false;
        if (data[filter.name] !== filter.value) {
          missingFilter = true;
          return false;
        }
        if (!filterArray[index + 1] && data[filter.name] === filter.value) {
          return true;
        }
      });

      if (allFilterOk[0]) {
        return true;
      } else return false;
    });
    return filteredData;
  };

  useEffect(() => {
    const filterArray = [];
    if (hair) filterArray.push({ name: "hairColor", value: hair });
    if (species) filterArray.push({ name: "species", value: species });
    if (eye) filterArray.push({ name: "eyeColor", value: eye });
    const filteredValue = filterFunction(filterArray, persos);
    setFilteredPersos(filteredValue);
  }, [persos, hair, species, eye]);

  const handleChoice = (e, choice) => {
    if (choice === "hair") {
      setHair(e.target.value);
    } else if (choice === "eye") {
      setEye(e.target.value);
    } else if (choice === "species") {
      setSpecies(e.target.value);
    }
    console.log(filterPerso);
  };
  const empty = document.querySelector(".select")
  return (
    <div>
		<Nav />
      <h1 className="menu-select"> Quels sont tes matchs dans la galaxie ?</h1>

      <select
	  	className="menu-select"
        name="hairColor"
        id="hair-select"
        onChange={(e) => handleChoice(e, "hair")}
      >
        <option value="">Quelle couleur de cheveux te fait craquer ? </option>
        <option value="black">Black</option>
        <option value="black, later with flecks of gray">
          black later with flecks of gray
        </option>
        <option value="auburn">Auburn</option>
        <option value="auburn, later gray">Auburn, Later Gray</option>
        <option value="brown">Brown</option>
        <option value="brown, later gray">Brown, later gray</option>
        <option value="brown-black">Brown-black</option>
        <option value="light brown">Light Brown</option>
        <option value="blond">Blond</option>
        <option value="white">White</option>
        <option value="gold">Gold</option>
        <option value="red, later gray and white">Red, later gray</option>
      </select>

      <select
        className="menu-select"
		name="Eye color"
        id="eye-color"
        onChange={(e) => handleChoice(e, "eye")}
      >
        <option value="">Et pour les yeux quelle est ta préférence ?</option>
        <option value="blue">blue</option>
        <option value="red">red</option>
        <option value="brown">brown</option>
        <option value="hazel">hazel</option>
        <option value="purple">purple</option>
        <option value="orange">orange</option>
        <option value="green-gold">gold-green</option>
        <option value="black">black</option>
        <option value="yellow">yellow</option>
        <option value="pink">pink</option>
        <option value="gold">gold</option>
        <option value="white">white</option>
      </select>

      <select
        className="menu-select"
		name="speciesName"
        id="species"
        onChange={(e) => handleChoice(e, "species")}
      >
        <option value="">Une Espèce préférée ?</option>
        <option value="human">Human</option>
        <option value="droid">Droid</option>
        <option value="wookiee">Wookiee</option>
        <option value="rodian">Rodian</option>
        <option value="yoda's species">yoda's species</option>
        <option value="trandoshan">Trandoshan</option>
        <option value="mon calamari">Mon calamari</option>
        <option value="ewok">Ewok</option>
        <option value="sullustan">Sullustan</option>
        <option value="neimoidian">Red, later gray</option>
        <option value="gungan">Gungan</option>
        <option value="toydarian">Toydarian</option>
        <option value="dug">Dug</option>
        <option value="dathomirian zabrak">dathomirian zabrak</option>
        <option value="twi'lek">Twi'lek</option>
      </select>
      <div className="filter">
        {filteredPersos?.map((perso) => (
          <GlobalCard {...perso} key={perso.id} />
        ))}
		{filteredPersos.length === 0 ? <p>Désolé 0 match tu as.</p> : null}
      </div>
    </div>
  );
}

export default Match;
