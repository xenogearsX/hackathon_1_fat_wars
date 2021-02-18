import React, {useState, useEffect} from 'react';
import './Match.css'
import axios from 'axios'

function Match() {
    const [persos, setPersos] = useState([])
    const [gros, setGros] = useState(false)
    useEffect(() => {
        axios.get('https://miadil.github.io/starwars-api/api/all.json')
            .then((res) => console.log(res) || setPersos(res.data))
    }, []);

    // handleClickGros() {
    //     setGros((prevGros) => {!prevGros})};
   // console.log({ gros })
    console.log(persos)
    // <p> {gros ? persos.filter(perso => perso.mass >= 110).map(perso => <GlobalCard {...perso}/>) : perso.map(perso => <GlobalCard {...perso}/>)} </p>
    return (

        <div>

            <h1> Quels sont tes matchs dans la galaxie ?</h1>
            <span>
                <input type="checkbox" id="crit1" onClick={() => setGros((prevGros) => !prevGros)}></input> Gros</span>
            <p> {gros ? persos.filter((perso) => perso.mass >= 110).map((perso) => <div key={perso.id}>{perso.name}</div>) : persos.map((perso) => <div key={perso.id}>{perso.mass}</div>)} </p>
            <span>     <input type="checkbox" id="crit2"></input> Grand </span><br></br>
            <span>      <input type="checkbox" id="crit3"></input> Fort </span>
            <span>      <input type="checkbox" id="crit4"></input> Méchant </span>

        </div>
    )
}

export default Match;