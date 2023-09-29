import React from 'react'
import Main from '../organizmos/main'

import styled from 'styled-components'
import Navbar from '../organizmos/navbar'
function paginaPrincipal() {
  return (
    <>
    <Header>
    
    <Navbar/>
    </Header>
    <Main/>

    </>
  )
}

export default paginaPrincipal


const Header=styled.header`
    width:100vw;
    
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    box-shadow: 0 0 10px rgb(31,31,32,.2);
    background-color: #ffffff;
    position: relative;


`;
