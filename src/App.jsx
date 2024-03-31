import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import TourPage from './pages/TourPage'
import Map from './pages/Map/Map.jsx'
function App() {
    const [count, setCount] = useState(0)

    return (
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path='/tours' element={<TourPage/>}/>
            <Route path='/maps' element={<Map/>}/>
        </Routes>
    )
}

export default App
