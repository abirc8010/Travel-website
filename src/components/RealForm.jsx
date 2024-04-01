import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RealForm.css'
import 'animate.css';
const RealForm = () => {
    const [crowdDensity, setCrowdDensity] = useState('');
    const [distance, setDistance] = useState('');
    const [daysOfTravel, setDaysOfTravel] = useState('');
    const [location, setLocation] = useState('');
    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)
    const navigate = useNavigate();
    const handleSubmit = (e) => {
             navigate(`/map?loc=${location}&dist=${distance}&crowd=${crowdDensity}&days=${daysOfTravel}`);
       
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
        <div className="min-h-screen  bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('your-background-image.jpg')" }}>
            <div className="flex sample justify-center items-center min-h-screen">
                <div className=" so p-8 rounded-lg shadow-md w-96">
                    <h2 className="text-1xl font-bold mb-4">Travel Details </h2>
                    <h6>(AI powered suggestion)</h6>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="crowdDensity" className="block text-gray-700 font-bold mb-2">Crowd Density:</label>
                            <input required placeholder='low / moderate / more crowd'
                                type="text" id="crowdDensity" value={crowdDensity} onChange={(e) => setCrowdDensity(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4 ">
                            <label htmlFor="distance" className="block text-gray-700 font-bold mb-2">Distance(in km):</label>
                            <input required placeholder='Enter maximum distance'
                                type="text" id="distance" value={distance} onChange={(e) => setDistance(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="daysOfTravel" className="block text-gray-700 font-bold mb-2">Days of Travel:</label>
                            <input required placeholder='Enter number of days of travel'
                                type="text" id="daysOfTravel" value={daysOfTravel} onChange={(e) => setDaysOfTravel(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className='mb-4 flex flex-col '>
                            <label htmlFor='currentLocation' className="block text-gray-700 font-bold mb-2">
                                Enter starting location:
                            </label>
                            <input
                                required
                                id="currentLocation"
                                className="w-full mb-4 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                                type="text"
                                placeholder="Enter a location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                            <button
                                className="block w-[50%] mx-auto bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                                type="button"
                                onClick={handleGetCurrentLocation}
                            >
                                Get Current Location
                            </button>

                        </div>
                        <button className="bg-rose-500 w-full hover:bg-rose-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RealForm;
