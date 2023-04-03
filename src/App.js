import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header"
import Entry from "./components/Entry"
import Exit from "./components/Exit"
import Credits from "./components/Credits"
import Signin from "./components/Signin"
import Home from "./components/Home"
import Check from "./components/Check"


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<><Header/><Home/></>} />
          <Route path="/entry" element={<><Header/><Entry/></>}/>
          <Route path="/exit" element={<><Header/><Exit/></>}/>
          <Route path="/signin" element={<><Header/><Signin/></>}/>
          <Route path="/credits" element={<><Header/><Credits/></>}/>
          <Route path="/check" element={<><Header/><Check/></>}/>
        </Routes>
    </Router>
  );
}

export default App; 
