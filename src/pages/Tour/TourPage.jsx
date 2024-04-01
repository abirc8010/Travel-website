import React from 'react'
import Header from '../Header/Header'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loading from '../loader/loader.jsx';
import axios from 'axios';
import "./TourPage.css"
const TourPage = () => {
  var places=[];

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const loc = searchParams.get('loc');
  const distance = searchParams.get('dist');
  const crowd = searchParams.get('crowd');
  const days = searchParams.get('days');
  var c;
  let data = JSON.stringify({
    "location": loc,
    "distance": distance,
    "crowd": "less crowded",
    "days": days
  });
      const [isLoading, setIsLoading] = useState(true);
      useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 50000); 
  }, []);
  async function sendtoai(data) {
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://holiday-planner-ai.onrender.com/recommend',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    try {
      let response = await axios.request(config);
      console.log(response.data);
    }
    catch (e) {
      console.log(e);
    }
  };

        sendtoai(data);
  return (
    <>
      <Header />
      <div className='list-of-places'>
              {isLoading ? (
        <Loading />
      ) : (
        <div className='places'>     
         <div id='place'>
              {c}
          </div> 
        </div>
      )}
      </div>
    </>
  );
}

export default TourPage
