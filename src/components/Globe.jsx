import ReactMapGL, { NavigationControl } from 'mapbox-gl';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import "../components/Globe.css"
mapboxgl.accessToken = 'pk.eyJ1IjoiLS1jb25xdWVyb3ItLSIsImEiOiJjbHVmbGxpdmowanB4MmlvZXJzbGk5ZGpkIn0.Hpum1U7p4fzgJZYOUCeJ_Q';
const MapboxGlobe = () => {
   const mapContainer = useRef(null);
  const map = useRef(null);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
       container: mapContainer.current,
        style: 'mapbox://styles/mapbox/satellite-v9',
        projection: 'globe', // Display the map as a globe, since satellite-v9 defaults to Mercator
        zoom: 1,
        center: [-90, 40]
    });
     map.current.on('style.load', () => {
  map.current.setFog({
    color: 'rgb(186, 210, 235)', // Lower atmosphere
    'high-color': 'rgb(36, 92, 223)', // Upper atmosphere
    'horizon-blend': 0.02, // Atmosphere thickness (default 0.2 at low zooms)
    'space-color': 'rgb(11, 11, 25)', // Background color
    'star-intensity': 0.6 // Background star brightness (default 0.35 at low zoooms )
  });
});
 const secondsPerRevolution = 120;
    // Above zoom level 5, do not rotate.
    const maxSpinZoom = 5;
    // Rotate at intermediate speeds between zoom levels 3 and 5.
    const slowSpinZoom = 3;

    let userInteracting = false;
    let spinEnabled = true;

    function spinGlobe() {
        const zoom = map.current.getZoom();
        if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
            let distancePerSecond = 360 / secondsPerRevolution;
            if (zoom > slowSpinZoom) {
                // Slow spinning at higher zooms
                const zoomDif =
                    (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
                distancePerSecond *= zoomDif;
            }
            const center = map.current.getCenter();
            center.lng -= distancePerSecond;
            // Smoothly animate the map over one second.
            // When this animation is complete, it calls a 'moveend' event.
            map.current.easeTo({ center, duration: 1000, easing: (n) => n });
        }
    }

    // Pause spinning on interaction
    map.current.on('mousedown', () => {
        userInteracting = true;
    });

    // Restart spinning the globe when interaction is complete
    map.current.on('mouseup', () => {
        userInteracting = false;
        spinGlobe();
    });

    // These events account for cases where the mouse has moved
    // off the map, so 'mouseup' will not be fired.
    map.current.on('dragend', () => {
        userInteracting = false;
        spinGlobe();
    });
    map.current.on('pitchend', () => {
        userInteracting = false;
        spinGlobe();
    });
    map.current.on('rotateend', () => {
        userInteracting = false;
        spinGlobe();
    });

    // When animation is complete, start spinning if there is no ongoing interaction
    map.current.on('moveend', () => {
        spinGlobe();
    });

    spinGlobe();
  });
    
  
  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default MapboxGlobe;
