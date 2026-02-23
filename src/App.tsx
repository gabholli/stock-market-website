import './App.css'
import { Routes, Route } from "react-router"
import Home from './pages/home'
import About from './pages/about'

function App() {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  )
}

export default App
