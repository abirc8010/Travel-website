import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import TourPage from './pages/Tour/TourPage.jsx'
import Map from './pages/Map/Map.jsx'
import Map2 from './pages/Map/Map2.jsx'
import Train from './pages/Trains/train.jsx'
import Flights from './pages/Flights/flight.jsx'
function App() {
    const [count, setCount] = useState(0)

    return (
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path='/tours' element={<TourPage/>}/>
            <Route path='/maps' element={<Map/>}/>
                  <Route path='/map' element={<Map2/>}/>
             <Route path='/train' element={<Train/>}/>
             <Route path='/flight' element={<Flights/>}/>
        </Routes>
    )
}

export default App
