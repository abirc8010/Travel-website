import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import TourPage from './pages/TourPage'

function App() {
    const [count, setCount] = useState(0)

    return (
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path='/tours' element={<TourPage/>}/>
        </Routes>
    )
}

export default App
