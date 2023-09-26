import React from 'react'
import Main from '../organizmos/main'
import Nuevos from '../organizmos/nuevos'
import styled from 'styled-components'

function paginaPrincipal() {
  return (
    <>

    
    <Main/>
    <Div>
    <Nuevos/>
    </Div>
    </>
  )
}

export default paginaPrincipal

const Div =styled.div`
position: absolute;
right: 0;
top: 120px;
width: 25%;
height: 70%;
background-color: #ffffff;
display: flex;
justify-content: center;
border-radius: 10px;
box-shadow: 0 10px 20px rgb(0,0,0,0.05);


`;

