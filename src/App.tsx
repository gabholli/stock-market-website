import './App.css'
import { Routes, Route } from "react-router"
import Home from './pages/home'
import SiteLayout from './components/SiteLayout'
import Data from './pages/data.'

const App = () => {

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="data" element={<Data />} />
      </Route>
    </Routes>
  )
}

export default App
