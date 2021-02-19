import axios from "axios"
import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./CharacterDetails.css"

class CharacterDetails extends Component {
	state = {
		persos: [],
	}
	componentDidMount() {
		axios
			.get(
				`https://miadil.github.io/starwars-api/api/id/${this.props.match.params.id}.json`
			)
			.then((res) => this.setState({ persos: res.data }))
	}
	render() {
		console.log("details :", this.props.match.params)
		const { persos } = this.state
		return (
			<div className="details">
				<p>{persos.name}</p>
				<img src={persos.image} alt={persos.name} />
				<p>Homeworld: {persos.homeworld}</p>
				<p>species: {persos.species}</p>
				<p>Gender: {persos.gender}</p>
				{persos.hairColor? <p>HairColor: {persos.hairColor}</p>:null}
				<p>EyeColor: {persos.eyeColor}</p>
				{persos.bornLocation? <p>Born Location: {persos.bornLocation}</p>:null}
				<Link to="/match" className="button"> Return persos</Link>
			</div>
		)
	}
}

export default CharacterDetails; 
