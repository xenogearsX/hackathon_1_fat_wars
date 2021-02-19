import React from 'react'
import {Link} from 'react-router-dom'
import './GlobalCard.css'

 const GlobalCard = ({name, image, height, homeworld, species, id }) => {
        return (
            <Link to={`/characters/${id}`}>
            <div className='globalCard'>
                <img src={image} alt={name}/>
                <div className='name'>{name}</div>
                <div className='name'>{height}</div>
                <div className='name'>{homeworld}</div>
<<<<<<< HEAD
                <div className='name'>{species}</div> 
=======
                <div className='name'>{species}</div>
                
>>>>>>> globalcard
            </div>
            </Link>
        )
}
export default GlobalCard