
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
    map.addListener('load',function(){ 
                /*direction plugin initialization*/
                var direction_option = {
                    map: map,
                    divId: 'Navigate',
                    divWidth:'350px',
                    isDraggable:false,
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
