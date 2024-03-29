
import '../Map/Map.css';
import Drawer from "../Map/Drawer.jsx"
export default function() {
    var map;
    const initMap1= async ()=>{
       map = new mappls.Map('map', {
                center: [23.3551, 85.3595],
                zoomControl: true,
                location: true,
                }
    );
      Marker1 = new mappls.Marker({
                map: map,
                position: {
                    "lat": 23.3551,
                    "lng": 85.3595
                },
                fitbounds: true,
                icon: "https://maps.mapmyindia.com/images/to.png"
            });
            Marker1.addListener('click', function() {
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
