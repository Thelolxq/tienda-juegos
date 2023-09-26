import React from 'react'
import styled from 'styled-components'
function button({titulo,url}) {
 
  return (
    <>
    
   <Boton >
    <div>
    <a href={url}>{titulo}</a>
    </div>
   </Boton>
    
    </>
  )
}

export default button

const Boton =styled.button`

height: 30px;
width:125px;
background-color: #7091c7;
border: none;
border-radius: 3px;
transition: all .2s ease;

&:hover{
  transform: scale(1.05);
}
a{
  
    
  
    color: white;
    text-decoration: none;
    font-weight:bolder;
    letter-spacing: .5px;
    font-size: 1.3em;
    font-family:Verdana, Geneva, Tahoma, sans-serif;

}



`;
































