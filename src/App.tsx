import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import PostDetail from "./pages/PostDetail"
import Login from "./pages/Login"
import './App.css'
import Create from "./pages/Create"
import Register from "./pages/Register"
import EditPost from "./pages/Edit"

function App() {
  return (
  <div className="App">
    <div className="App-container">
  <Navbar />
  <div className="feed-container">
  <Routes>
    <Route path="/profile" element={<Profile />} />
    <Route path="/" element={<Home />} />
    <Route path="/post/:id" element={<PostDetail />} />
    <Route path="/post/:id/edit" element={<EditPost/>} />
    <Route path="/login" element={<Login />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/create" element={<Create />} />
  </Routes>
  </div>
  </div>
  </div>)

}

export default App
