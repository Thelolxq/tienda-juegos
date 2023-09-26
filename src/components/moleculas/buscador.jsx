import React,{useState} from 'react'

import Label from '../atomos/label'
import styled from 'styled-components'
import Carrito from '../atomos/carrito'
import Cards from './cards'
function Buscador() {
  const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);
  return (
    <>
    <Navbar>
      <Carrito 
      allProducts={allProducts}
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCountProducts={setCountProducts}/>
    <Label/>
   
    </Navbar>
    <Cards 
        allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}/>
    </>
  )
}

export default Buscador

const Navbar=styled.div`
   
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
   
    
    
    
    
   
    

`;