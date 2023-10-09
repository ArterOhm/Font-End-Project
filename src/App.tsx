import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import PostDetail from "./pages/PostDetail"
import Login from "./pages/Login"
import Create from "./pages/Create"

function App() {
  return (
    <div className="App">
  <Navbar />
  <Routes>
    <Route path="/profile" element={<Profile />} />
    <Route path="/" element={<Home />} />
    <Route path="/post" element={<PostDetail />} />
    <Route path="/login" element={<Login />} />
    <Route path="/create" element={<Create />} />
  </Routes>
  </div>)

}

export default App
