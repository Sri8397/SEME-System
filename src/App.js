import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Entry from "./pages/Entry"
import Exit from "./pages/Exit"
import AddVehicle from "./pages/AddVehicle"
import Home from "./pages/Home"
import { VehicleState } from './context/VehicleState'
import { AlertState } from './context/AlertState'
import Login from './pages/Login'
import Signup from './pages/Signup'
import './tailwind.css'

function App() {  
    return (
        <AlertState>
        <VehicleState>
            <Router>
                <Navbar />
                <div className="container my-3">
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/entry" element={<Entry />} />
                        <Route path="/exit" element={<Exit />} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/signup" element={<Signup/>} />
                        <Route path="/addvehicle" element={<AddVehicle/>}/>
                    </Routes>
                </div>
            </Router>
        </VehicleState>
        </AlertState>
    );
}

export default App; 
