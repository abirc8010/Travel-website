import React from 'react'
import Header from '../Header/Header'
import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../loader/loader.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./TourPage.css"
const TourPage = () => {
  
  const [info, setInfo] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const loc = searchParams.get('loc');
  const distance = searchParams.get('dist');
  const crowd = searchParams.get('crowd');
    const [loading, setLoading] = useState(true);
  const days = searchParams.get('days');
  let data = JSON.stringify({
    "location": loc,
    "distance": distance,
    "crowd": crowd,
    "days": days
  });
  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async()=>{
      try {
        const config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'https://holiday-planner-ai.onrender.com/recommend',
          headers: {
            'Content-Type': 'application/json'
          },
          data: data 
        };
        const response = await axios.request(config);
        var result=[];
        for(var i=0;i<response.data.length;++i)
        {
              result.push({
                City: response.data[i].City,
                Description:response.data[i].Description
              })
        }
        setInfo(result); 
        console.log("done");
      } catch (error) {
        console.error(error);
      }
        setLoading(false);
      },10000);
    };

    fetchData(); 
  }, []);
  return (
    <>
       {loading ? (
        <div className="loading-screen">
           <Loading/>
        </div>
      ) : (
        <>
    <Header />
        <div className='places'>  
          <img src="./static/images/tour.jpg" className="tour-background"/> 
          <div className='result'>
          {info && info.map(place => (
            <div key={place.City} className='place'> 
              <h2 className='card-title'>{place.City}</h2>
              <p className='card-description'>{place.Description}</p>
              <div className='button'>
             <Link to={`/map?des=${place.City}&src=${loc}`}>
              <button className='card-button'>View on map</button>
               </Link>
              </div>
            </div>
          ))}
          </div>
        </div>
        </>
      )}
    </>
  );
}

export default TourPage;