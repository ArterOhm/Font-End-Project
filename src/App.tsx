import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import PostDetail from "./pages/PostDetail"

function App() {
  return (
    <div className="App">
  <Navbar />
  <Routes>
    <Route path="/profile" element={<Profile />} />
    <Route path="/" element={<Home />} />
    <Route path="/post/" element={<PostDetail />} />
  </Routes>
  </div>)

}

export default App
