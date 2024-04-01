// TravelPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
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
        e.preventDefault();
        // console.log('Server Response:', data);
        console.log(crowdDensity," ",distance," ",location)
        let data = {
            // Get the lat and lng of location using OpenWeather API for map loading
            // Currently I have hardcoded it to Kolkata
            // "location":location,
            "location": "Kolkata",
            "distance":distance,
            "crowd":crowdDensity,
            "days":daysOfTravel
        }

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://holiday-planner-ai.onrender.com/recommend',
            headers: {
                'Content-type': 'application/json',
            },
            data: data
        }

        axios.request(config).
        then((response)=>{
            console.log(JSON.stringify(response.data))
        })
        .catch((error)=>{console.log(error)})
        setCrowdDensity('');
        setDistance('');
        setDaysOfTravel('');
        setLocation('');
        setLat(null);
        setLng(null);

        navigate(`/maps?lat=${lat}&lng=${lng}`);
    }
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     fetch('/process_data', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             crowdDensity,
    //             distance,
    //             daysOfTravel,
    //             lat,
    //             lng
    //         })
    //     })
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         console.log('Server Response:', data);
    //         setCrowdDensity('');
    //         setDistance('');
    //         setDaysOfTravel('');
    //         setLocation('');
    //         setLat(null);
    //         setLng(null);
    //         navigate(`/maps?lat=${lat}&lng=${lng}`);
    //     })
    //     .catch(error => {
    //         console.error('Error:', error.message);
    //     });
    // };
    const setCrowdDensityMethod = (e)=>{
        setCrowdDensity(e.target.value)
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
                    <h2 className="text-2xl font-bold mb-4">Travel Details</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            {/* <label htmlFor="crowdDensity" className="block text-gray-700 font-bold mb-2">Crowd Density:</label>
                            <input required placeholder='Enter preferred crowd density'
                                type="text" id="crowdDensity" value={crowdDensity} onChange={(e) => setCrowdDensity(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" /> */}
                            <label htmlFor="crowd_density" className="block text-gray-700 font-bold mb-2">Preferred crowd density:</label>
                            <select
                                value={crowdDensity}
                                id="crowd_density"
                                onChange={setCrowdDensityMethod}
                                className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="less-crowded">I am scared of people</option>
                                <option value="moderately-crowded">A little crowd hurt nobody</option>
                                <option value="highly-crowded">The more, the merrier</option>
                            </select>
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
                        <button type="submit" className="bg-rose-500 w-full hover:bg-rose-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RealForm;
