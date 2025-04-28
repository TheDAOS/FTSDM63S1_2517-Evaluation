import './App.css'
import Logs from './components/Logs';
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from "react-router";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Upload from './components/Upload';
import ContentBox from './components/ContentBox';


function App() {


  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/upload" element={<ContentBox><Upload /></ContentBox>} />
          <Route path="/logs" element={<ContentBox><Logs /></ContentBox>} />
          <Route path="/search/:devId" element={<h1>/search/:devId</h1>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
export default App
