import React , { useState, useEffect }  from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import {Layout} from "./componentes/layout/layout.js"
import Contextpage from './hooks/Context';
import { Episodes ,Episode} from './Paginas/episodios';
import { Mundos,Mundo } from './Paginas/mundos';
import { Persona, Personajes } from './Paginas/personajes';


function App() {
  return (
    <Router>
    <Layout>
      <Contextpage>
      <Routes>
        <Route path="/character/:id" element={<Persona/>}/>
        <Route path="/" element={<Personajes/>}/>
        <Route path="/episodes/:id" element={<Episode />}/>
        <Route path="/episodes" element={<Episodes />}/>
        <Route path="/location/:id" element={<Mundo />}/>
        <Route path="/location" element={<Mundos />}/>
      </Routes>
        </Contextpage>
    </Layout>
  </Router>
  );
}

export default App;
