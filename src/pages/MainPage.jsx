import React from 'react'
import Header from '../components/Header'
import FormComponent from '../components/Form'
import LocationTaker from '../components/LocationTaker'

const MainPage = () => {
    return (
        <div className='w-full min-h-[100vh] bg-500'>
            <Header/>
            <FormComponent/>
            <LocationTaker/>
        </div>
    )
}

export default MainPage
