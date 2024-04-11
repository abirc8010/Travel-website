import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import Drawer from "./Drawer.jsx"
// Initialize Mapbox
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;

const Map = () => {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
const navigationControlContainer = useRef(null);
  useEffect(() => {
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-122.4376, 37.7577],
        zoom: 10
      });

      // Add navigation control
      map.addControl(new mapboxgl.NavigationControl(), 'top-right');

      // Add directions control
      const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/driving'
      });

      map.addControl(directions, 'top-left');

      map.on('load', () => {
        setMap(map);
      });
    };
     
    if (!map) initializeMap({ setMap, mapContainer });
    if (map) {
      const navigationControl = new mapboxgl.NavigationControl();
     
    }
  }, [map]);

  return (
    <>
  <div ref={mapContainer} style={{ height: '100vh', width: '100%' }}></div>
    <Drawer parentRef={navigationControlContainer}/>
   </>
  )
};

export default Map;
