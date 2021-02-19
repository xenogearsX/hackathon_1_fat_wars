import React from 'react'
import {Link} from 'react-router-dom'
import './GlobalCard.css'

 const GlobalCard = ({name, image, height, homeworld, species, gender, id }) => {
        return (
            <Link to={`/match/${id}`}>
            <div className='globalCard'>
                <img src={image} alt={name}/>
                <div className='name'>{name}</div>
             
            </div>
            </Link>
        )
}
export default GlobalCard