
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
                    divWidth:'300px',
                    isDraggable:false,
                    Profile:['driving','biking','trucking','walking'],
                    
                }
                mappls.direction(direction_option,function(data) {
                    direction_plugin=data;
                    console.log(direction_plugin);
                });
                var options = {
                divId: 'nearby_search',
                search_icon: false,
                map: map,
                keywords:{'FINATM':'ATMs', 'FODCOF;FODIND;FODOTH':'Hotels'},
                refLocation: "28.632735,77.219696",
                fitbounds: true,
                click_callback: function(d) {
                    if (d) {
                        var l = "Name: " + d.placeName + "\nAddress: " + d.placeAddress + "\neLoc: " + d.eLoc;
                        alert(l);
                    };
                }
            }
            mappls.nearby(options, function(data){
                nr= data;
                console.log(nr);
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
