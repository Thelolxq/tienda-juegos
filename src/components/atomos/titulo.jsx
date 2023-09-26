import React from 'react'
import styled from 'styled-components'

function titulo() {
  return (
    <>
    <Titulo>
    <h1>LolGames<span>Q</span></h1>
    </Titulo>
    </>
  )
}

export default titulo

const Titulo =styled.h1`
font-size: 1.1em;
color: #030303;
font-family: 'titulo';
letter-spacing: 2px;
span{
    
    color: #ee5e5e;
    
}

`;