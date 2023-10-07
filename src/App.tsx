import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Profile from "./pages/Profile"
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
  <Navbar />
  <Routes>
    <Route path="/profile" element={<Profile />} />
    <Route path="/" element={<Home />} />
  </Routes>
  </div>)

}

export default App
