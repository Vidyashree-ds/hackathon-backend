import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./components/user-login/Loginpage"
import Register from "./components/user-login/Loginpage"
import NotFound from "./components/user-login/NotFound"
import Dashboard from "./components/LandingPage/Dashboard"


function Logout() {
  localStorage.clear()
  return <Navigate to="/dashboard" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register  method={"register"}/>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login method={"login"} />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/dashboard" element={<Dashboard method={"Dashboard"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
