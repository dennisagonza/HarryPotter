import React,{useState,useEffect} from 'react'
import { Header } from './Header'
import { Characters } from './Characters';


export const Main = () => {
    const url='http://hp-api.herokuapp.com/api/characters';
    const [characters,setCharacters] = useState()
    const consultarApi=async()=>{
        const api=await fetch(url);
        const responseJSON = await api.json()
        setCharacters(responseJSON)
    }
    useEffect(() => {
        consultarApi()
    }, [])
    return (
        <div className="app">
            <Header/>
            <div className="container mt-5">
                <Characters characters={characters}/>
            </div>
        </div>
    )
}
