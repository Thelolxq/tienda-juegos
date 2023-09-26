import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

function Lista() {
  const [mostrarMenu, setMostrarMenu]=useState(false);
  const refVentana=useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (refVentana.current && !refVentana.current.contains(event.target)) {
        setMostrarMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);


   
  return (
    <>
    <Listas>
      <div className='navbar'>
    

      
      <div className={`menu ${mostrarMenu ? 'activo':''}`} ref={refVentana}>

        <ul>
           
            <a href="#titulo2"><li>comming soon</li></a>
        </ul>
      </div>
      <div className={`hamburguesa ${mostrarMenu ? 'activo':''}`}
      onClick={()=> setMostrarMenu(!mostrarMenu)} >
      &#9776;
      </div>
    </div>
    </Listas>
    

    </>
  )
}

export default Lista

const Listas =styled.div`

.navbar {
  display: flex;
  align-items:center;
  height: 100px;
  z-index: 100;
  color: #000000;
  padding: 5px 5px;
  position: absolute;
  left: -10px;
  top: 0;
  
  
}
.menu {
  visibility: hidden;
  transition: all .2s;
  width: 0;
  position: absolute;
  left: -400px;
}
.menu.activo{
  position: fixed;
  top: 0;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  visibility: visible;
  justify-content: center;
  align-items: center;
  width: 100vw;
  border-radius: 0 0 100%;
  left: 0;
  box-shadow: 0 10px 20px rgb(0,0,0,.2);
}
.menu ul {
  list-style: none;
  justify-content: center;
  flex-wrap:wrap;
}

.menu li {
 width:fit-content;
  
  margin-top: 100px;
  color: #181717;
  font-family: "lista";
  font-size: 1.1em;
  cursor: pointer;
  
  
}
.menu li:hover{
  border-bottom: 2px solid #64a5ca;
  
}

.hamburguesa {
  font-size: 24px;
  cursor: pointer;
  margin-left: 20px;
 
}

.hamburguesa.activo {
  display: none;
  position: fixed;
  
}

`;