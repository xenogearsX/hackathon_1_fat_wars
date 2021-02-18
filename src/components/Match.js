import React, {useState, useEffect, useImperativeHandle} from 'react';
import './Match.css'
import axios from 'axios'
import Selection from './Selection'

function Match() {
    const [persos, setPersos] = useState([])
    const [hair, setHair] = useState('')
    const [species, setSpecies] = useState('')
    const [eye, setEye] = useState('')
    
    useEffect(() => {
        axios.get('https://miadil.github.io/starwars-api/api/all.json')
            .then((res) => setPersos(res.data))
    }, []);
    
    // const tmp = 
    
    return (
        <div>
            <h1> Quels sont tes matchs dans la galaxie ?</h1>
       
           <select name="hairColor" id="hair-select" onChange={(e) => setHair(e.target.value)}>
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

    <select name="Eye color" id="eye-color" onChange={(e) => setEye(e.target.value)}>
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

    <select name="speciesName" id="species" onChange={(e) => setSpecies(e.target.value)}>
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
    <p>Hair Color</p>

    <p>Eye color</p>    
    {/* {persos.filter(((perso)=>perso.eyeColor === eye) || ((perso)=>perso.hairColor === hair)).map((perso) => <div key={perso.id}>{perso.name}</div>)} */}
    <p>Species</p>
    {
       persos.filter(perso =>).map(item => item.name)
    }
    
    <div> 
    
    </div>
       </div> 
    )
}

export default Match;