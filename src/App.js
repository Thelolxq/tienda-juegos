import React from 'react'
import Home from './components/pages/home'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import JuegoDetalles from './components/organizmos/juegoDetalles'

 function App(){
 
 
    return (
      <>
      
      <Router>
  <Routes>
     
    <Route path='/' element={<Home/>}/>
    <Route path='/juego/:id' element={<JuegoDetalles />} />
    
  </Routes>
</Router>
      </>
    )
  }


export default App