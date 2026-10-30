import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import AIAssistant from "./components/AIAssistant/AIAssistant"
import About from "./pages/about/About"
import Menu from "./pages/Menu/Menu"
import Contact from "./pages/Contact/Contact"
import Login from "./pages/Login/Login"
import Reservation from "./pages/Reservation/Reservation"




function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reservation" element={<Reservation />} />

    </Routes>
    

    <AIAssistant/>



      
    </>
  )
}

export default App
