import React, { useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import  {data} from '../data'
import JuegoDetalles from '../organizmos/juegoDetalles';


function Label() {
  const [query, setQuery]= useState('')
  const [resultados, setResultado]=useState(data)
  

  const handleInput =(e)=>{
    const nuevaQuery =e.target.value;
    setQuery(nuevaQuery)

    const resultadosFiltrados =data.filter((data)=> data.game.toLowerCase().includes(nuevaQuery.toLowerCase())
    
    );
    setResultado(resultadosFiltrados);
  }
  const mostrarResultados = query !== '' && resultados.length > 0;
  return (
    <>
        
      <Buscador>
        <label htmlFor='miInput'>
          <input
            type='text'
            id='miInput'
            placeholder='buscar juegos'
            value={query}
            onChange={handleInput}
          />
        </label>
        {mostrarResultados && (
          <div className='resultados'>
            <ul>
              {resultados.map((resultado) => (
                <li key={resultado.id} className='resultado'>
                  {resultado.game}
                  <Link className='link' to={`/juego/${resultado.id}`}>Ver detalles</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Buscador>
          <JuegoDetalles data={data} />

    </>
  )
}

export default Label



const Buscador=styled.label`
.link{
  
  text-decoration: none;
  color: #65addd;
  margin-left: 40px;
  font-size: 1.2em;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}
.resultados{
  background-color: #312e2e;
  width: 300px;
  height: 150px;
  position: absolute;
  z-index: 3;
  & li{
    color: white;
    font-family: 'lista';
    list-style: none;
    
    
  }
}
    
input{
   
    
    background-color: #1a1818;
    height:25px;
    width: 150px;
    border-radius: 3px;
    padding-left: 5px;
    border: none;
  color: white;
    &::placeholder{
        color: #ffffff;
        opacity: .9;
    }

}
`;