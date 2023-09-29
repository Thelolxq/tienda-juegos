import React,{useState} from 'react'

import Label from '../atomos/label'
import styled from 'styled-components'
import Carrito from '../atomos/carrito'
import Cards from './cards'
function Buscador() {
  return (
    <>
    <Navbar>
    <Label/>
    </Navbar>
   </>
  )
}

export default Buscador

const Navbar=styled.div`
   
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
   
    
    
    
    
   
    

`;