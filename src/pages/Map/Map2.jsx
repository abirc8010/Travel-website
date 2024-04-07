import React from 'react'
import Drawer from './Drawer.jsx'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
export default function(){
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const src = searchParams.get('src');
  const des= searchParams.get('des');
  async function GeoPosition(travel){
       let r=await axios.get(`https://us1.locationiq.com/v1/search?key=<token>&q=${travel}&format=json&`)
       console.log(r);
       return `${r.data[0].lat},${r.data[0].lon}`;
    }
  const initMap1 = async () => {
     
      var map = new mappls.Map('map', {
            center: [28, 77],
            zoomControl: true,
            location: true,
        }
        );
         map.addListener('load',async function(){ 
                /*direction plugin initialization*/

                let pos1= await GeoPosition(src);
                let pos2=await GeoPosition(des);
                var direction_option = {
                    map: map,
                    divId: 'Navigate',
                    divWidth:'350px',
                    isDraggable:false,
                    start: {label: src, geoposition: pos1},
                    end: {label: des, geoposition: pos2},
                    Profile:['driving','biking','trucking','walking'],
                    
                }
                mappls.direction(direction_option,function(data) {
                    direction_plugin=data;
                    console.log(direction_plugin);
                });
               });
    }
   return (
    <>
       <Drawer>
        </Drawer>
            <div id="map" ref={initMap1}></div>
    </>
   );
}