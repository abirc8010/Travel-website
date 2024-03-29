import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormComponent = () => {
    const [selectedValue, setSelectedValue] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Make API call
            console.log(selectedValue)
            const response = await axios.post('/api/submitForm', {
                value: selectedValue,
            });
            console.log(response.data); // Assuming you want to log the response
            // Navigate to /tours
            setSelectedValue(null);
            navigate('/tours');
        } catch (error) {
            console.error('Error:', error);
            alert("Eror")
        }
    };


    return (
        <div className='w-full h-[60%]'>
            <form onSubmit={handleSubmit} className="w-full h-full grid grid-cols-2">
                <div className='w-full flex items-center justify-center'>
                    <label className="m-2 flex">
                        <input
                            type="radio"
                            name="value"
                            value="beach"
                            checked={selectedValue === 'value1'}
                            onChange={() => setSelectedValue('value1')}
                            className='hidden'
                        />
                        <img src="/beach.jpg" alt="Image 1" className="w-32 h-32" />
                        <p className='my-auto'>Beach</p>
                    </label>
                </div>
                {/* Repeat the label and input for other images */}
                <div className='w-full flex items-center justify-center'>
                    <label className="m-2 flex">
                        <input
                            type="radio"
                            name="value"
                            value="camping"
                            checked={selectedValue === 'value2'}
                            onChange={() => setSelectedValue('value2')}
                            className='hidden'
                        />
                        <img src="/camping.jpg" alt="Image 2" className="w-32 h-32" />
                        <p className='my-auto'>Camping</p>
                    </label>
                </div>

                <div className='w-full flex items-center justify-center'>
                    <label className="m-2 flex">
                        <input
                            type="radio"
                            name="value"
                            value="cruise"
                            checked={selectedValue === 'value3'}
                            onChange={() => setSelectedValue('value3')}
                            className='hidden'
                        />
                        <img src="/cruise.jpg" alt="Image 3" className="w-32 h-32" />
                        <p className='my-auto'>Cruise</p>
                    </label>
                </div>

                <div className='w-full flex items-center justify-center'>
                    <label className="m-2 flex">
                        <input
                            type="radio"
                            name="value"
                            value="religious"
                            checked={selectedValue === 'value4'}
                            onChange={() => setSelectedValue('value4')}
                            className='hidden'
                        />
                        <img src="/religious.jpg" alt="Image 4" className="w-32 h-32" />
                        <p className='my-auto'>Religious</p>
                    </label>
                </div>

                <div className='w-full'>
                    <button type="submit" className="w-full translate-x-[50%] mt-7 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormComponent;
