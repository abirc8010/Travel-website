
import '../Map/Map.css';
import Drawer from "../Map/Drawer.jsx"
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
export default function () {
    var map;
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const latParam = searchParams.get('lat');
        const lngParam = searchParams.get('lng');
        setLat(latParam);
        setLng(lngParam);
    }, [location.search]);

    const initMap1 = async () => {
        map = new mappls.Map('map', {
            center: [lat, lng],
            zoomControl: true,
            location: true,
        }
        );
         map.addListener('load',function(){ 
                /*direction plugin initialization*/
                var direction_option = {
                    map: map,
                    divId: 'Navigate',
                    divWidth:'350px',
                    isDraggable:false,
                    start: {label: 'Kolkata', geoposition: "22.5726,88.3639"},
                    end: {label: 'India Gate', geoposition: "28.612964,77.229463" },
                    Profile:['driving','biking','trucking','walking'],
                    via:[{label:'mathura',geoposition:"28.544,77.4541"},{label:'Koshi',geoposition:"28.144,77.4541"}]
                }
                mappls.direction(direction_option,function(data) {
                    direction_plugin=data;
                    console.log(direction_plugin);
                });
               });
    }

    return (
        <> <Drawer>
        </Drawer>
            <div id="map" ref={initMap1}></div>
        </>
    );
}
