import React from "react";
import {  Link } from "react-router-dom";
import "./card.scss";


function CharacterCard({ id, name, image, species, status, origin, location }) {
  return (
    <Link to={`/character/${id}`} className="navbar-brand">
  <div className="Passaporte  ">
   <div className="cabPass">
    <h2>{location.name}</h2>
    <p>Pasaport</p>
    </div>
    <div className="infoPass">
      <img src={image} />
      <div className="Info1">
            <h3>Nombre</h3>
            <p>{name}</p>
            <h3>Nacionalidad</h3>
            <p>{location.name}</p>
            <h3>Nacido en</h3>
            <p>{origin.name}</p>
        </div>
        <div className="Info2">
            <h3>Genero</h3>
            <p>Male</p>
            <h3>Especie</h3>
            <p>{species}</p>
            <h3>Nacido</h3>
            <p>2017-11-04</p>
        </div>
    </div>
        <div className="footPass">
    {id}&lt;   &lt;   &lt;   &lt;   &lt; {name}	&lt;   &lt;   &lt;   &lt;   &lt;   &lt;   &lt;   &lt;    &lt;   &lt;   &lt;   &lt;   &lt;   &lt;   &lt;   &lt;    &lt;&lt;   &lt;   &lt;   &lt;   &lt;    &lt;   &lt;   &lt;   &lt;   &lt;   &lt;   &lt;   &lt;   &lt;   900506134  &lt;   &lt;   &lt;    &lt;   &lt;   &lt;   &lt;   &lt;
    </div> 
  </div>
  </Link>
  );
}

export default CharacterCard;
