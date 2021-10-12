import React from 'react'

export const Characters = ({characters = []}) => {
    
    return (
        <div className="row">
            {characters.map((item,index)=>(
                    <div key={index} className="col mb-4">
                        <div className="card" >
                            <div className="card-body" >
                                <img src={item.image} style={{height:"auto", width: "auto", maxWidth: "300px", maxHeight: "300px"}} alt=""/>
                                <h5 className="card-title">{item.name}</h5>
                                <hr />
                                <p>Casa: {item.house}</p>
                                <p>Patronus: {item.patronus}</p>
                            </div>
                        </div>
                    </div>
            ))}
        </div>
    )
}
