import './App.css'
import { Routes, Route } from "react-router"
import Home from './frontend/pages/home'
import SiteLayout from './frontend/components/SiteLayout'
import Data from './frontend/pages/data'
import WatchList from './frontend/pages/watchlist'
import LogIn from './frontend/auth/login'
import SignUp from './frontend/auth/signup'
import NotFound from './frontend/pages/notFound'

export default function App() {

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="data" element={<Data />} />
        <Route path="watchlist" element={<WatchList />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

