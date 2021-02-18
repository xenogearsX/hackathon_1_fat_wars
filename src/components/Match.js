import React, {useState, useEffect, useImperativeHandle} from 'react';
import axios from 'axios'

import Selection from './Selection'

import './Match.css'

function Match() {
    const [persos, setPersos] = useState([])
    const [filterPerso, setFilterPerso] = useState('')
    const [hair, setHair] = useState('')
    const [species, setSpecies] = useState('')
    const [eye, setEye] = useState('')
    
    useEffect(() => {
        axios.get('https://miadil.github.io/starwars-api/api/all.json')
            .then((res) => setPersos(res.data))
    }, []);

    useEffect(() => {
        setFilterPerso(persos.filter(perso => perso.hairColor === hair))
        console.log(filterPerso.filter(perso => perso.hairColor === hair))
    }, [hair, species, eye]);

    const handleChoice = (e, choice) => {
        if (choice === 'hair'){
            setHair(e.target.value) 
        } else if (choice === 'eye'){
            setEye(e.target.value)
        } else if (choice === 'species'){
            setSpecies(e.target.value)
        } 
        console.log(filterPerso)

        // if( hair !== '' && eye !== '' && species !== '') {

        // }
    }
    return (
        <div>
            <h1> Quels sont tes matchs dans la galaxie ?</h1>
       
           <select name="hairColor" id="hair-select" onChange={(e) =>  handleChoice(e, 'hair') }>
        <option value="">--Please choose an option--</option>
        <option value="black">Black</option>
        <option value="black  later with flecks of gray">black  later with flecks of gray</option>
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

    <select name="Eye color" id="eye-color" onChange={(e) => handleChoice(e, 'eye')}>
        <option value="">--Please choose an option--</option>
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

    <select name="speciesName" id="species" onChange={(e) => handleChoice(e, 'species')}>
        <option value="">--Please choose an option--</option>
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
{/*       
    const [hair, setHair] = useState('')
    const [species, setSpecies] = useState('')
    const [eye, setEye] = useState('') */}
        {/* {
            hair ? persos.filter(perso => perso.hairColor === hair).map(perso =>  <div>{perso.name}</div>) : 'select the hair' 
        } */}
    {/* {persos.filter(perso => perso.hairColor === hair).filter(perso => perso.eyeColor === eye)
    .map(perso => <div key={perso.id}>{perso.name}</div>)} */}

    {/* {hair !== ' ' ? persos.filter(perso => perso.hairColor === hair)
    .map(perso => <div key={perso.id}>{perso.name}</div>) 
    : hair == false ? persos.map(perso => (<div  key={perso.id}>{perso.name}</div>)): 'ok' } */}
   
       </div> 
    )
}

export default Match;