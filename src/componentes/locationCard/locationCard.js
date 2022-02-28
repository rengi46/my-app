import "./locationCard.scss"
import {  Link } from "react-router-dom";

export const LocationCard=({name,dimension,type,id})=>{
    return(
        <Link to={`/location/${id}`} className="navbar-brand">
        <div className="location">
            <h3>{name}</h3>
            <p>{dimension}|{type}</p>
        </div>
        </Link>
    )
}