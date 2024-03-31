
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
        Marker1 = new mappls.Marker({
            map: map,
            position: {
                "lat": lat,
                "lng": lng
            },
            fitbounds: true,
            icon: "https://maps.mapmyindia.com/images/to.png"
        });
        Marker1.addListener('click', function () {
            window.open('https://www.mapmyindia.com/');
        });
    }

    return (
        <> <Drawer>
        </Drawer>
            <div id="map" ref={initMap1}></div>
        </>
    );
}
