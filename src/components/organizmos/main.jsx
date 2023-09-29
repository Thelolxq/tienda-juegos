import React, { useState } from 'react'
import Cards from '../moleculas/cards'
import styled from 'styled-components'

function Main() {

  return (
    <>   
    <Cartas>
    <Cards/>
    </Cartas>
    </>
  )
}

export default Main




const Cartas =styled.div`
width: 100%;
height: 100%;
position: relative;
top: 10px;
left: 40px;
background-color: #ffffff;

`;
