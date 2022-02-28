import { useContext, useEffect, useState } from "react"
import { LocationCard } from "../componentes/locationCard/locationCard";
// import { useParams } from "react-router-dom";
import {context} from "../hooks/Context";
import { useParams } from "react-router-dom";
import CharacterCard from "../componentes/characterCard/CharacterCard";



export const Mundos=()=>{
    const [logid,setlogid]=useState(false)
    const {info,world,getLocation}=useContext(context)
    const api = `https://rickandmortyapi.com/api/location`
    useEffect(()=>{
        getLocation([api],()=>{setlogid(true)})
    },[api])

    return(
        <div className="worlds">
            {logid? world.map(x=>{
                return <LocationCard
                id={x.id}
                name={x.name}
                dimension={x.dimension}
                type={x.type} />
            }):"login..."}
        </div>
    )
}

export const Mundo=()=>{
    const [logid,setlogid]=useState(false)
    const [logid1,setlogid1]=useState(false)
    const {id} = useParams()
    const {info,world,character,getLocation,getcharacters}=useContext(context)
    const api1 = `https://rickandmortyapi.com/api/location/${id}`
    useEffect(async ()=>{
        await getLocation([api1],()=>{setlogid(true)})
        
    },[api1])
    useEffect(()=>{
        if(logid===true){
            console.log(world);
            getcharacters(world.residents,()=>{setlogid1(true)})
        }
    },[logid])
    console.log(character);
    return(
        <>
        <div className="world">
       { logid && <LocationCard 
         id={world.id}
         name={world.name}
         dimension={world.dimension}
         type={world.name}
         />}
        </div>
        <div className="residents">
        {logid1 && character.map(x=> <CharacterCard 
                    id={x.id}
                    name={x.name}
                    image={x.image}
                    species={x.species}
                    status={x.status}
                    origin={x.origin}
                    location={x.location}
        />)}
        </div>
        </>
    )
}