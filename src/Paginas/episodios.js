import { useContext, useEffect, useState } from "react"
import EpisodeCard from "../componentes/EpisodeCard/EpisodeCard";
import { useParams } from "react-router-dom";
import {context} from "../hooks/Context";
import CharacterCard from "../componentes/characterCard/CharacterCard";

export const Episodes=()=>{
    const [logid,setlogid]=useState(false)
    const {info,episode,getEpisodes}=useContext(context)
    const api1 = `https://rickandmortyapi.com/api/episode`
    useEffect(async ()=>{
        await getEpisodes([api1],()=>{setlogid(true)})
    },[api1])

    return(
        <>
        <div className="listEpisodes">
        {logid && episode.map((e)=>{
         return <EpisodeCard
             id={e.id}
             name={e.name}
             airDate={e.airDate}
             episode={e.episode}
         />
        })}
        </div>
        </>
    )
}

export const Episode=()=>{
    const [logid,setlogid]=useState(false)
    const [logid2,setlogid2]=useState(false)
    const {id} = useParams()
    const {info,episode,character,getEpisodes,getcharacters}=useContext(context)
    const api1 = `https://rickandmortyapi.com/api/episode/${id}`
    useEffect(async ()=>{
        await getEpisodes([api1],()=>{
            console.log(episode);
            setlogid(true)})
    },[api1])
    useEffect(()=>{
        if(logid===true){
            console.log(episode.characters);
            getcharacters(episode.characters,()=>{setlogid2(true)})
        }
    },[logid])
    return(
        <>
        <div className="world">
        {logid && <EpisodeCard
             id={episode.id}
             name={episode.name}
             airDate={episode.airDate}
             episode={episode.episode}
         />}
        </div>
        <div className="residents">
        {logid2 && character.map(x=> <CharacterCard 
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
