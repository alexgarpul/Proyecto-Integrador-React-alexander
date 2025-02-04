import React from 'react'
import Menu from './components/Menu/Menu'
import './App.css'
import Inicio from './components/Inicio/Inicio'
import Noticias from './components/Noticias/Noticias'
import Carreras from './components/Carreras/Carreras'
import Nosotros from './components/Nosotros/Nosotros'
import Contacto from './components/Contacto/Contacto'
import { ThemeContextProvier } from './components/context/ThemeContext'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Welcome from './components/Welcome/Welcome'
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <ThemeContextProvier>
      <div>
        <Menu />
        {/* <Inicio /> */}
        {/* <Noticias /> */}
        {/* <Carreras /> */}
        {/* <Nosotros /> */}
        {/* <Contacto /> */}
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Proyecto-Integrador-React" element={<Inicio />} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Noticias" element={<Noticias />} />
          <Route path="/Carreras" element={<Carreras />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ThemeContextProvier>
  )
}

export default App
