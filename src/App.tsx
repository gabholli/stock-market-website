import './App.css'
import { Routes, Route } from "react-router"
import Home from './pages/home'
import SiteLayout from './components/SiteLayout'
import Data from './pages/data.'
import WatchList from './pages/watchlist'
import LogIn from './auth/authentication'

export default function App() {

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="data" element={<Data />} />
        <Route path="watchlist" element={<WatchList />} />
        <Route path="login" element={<LogIn />} />
      </Route>
    </Routes>
  )
}

