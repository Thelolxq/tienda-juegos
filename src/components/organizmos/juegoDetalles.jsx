import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { data } from '../data';
import styled from 'styled-components';


function JuegoDetalles() {
    
  const { id } = useParams();
  const juego = data.find((game) => game.id === parseInt(id));
if (!juego) {
  return <div>.</div>;
}

  return (
      <>
      <Datos>
    <div>
      <h2>{juego.game}</h2>
      <img src={juego.img} alt={juego.game} />
      <p>Precio: ${juego.price}</p>
      <p>Cantidad: {juego.quantity}</p>
    </div>

        <button>
        <Link  className='link' to={`/`}>volver</Link>
        </button>
    </Datos>
      </>
      
  );
}

export default JuegoDetalles;

const Datos =styled.div`
width:100vw;
height: 100vh;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

button{
    width: 100px;
    height: 30px;
    background-color: #69b9df;
    border: none;
    box-shadow: 0 10px 20px rgb(0,0,0,0.2);
    margin-top: 10px;
    transition: all .2s ease-in-out;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    display: flex;
    &:hover{
        transform: scale(1.05);
        
    }
    
    & .link{
        
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        font-family: "lista1";
        font-size: 1.2em;
        color: #ffffff;
        
    }
}
div{
    background-color:rgb(245, 242, 242);
    box-shadow: 0 10px 20px rgb(0,0,0,0.2);
    border-radius: 10px;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height:500px;
    flex-wrap: wrap;
}
img{
    width: 300px;
    height: 300px;
}
h2{
    font-size: 2em;
    font-family: 'lista';
}
p{
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
}

`;