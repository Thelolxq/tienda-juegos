import React from 'react'
import styled from 'styled-components'

function modal() {
  return (
    <>
    <Modal>
      <h5>comprado</h5>
    </Modal>

    </>
  )
}

export default modal

const Modal=styled.div`
h5{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 1.3em;
  position: absolute;
bottom:-23px;
padding-left: 20px;
background-color: green;
color: white;
height: 30px;
width: 110px;
border-radius: 3px;

}

`;