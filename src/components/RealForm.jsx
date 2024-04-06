import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RealForm.css'
const RealForm = () => {
    const [crowdDensity, setCrowdDensity] = useState('low crowd');
    const [distance, setDistance] = useState('');
    const [daysOfTravel, setDaysOfTravel] = useState('');
    const [location, setLocation] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        navigate(`/tours?loc=${location}&dist=${distance}&crowd=${crowdDensity}&days=${daysOfTravel}`);
        e.preventDefault();
        setCrowdDensity('');
        setDistance('');
        setDaysOfTravel('');
        setLocation('');
        setLat(null);
        setLng(null);
    }


    const handleGetCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
                setLat(position.coords.latitude)
                setLng(position.coords.longitude)
            }, (error) => {
                console.error('Error getting current location:', error);
            });
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    return (
        <div className="min-h-screen  bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('./static/images/camping.jpg')" }}>
            <div className="flex sample justify-center items-end min-h-screen">
                <div className="so">
                    <h1 className='text-xg font-bold text-white'>Travel Details </h1>
                    <h6 className='font-bold text-white'>(AI powered suggestion)</h6>
                    <form onSubmit={handleSubmit}>
                        <div className='top'>
                            <div className="mb-4">
                                <label htmlFor="crowdDensity" className="block text-black-700 font-bold mb-2">Crowd Density:</label>
                                <select value={crowdDensity} onChange={(e) => setCrowdDensity(e.target.value)} name="crowd" id="crowd" className='shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none '>
                                    <option>Low crowd</option>
                                    <option>moderate crowd</option>
                                    <option>high crowd</option>
                                </select>

                            </div>
                            <div className="mb-4 ">
                                <label htmlFor="distance" className="block text-black-700 font-bold mb-2">Distance(in km):</label>
                                <input required placeholder='Enter maximum distance'
                                    type="text" id="distance" value={distance} onChange={(e) => setDistance(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                        </div>
                        <div className='middle'>
                            <div className="mb-4">
                                <label htmlFor="daysOfTravel" className="block text-black-700 font-bold mb-2">Days of Travel:</label>
                                <input required placeholder='Enter number of days of travel'
                                    type="text" id="daysOfTravel" value={daysOfTravel} onChange={(e) => setDaysOfTravel(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className='mb-4 flex flex-col '>
                                <label htmlFor='currentLocation' className="block text-black-700 font-bold mb-2">
                                    Enter starting location:
                                </label>
                                <input
                                    required
                                    id="currentLocation"
                                    className="w-full mb-4 px-3 py-2 rounded-md border border-black-300 focus:outline-none focus:border-blue-500"
                                    type="text"
                                    placeholder="Enter a location"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />


                            </div>
                        </div>
                        <div className='submitting'>
                            <button
                                className="bg-blue-500 w-50 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={handleGetCurrentLocation}
                            >
                                Get Current Location
                            </button>
                            <button className="bg-rose-500 w-55 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RealForm;