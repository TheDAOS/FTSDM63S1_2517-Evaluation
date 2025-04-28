import './App.css'
import Logs from './components/Logs';
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from "react-router";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Upload from './components/Upload';
import ContentBox from './components/ContentBox';
import Home from './components/Home';
import DevLogs from './components/DevLogs';
import ErrorPage from './components/404';


function App() {


  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ContentBox><Home /></ContentBox>} />
          <Route path="/upload" element={<ContentBox><Upload /></ContentBox>} />
          <Route path="/logs" element={<ContentBox><Logs /></ContentBox>} />
          <Route path="/search/:devId" element={<ContentBox><DevLogs /></ContentBox>} />
          <Route path="*" element={<ContentBox><ErrorPage /></ContentBox>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
export default App
