import React,{useState,useEffect} from 'react'
import { Header } from './Header'
import Characters  from './Characters';
import House  from './House';
import './Main.css'
import background from '../img/background.jpeg'
import griffindor from '../img/griffindor.png'

import slytherint from '../img/slytherin.png' 
import ravenclawt from '../img/ravenclaw.png' 
import hufflepufft from '../img/hufflepuff.png' 
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
function Main() {
    const url='http://hp-api.herokuapp.com/api/characters';
    const [characters,setCharacters] = useState()
    const consultarApi=async()=>{
        const api=await fetch(url);
        const responseJSON = await api.json()
        setCharacters(responseJSON)
       
    }


    const houses='http://hp-api.herokuapp.com/api/characters/house/gryffindor';
    const [chouses,setchouses] = useState()
    const chaHouses=async()=>{
        const api=await fetch(houses);
        const responseJSON = await api.json()
        setchouses(responseJSON)
       
    }

    const urlslytherin='http://hp-api.herokuapp.com/api/characters/house/slytherin';
    const [slytherin,setslytherin] = useState()
    const slytherinList=async()=>{
        const api=await fetch(urlslytherin);
        const responseJSON = await api.json()
        setslytherin(responseJSON)
       
    }

    

    const urlravenclaw='http://hp-api.herokuapp.com/api/characters/house/ravenclaw';
    const [ravenclaw,setravenclaw] = useState()
    const ravenclawList=async()=>{
        const api=await fetch(urlravenclaw);
        const responseJSON = await api.json()
        setravenclaw(responseJSON)
       
    }

    const urlhufflepuff='http://hp-api.herokuapp.com/api/characters/house/hufflepuff';
    const [hufflepuff,sethufflepuff] = useState()
    const hufflepuffList=async()=>{
        const api=await fetch(urlhufflepuff);
        const responseJSON = await api.json()
        sethufflepuff(responseJSON)
       
    }
    console.log(characters)
   
    useEffect(() => {
        consultarApi()
        chaHouses()
        slytherinList()
        ravenclawList()
        hufflepuffList()
    }, [])
    return (
        <div className="app-container">
        <Header/>
        <BrowserRouter>
    <Route path="/" exact>
    <div className="body-container">
    <Link className="button" to={"/griffindor"}>
    <House name="griffindor"
               image={griffindor}/>
           
    </Link>
    <Link className="button" to={"/hufflepuff"}>
       
    <House name="hufflepuff"
               image={hufflepufft}/>
            
    </Link>
    <Link className="button" to={"/slytherin"}>
    <House name="slytherin"
             image={slytherint}/>
    </Link>
    <Link className="button" to={"/ravenclaw"}>

    <House name="ravenclaw"
          image={ravenclawt}/>
    </Link>
    </div>
    </Route>
    
       <Switch>
     <Route path="/griffindor">
    
  <div className="table">
  
  {chouses?.map(item=>(
                 <Characters image={item?.image}
                 name={item?.name}
                 house={item?.house}
                patronus={item?.patronus}
                ancestry={item?.ancestry}/>
                 ))}

    </div>
  
    </Route>

    <Route path="/slytherin">
    
  <div className="table">
  
  {slytherin?.map(item=>(
                 <Characters image={item?.image}
                 name={item?.name}
                 house={item?.house}
                patronus={item?.patronus}
                ancestry={item?.ancestry}/>
                 ))}

    </div>
  
    </Route>

    <Route path="/hufflepuff">
    
  <div className="table">
  
  {hufflepuff?.map(item=>(
                 <Characters image={item?.image}
                 name={item?.name}
                 house={item?.house}
                patronus={item?.patronus}
                ancestry={item?.ancestry}/>
                 ))}

    </div>
  
    </Route>

    <Route path="/ravenclaw">
    
    <div className="table">
    
    {ravenclaw?.map(item=>(
                   <Characters image={item?.image}
                   name={item?.name}
                   house={item?.house}
                  patronus={item?.patronus}
                  ancestry={item?.ancestry}/>
                   ))}
  
      </div>
    
      </Route>
       </Switch>
       
       </BrowserRouter>
        </div>
    )
}
export default Main;



 