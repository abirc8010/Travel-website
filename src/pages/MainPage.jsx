import React from 'react'
import Header from '../pages/Header/Header.jsx'
import FormComponent from '../components/Form'
import LocationTaker from '../components/LocationTaker'
import RealForm from '../components/RealForm'
import Globe from '../components/Globe.jsx'
const MainPage = () => {
    return (
        <div className='w-full min-h-[100vh] bg-500'>
            <Header />
            {/* <FormComponent/>
            <LocationTaker/> */}
            <Globe/>
            <RealForm/>
        </div>
    )
}

export default MainPage
