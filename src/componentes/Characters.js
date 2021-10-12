import React from 'react'
import './Characters.css'
import griffindor from '../img/griffindor-color.png' 
import slytherin from '../img/slytherin-color.png' 
import ravenclaw from '../img/ravenclaw-color.png' 
import hufflepuff from '../img/hufflepuff-color.png' 
    function Characters  ({name,image,patronus,house,ancestry}) {
 
        if(image==="" && house==="Gryffindor"){
           image=griffindor
           return( <div className="cont" >
                            
           <img className="no-image"src={image} alt="fff"/>
           <div className={house+"-info"} >
           <h5 className="card-title">{name}</h5>
         
           <p>Casa: {house}</p>
           <p>Patronus: {patronus}</p>
           <p>Ancestry: {ancestry}</p>
           </div>
       </div>)
        }

        if(image==="" && house==="Slytherin"){
            image=slytherin
            return(<div className="cont" >               
            <img className="no-image"src={image} alt="fff"/>
            <div className={house+"-info"}  >
            <h5 className="card-title">{name}</h5>
          
            <p>Casa: {house}</p>
            <p>Patronus: {patronus}</p>
            <p>Ancestry: {ancestry}</p>
            </div>
        </div>)
         }


        if(image==="" && house==="Ravenclaw"){
            image=ravenclaw
            return( <div className="cont" >               
            <img className="no-image"src={image} alt="fff"/>
            <div className={house+"-info"}  >
            <h5 className="card-title">{name}</h5>
          
            <p>Casa: {house}</p>
            <p>Patronus: {patronus}</p>
            <p>Ancestry: {ancestry}</p>
            </div>
        </div>)
         }

         if(image==="" && house==="Hufflepuff"){
            image=hufflepuff
            return( <div className="cont" >              
            <img className="no-image"src={image} alt="fff"/>
            <div className={house+"-info"}  >
            <h5 className="card-title">{name}</h5>
          
            <p>Casa: {house}</p>
            <p>Patronus: {patronus}</p>
            <p>Ancestry: {ancestry}</p>
            </div>
        </div>)
         }
    return (
  
      
               
        <div className="cont" >
                            
                                <img className="image"src={image} alt="gggg"/>
                                <div className={house+"-info"}>
                                <h5 className="card-title">{name}</h5>
                              
                                <p>Casa: {house}</p>
                                <p>Patronus: {patronus}</p>
                                <p>Ancestry: {ancestry}</p>
                                </div>
                            </div>
                        
                      
                
    )
}

export default Characters;
