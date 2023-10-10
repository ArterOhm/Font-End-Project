import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import PostDetail from "./pages/PostDetail"
import Login from "./pages/Login"
import './App.css'
import Create from "./pages/Create"
import Register from "./pages/Regicter"

function App() {
  return (
    <div className="App">
  <Navbar />
  <div className="feed-container">
  <Routes>
    <Route path="/profile" element={<Profile />} />
    <Route path="/" element={<Home />} />
    <Route path="/post/:id" element={<PostDetail />} />
    <Route path="/login" element={<Login />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/create" element={<Create />} />
  </Routes>
  </div>
  </div>)

}

export default App
