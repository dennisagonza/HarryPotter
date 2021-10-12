import React from 'react'
import './House.css'
function House({name,image}) {
 return(
     <div className={name}>
         <img className="logo-house"src={image} alt="" ></img>
         <h2>{name}</h2>
     </div>
 )
}

export default House;