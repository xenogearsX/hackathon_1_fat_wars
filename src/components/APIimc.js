import React from 'react'
import axios from 'axios'
import Home from './Home'

import './APIimc.css'

class APIimc extends React.Component {
    state= {
        characters: [],
        userTaille:'',
        userPoids:'',
        IMC: 0,
        category: null
    }
    /*const [charaIMC, setcharaIMC] = useState(
       (this.state.characters.mass / (this.state.characters.height * this.state.characters.height)*10000).toFixed(2))*/
    
    handleIMC = () => {
        this.setState({IMC: (this.state.userPoids / (this.state.userTaille * this.state.userTaille)*10000).toFixed(2)})
        this.setState({category: this.state.IMC < 18.5? 1 
            : this.state.IMC < 25? 2
            : this.state.IMC < 30? 3 
            : this.state.IMC < 35? 4 
            : this.state.IMC < 40? 5 
            : 6
        })
    }
    
    handlePoids = async (e) => {
        await this.setState({userPoids: (e.target.value)})
            this.handleIMC()    
    }
    handleTaille = async (e) => {
       await this.setState({userTaille: (e.target.value)});
            this.handleIMC()
    }
    
    componentDidMount(){
    /*const [charaIMC, setcharaIMC] = useState(
    (this.state.characters.mass / (this.state.characters.height * this.state.characters.height)*10000).toFixed(2))*/
        //const characterCategory = (this.state.characters.mass / (this.state.characters.height * this.state.characters.height)*10000).toFixed(2)
            axios
            .get('https://miadil.github.io/starwars-api/api/all.json')
            .then(res =>this.setState({characters: res.data}))
        //.then(character => this.setState({character.bornLocation: characterCategory}))
    }

    render() {
                
        return (    
            
            <div className = "IMC">
                <label>Taille en cm</label>
                <input type="number" name="taille" value={this.state.userTaille} onChange={this.handleTaille}/>
                <label>Poids</label>
                <input type="number" name="poids" value={this.state.userPoids} onChange={this.handlePoids}/>
                <p>IMC : {this.state.IMC}</p>
                    <div className="characterIcon">
                      
                    </div>
                    
            </div>
        )       
   }
}

export default APIimc