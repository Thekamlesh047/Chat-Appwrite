import Home from "./components/Home/Home"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from "./components/Login/Login"
import SignUp from "./components/SignUp/SignUp"
import PrivetRoutes from "./components/PrivetRoutes"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import authService from "./AppWrite/auth"
import { login, logout } from "./store/AuthSlice"

function App() {
  const [loding, setLoding] = useState(true)
  const dispatch = useDispatch()
  
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))       
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoding(false))
    
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/> } />
        <Route element={<PrivetRoutes/>}>
        <Route path="/" element={<Home/>} />
        </Route>
      </Routes>
   </Router>
  )
}

export default App
