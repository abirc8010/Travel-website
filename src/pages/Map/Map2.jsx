
import '../Map/Map.css';
import Drawer from "../Map/Drawer.jsx"
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loading from '../loader/loader.jsx';
import axios from 'axios';
export default function () {
    var map;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const loc = searchParams.get('loc');
  const distance = searchParams.get('dist');
  const crowd = searchParams.get('crowd');
  const days = searchParams.get('days');
  let data = JSON.stringify({
    "location": loc,
    "distance": distance,
    "crowd": crowd,
    "days": days
  });
   var l;
    async function GeoPosition(travel){
       let r=await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${travel}&appid=546dc5a2333567bc027521570c8ea729`)
       return `${r.data[0].lat},${r.data[0].lon}`;
    }
    const initMap1 = async () => {
        map = new mappls.Map('map', {
            center: [28, 78],
            zoomControl: true,
            location: true,
        }
        );
         map.addListener('load',async function(){ 
                /*direction plugin initialization*/
                await sendtoai(data);
                let pos1= await GeoPosition(loc);
                let pos2=await GeoPosition(l);
                var direction_option = {
                    map: map,
                    divId: 'Navigate',
                    divWidth:'350px',
                    isDraggable:false,
                    start: {label: loc, geoposition: pos1},
                    end: {label: l, geoposition: pos2 },
                    Profile:['driving','biking','trucking','walking'],
                }
                mappls.direction(direction_option,function(data) {
                    direction_plugin=data;
                    console.log(direction_plugin);
                });
               });
    }

      const [isLoading, setIsLoading] = useState(true);
      useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 20000); 
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
         l=response.data[0].City;
         console.log(typeof(l));
    }
    catch (e) {
      console.log(e);
    }
  };

    return (
        <> 
         {isLoading ? (
            <>
        <Loading>         
        </Loading>
            
            <div id="map" ref={initMap1}></div>
            </>
      ) : (
        <>
         <Drawer></Drawer>
           <div id="map" ref={initMap1}></div>
        </>
      )}       
        </>
    );
}
