import React from 'react'
import Buscador from '../moleculas/buscador'
import Titulo from '../atomos/titulo'
import Hamburguesa from '../atomos/hamburguesa'
import Carrito from '../atomos/carrito'
import styled from 'styled-components'
function navbar() {
  return (
    <>
    <Navbar>
        <Carrito/>
    <Hamburguesa/>
    <Buscador/>
    </Navbar>
    <Titulo/>
    </>
  )
}

export default navbar

const Navbar=styled.div`
   
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
   
    
    
    
    
   
    

`;