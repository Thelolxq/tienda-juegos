import React, { useState } from 'react'
import Cards from '../moleculas/cards'
import styled from 'styled-components'
import Carrito from '../atomos/carrito';
import Titulo from '../atomos/titulo'
import Lista from '../atomos/lista'
import Buscador from '../moleculas/buscador'
function Main() {

  return (
    <>
      <Header>
      <Lista/>
    <Titulo/>   
    <Buscador/>
    </Header>

    </>
  )
}

export default Main




const Header=styled.header`
    width:100vw;
    
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    box-shadow: 0 0 10px rgb(31,31,32,.2);
    background-color: #ffffff;
    position: relative;


`;
