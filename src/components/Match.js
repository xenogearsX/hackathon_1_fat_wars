import React, { useState, useEffect, useImperativeHandle } from "react"
import axios from "axios"


import Selection from "./Selection"

import "./Match.css"

function Match() {
	const [persos, setPersos] = useState([])
	const [filteredPersos, setFilteredPersos] = useState([])
	const [filterPerso, setFilterPerso] = useState("")
	const [hair, setHair] = useState("")
	const [species, setSpecies] = useState("")
	const [eye, setEye] = useState("")

	useEffect(() => {
		axios
			.get("https://miadil.github.io/starwars-api/api/all.json")
			.then((res) => setPersos(res.data))
	}, [])

	const filterFunction = (filterArray, dataArray) => {
		if (!filterArray[0]) return dataArray
		const filteredData = dataArray.filter((data) => {
			let missingFilter = false
			const allFilterOk = filterArray.filter((filter, index) => {
				if (missingFilter) return false
				if (data[filter.name] !== filter.value) {
					missingFilter = true
					return false
				}
				if (!filterArray[index + 1] && data[filter.name] === filter.value) {
					return true
				}
			})

			if (allFilterOk[0]) {
				return true
			} else return false
		})
		return filteredData
	}

	useEffect(() => {
		const filterArray = []
		if (hair) filterArray.push({ name: "hairColor", value: hair })
		if (species) filterArray.push({ name: "species", value: species })
		if (eye) filterArray.push({ name: "eyeColor", value: eye })
		const filteredValue = filterFunction(filterArray, persos)
		setFilteredPersos(filteredValue)
	}, [persos, hair, species, eye])

	const handleChoice = (e, choice) => {
		if (choice === "hair") {
			setHair(e.target.value)
		} else if (choice === "eye") {
			setEye(e.target.value)
		} else if (choice === "species") {
			setSpecies(e.target.value)
		}
		console.log(filterPerso)
	}
	return (
		<div className="div-match">
			<h1> Quels sont tes matchs dans la galaxie ?</h1>
		

			<select
				className="menu-select"
				name="hairColor"
				id="hair-select"
				onChange={(e) => handleChoice(e, "hair")}
			>
				<option value="">Quelle couleur de cheveux te fait craquer ? </option>
				<option value="black">Black</option>
				<option value="black  later with flecks of gray">
					black later with flecks of gray
				</option>
				<option value="auburn">Auburn</option>
				<option value="auburn later gray">Auburn, Later Gray</option>
				<option value="brown">Brown</option>
				<option value="brown later gray">Brown, later gray</option>
				<option value="brown-black">Brown-black</option>
				<option value="light brown">Light Brown</option>
				<option value="blond">Blond</option>
				<option value="white">White</option>
				<option value="gold">Gold</option>
				<option value="red later gray">Red, later gray</option>
			</select>

			<select
				className="menu-select"
				name="Eye color"
				id="eye-color"
				onChange={(e) => handleChoice(e, "eye")}
			>
				<option value="">Quelle est la couleur d'yeux qui te fait fondre ?</option>
				<option value="blue">blue</option>
				<option value="red">red</option>
				<option value="brown">brown</option>
				<option value="hazel">hazel</option>
				<option value="purple">purple</option>
				<option value="orange">orange</option>
				<option value="green">green</option>
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
				<option value="">Une préférence d'espèce ? </option>
				<option value="human">Human</option>
				<option value="droid">Droid</option>
				<option value="wookiee">Wookiee</option>
				<option value="rodian">Rodian</option>
				<option value="yoda">yoda's species</option>
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

			{filteredPersos?.map((perso) => (
				<p>{perso?.name}</p>
			))}
		</div>
	)
}

export default Match
