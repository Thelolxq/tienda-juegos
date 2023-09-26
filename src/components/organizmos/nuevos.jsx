import React, { useState, useEffect, useRef } from 'react'

import styled from 'styled-components'
function Nuevos() {
    const [mostrarMenu, setMostrarMenu]=useState(false);
    const [mostrarMenu1, setMostrarMenu1]=useState(false);
    const [mostrarMenu2, setMostrarMenu2]=useState(false);
    const refVentana = useRef(null);
    const refVentana1 = useRef(null);
    const refVentana2 = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
          if (refVentana.current && !refVentana.current.contains(event.target)) {
            setMostrarMenu(false);
          }
          if (refVentana1.current && !refVentana1.current.contains(event.target)) {
            setMostrarMenu1(false);
          }
          if (refVentana2.current && !refVentana2.current.contains(event.target)) {
            setMostrarMenu2(false);
          }
        }
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
  return (
    <>
    <Aside>
    <h2>LORE DE JUEGOS</h2>
    <div>
    <div className='contenedor'>

    <div className='imagen'  onClick={()=> setMostrarMenu(!mostrarMenu)}>
       <img src="https://th.bing.com/th/id/R.2ed31021e54a7309fcb8608f2e84c056?rik=mdcN4WJMT%2fDiOg&pid=ImgRaw&r=0" alt="" />
    </div>
    <div className={`descripcion ${mostrarMenu ? 'activo': ''}`}
     ref={refVentana}>
        <h3>csgo</h3>
        <p>El universo de Halo se desarrolla en un futuro donde la 
            humanidad lucha contra una alianza alienígena conocida como el Covenant.
             El protagonista, el Jefe Maestro, es un supersoldado que combate 
             para proteger a la humanidad y descubre antiguas tecnologías
              extraterrestres, incluyendo los anillos Halo, que pueden destruir
               toda la vida en la galaxia. La trama se centra en la lucha por el 
            control de estos artefactos y la supervivencia de la humanidad.</p>

    </div>
    </div>
    <div className='contenedor'>

    <div className='imagen'   onClick={()=> setMostrarMenu1(!mostrarMenu1)}>
        <img src="https://th.bing.com/th/id/OIP.kn1AlgKn-uqCGShSwRbwNwHaDj?pid=ImgDet&rs=1" alt="" />
    </div>
    <div className={`descripcion ${mostrarMenu1 ? 'activo': ''}` }
    ref={refVentana1}>
        <h3>minecraft</h3>
        <p>El universo de Halo se desarrolla en un futuro donde la 
            humanidad lucha contra una alianza alienígena conocida como el Covenant.
             El protagonista, el Jefe Maestro, es un supersoldado que combate 
             para proteger a la humanidad y descubre antiguas tecnologías
              extraterrestres, incluyendo los anillos Halo, que pueden destruir
               toda la vida en la galaxia. La trama se centra en la lucha por el 
            control de estos artefactos y la supervivencia de la humanidad.</p>



    </div>
    </div>
    <div className='contenedor'>

    <div className='imagen'  onClick={()=> setMostrarMenu2(!mostrarMenu2)}>
        <img src="https://th.bing.com/th/id/OIP.KVtUDLoX1DgAzxGOGRa34gHaEK?pid=ImgDet&rs=1" alt="" />
    </div>
    <div className={`descripcion ${mostrarMenu2 ? 'activo': ''}`}
    ref={refVentana2}>
        <h3>halo</h3>
        <p>El universo de Halo se desarrolla en un futuro donde la 
            humanidad lucha contra una alianza alienígena conocida como el Covenant.
             El protagonista, el Jefe Maestro, es un supersoldado que combate 
             para proteger a la humanidad y descubre antiguas tecnologías
              extraterrestres, incluyendo los anillos Halo, que pueden destruir
               toda la vida en la galaxia. La trama se centra en la lucha por el 
            control de estos artefactos y la supervivencia de la humanidad.</p>



    </div>
    </div>
   
  
   

    </div>

    </Aside>
    </>
  )
}

export default Nuevos

const Aside =styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-left:30px;
    
    
    h2{
      color: #000000;
      font-family: "titulo";
      font-size: 2em;
      letter-spacing: 2px;
    }
    
    .contenedor{
      
        width: 100%;
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        gap: 10px;
    }
    .descripcion{
        display: none;
        
    }
    .descripcion.activo{
        display: flex;
        color: #080808;
        flex-direction: column;
       padding: 10px;
       background-color: #66a7db;
       position: absolute;
       border-radius: 0 0 50px;
    }
    
    .imagen{

        margin-top:10px;
        overflow: hidden;
       
        
        
       
    }
       
       
    
    
img{
    width: 200px;
    height: 150px;
    transition: all .2s ease-in-out;
    border-radius: 10px;
    &:hover{
      box-shadow: 0 10px 20px rgb(0,0,0,0.2);
      transform: scale(1.2);

    }

}

`;