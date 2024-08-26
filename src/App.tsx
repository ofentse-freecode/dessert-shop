import {Routes, Route } from "react-router-dom"
import {Container} from 'react-bootstrap'
import { Home } from "./Pages/Home"
import {Store} from "./Pages/Store"
import {About} from "./Pages/About"
import {Navbar} from "./Components/Navbar"
import "./App.css"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"


function App() {
 
  return (
    <>
    <ShoppingCartProvider>
    <Navbar/>
    <div className="cont">
    <Container className="mb-2">
    <Routes>
     
     <Route path="/" element={<Home/>} />
     <Route path="/store" element={<Store/>} />
     <Route path="/about" element={<About/>} />
    </Routes>
 
    </Container>
    </div>
    </ShoppingCartProvider>
   </>
  )
}

export default App
