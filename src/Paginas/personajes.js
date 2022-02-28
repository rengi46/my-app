import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import {context} from "../hooks/Context";
import Contextpage from '../hooks/Context';
import CharacterCard from "../componentes/characterCard/CharacterCard";
import EpisodeCard from "../componentes/EpisodeCard/EpisodeCard";


export const Personajes=()=>{
    const [logid,setlogid]=useState(false)
    const [numPage,setPage]= useState(1)
    const{character,info,getcharacters} = useContext(context)
    const api=`https://rickandmortyapi.com/api/character?page=${numPage}`
    useEffect(()=>{
        getcharacters([api],()=>{setlogid(true)})
    },[api])
    return(
        <>
        <div className="contenedorPersonajes">
            {logid && character.map(x=>{
                return <CharacterCard 
                    id={x.id}
                    name={x.name}
                    image={x.image}
                    species={x.species}
                    status={x.status}
                    origin={x.origin}
                    location={x.location}
                />
            })}
        </div>
        <div className="Paginator">
            <button onClick={()=> setPage(x=> x>1? x-1:x)}>previus</button>
            <button onClick={()=> setPage(x=> x===info.page? x:x+1)}>next</button>
        </div>
            </>
    )
}

export const Persona=()=>{
    const [logid,setlogid]=useState(false)
    const [logid1,setlogid1]=useState(false)
    const {id} = useParams()
    const{character,info,getcharacters,getEpisodes,episode} = useContext(context)
    const api1=`https://rickandmortyapi.com/api/character/${id}`
    useEffect(()=>{
        getcharacters([api1],()=>{setlogid(true)})
    },[api1])

    useEffect(()=>{
        if(logid){
            getEpisodes(character.episode,()=>{setlogid1(true)})
        }
    },[logid])
    console.log(episode)
    return(
        <>
        <div className="contenedorPersonaje">
          {logid &&  
          <CharacterCard 
            id={character.id}
            name={character.name}
            image={character.image}
            species={character.species}
            status={character.status}
            origin={character.origin}
            location={character.location}
            />  }
        </div>
        <div  className="contenedorPersonajes" >
            {logid1 && 
            episode.map((e)=>{
            return <EpisodeCard
            id={e.id}
            name={e.name}
            airDate={e.airDate}
            episode={e.episode}
            />
            })
            }
        </div>
            </>
    )
}
