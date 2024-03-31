import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LocationTaker = () => {
  const [location, setLocation] = useState('');
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted location:', location);
    navigate(`/maps?lat=${lat}&lng=${lng}`)
  };

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
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <input 
          className="w-full mb-4 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" 
          type="text" 
          placeholder="Enter a location" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
        />
        <button 
          className="block w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" 
          type="button" 
          onClick={handleGetCurrentLocation}
        >
          Get Current Location
        </button>
        <button 
          className="mt-4 block w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600" 
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LocationTaker;
