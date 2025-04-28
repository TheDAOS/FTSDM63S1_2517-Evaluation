import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from "react-router";

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="/upload" element={<h1>upload</h1>} />
        <Route path="/logs" element={<h1>Logs</h1>} />
        <Route path="/search/:devId" element={<h1>/search/:devId</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
