
import '../Map/Map.css';
import Drawer from "../Map/Drawer.jsx"
export default function () {
    var map;

    const initMap1 = async () => {
        map = new mappls.Map('map', {
            center: [28, 77],
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
                    Profile:['driving','biking','trucking','walking'],
                    
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
