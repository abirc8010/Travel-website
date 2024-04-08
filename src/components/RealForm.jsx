import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './RealForm.css'
const RealForm = () => {
    const [showForm, setShowForm] = useState(false);
    const [largeFont, setLargeFont] = useState('');
    const [crowdDensity, setCrowdDensity] = useState('low crowd');
    const [distance, setDistance] = useState('');
    const [daysOfTravel, setDaysOfTravel] = useState('');
    const [location, setLocation] = useState('');
    const [words, setWords] = useState(["Welcome", "to", "Travel!"]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [sentence, setSentence] = useState('');
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
    const handleOpenCloseForm = () => {
        setShowForm(!showForm);
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentLetterIndex < words[currentWordIndex].length) {
                setDisplayedText(prevText => prevText + words[currentWordIndex][currentLetterIndex]);
                setCurrentLetterIndex(prevIndex => prevIndex + 1);
                setSentence(prevSentence => prevSentence + words[currentWordIndex][currentLetterIndex]);
            } else {
                setSentence(prevSentence => prevSentence + ' ');
                setCurrentWordIndex((currentWordIndex + 1) % words.length);
                setCurrentLetterIndex(0);
                setDisplayedText('');
                if (currentWordIndex === words.length - 1) {
                    setSentence(''); // Clear the sentence
                    setCurrentWordIndex(0); // Reset to start over
                }
            }
        }, 200); // Change the delay as needed (in milliseconds)

        return () => clearTimeout(timer);
    }, [currentWordIndex, currentLetterIndex, words]);
    return (
        <>
            <div className="cover-home">
                <div class="large-font">
                    {sentence}
                </div>
                <button className="ai-button" onClick={handleOpenCloseForm}>Get AI✨ powered Suggestion</button>
                {showForm && (
                    <div className="so">
                        <h1 className='text-xg font-bold text-white'>Travel Details </h1>
                        <br/>
                        <form onSubmit={handleSubmit}>
                            <div className='form-row'>
                                <div className="mb-4">
                                    <label htmlFor="crowdDensity" className="block font-bold mb-2">Crowd Density:</label>
                                    <select value={crowdDensity} onChange={(e) => setCrowdDensity(e.target.value)} name="crowd" id="crowd" className='select-box'>
                                        <option>Low crowd</option>
                                        <option>Moderate crowd</option>
                                        <option>High crowd</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="distance" className="block font-bold mb-2">Distance (in km):</label>
                                    <input required placeholder='Enter max distance' type="text" id="distance" value={distance} onChange={(e) => setDistance(e.target.value)} className="input-box w-4/5" />
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className="mb-4">
                                    <label htmlFor="daysOfTravel" className="block font-bold mb-2">Days of Travel:</label>
                                    <input required placeholder='Enter Days' type="text" id="daysOfTravel" value={daysOfTravel} onChange={(e) => setDaysOfTravel(e.target.value)} className="input-box w-2/3" />
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor='currentLocation' className="block font-bold mb-2">
                                        Enter starting location:
                                    </label>
                                    <input required id="currentLocation" type="text" placeholder="Enter a location" value={location} onChange={(e) => setLocation(e.target.value)} className="input-box" />
                                </div>
                            </div>
                            <div className='submitting'>
                                <button className="btn" type="button" onClick={handleGetCurrentLocation}>
                                    Get Current Location
                                </button>
                                <button className="btn" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </>
    );
};

export default RealForm;