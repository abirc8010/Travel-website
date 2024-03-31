import React from 'react'
import Header from '../pages/Header/Header.jsx'
import FormComponent from '../components/Form'
import LocationTaker from '../components/LocationTaker'
import RealForm from '../components/RealForm'

const MainPage = () => {
    return (
        <div className='w-full min-h-[100vh] bg-500'>
            <Header />
            {/* <FormComponent/>
            <LocationTaker/> */}
            <RealForm/>
        </div>
    )
}

export default MainPage
