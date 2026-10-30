import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import AIAssistant from "./components/AIAssistant/AIAssistant"



function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>

    <AIAssistant/>



      
    </>
  )
}

export default App
