Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjNDkxNmUwOC1hN2Y1LTQ0NGQtODVlZC01ZjA5OTA4YTlhZjQiLCJpZCI6MTUxODEsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NjczNzU2MDB9.9Z7d7bgJmmIxDggXO1VNNHpMmg1s9nyHxwm42Un-xgQ';
var viewer = new Cesium.Viewer('cesiumContainer', {
    geocoder: false,
    homeButton: false,
    scene3DOnly: true,
    selectionIndicator: false,
    baseLayerPicker: false,
    animation: false,
    // timeline: false
});
viewer.imageryLayers.remove(viewer.imageryLayers.get(0));
viewer.imageryLayers.addImageryProvider(new Cesium.OpenStreetMapImageryProvider({
    url : 'https://a.tile.openstreetmap.org/'
}));
viewer.scene.globe.enableLighting = true;
var currentTime = Cesium.JulianDate.fromIso8601('20200622T120000+0200');
var endTime = Cesium.JulianDate.addDays(currentTime, 1, new Cesium.JulianDate());

viewer.clock.currentTime = currentTime;
viewer.timeline.zoomTo(currentTime, endTime);
// Create an initial camera view
var initialPosition = new Cesium.Cartesian3.fromDegrees(6.234951, 62.471599, 1000);
var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(0, -85, -0);
var homeCameraView = {
    destination : initialPosition,
    orientation : {
        heading : initialOrientation.heading,
        pitch : initialOrientation.pitch,
        roll : initialOrientation.roll
    }
};
var NTNUPosition = new Cesium.Cartesian3.fromDegrees(6.234951, 62.471399, 300);
var NTNUOrientation = new Cesium.HeadingPitchRoll.fromDegrees(0, -85, -0);
var NTNUView = {
    destination : NTNUPosition,
    orientation : {
        heading : NTNUOrientation.heading,
        pitch : NTNUOrientation.pitch,
        roll : NTNUOrientation.roll
    },
    duration : 0.5
};
// Set the initial view
viewer.scene.camera.setView(homeCameraView);



// var position = Cesium.Cartesian3.fromDegrees(6.234851, 62.471699); // For default Map
var position1 = Cesium.Cartesian3.fromDegrees(6.232660234266139, 62.472536283209294);
var position2 = Cesium.Cartesian3.fromDegrees(6.233456546000588, 62.47191203052372);
var position3 = Cesium.Cartesian3.fromDegrees(6.234752935156261, 62.47172251923145);
var position4 = Cesium.Cartesian3.fromDegrees(6.2364949374477705, 62.4720059513983);
var position5 = Cesium.Cartesian3.fromDegrees(6.233127998282732, 62.47040909568865);
var heading1 = Cesium.Math.toRadians(88.0);
var pitch1 = Cesium.Math.toRadians(0.0);
var roll1 = Cesium.Math.toRadians(0.0);
var orientation1 = Cesium.Transforms.headingPitchRollQuaternion(position1, new Cesium.HeadingPitchRoll(heading1, pitch1, roll1));
var orientation2 = Cesium.Transforms.headingPitchRollQuaternion(position2, new Cesium.HeadingPitchRoll(heading1, pitch1, roll1));
var orientation3 = Cesium.Transforms.headingPitchRollQuaternion(position3, new Cesium.HeadingPitchRoll(heading1, pitch1, roll1));
var orientation4 = Cesium.Transforms.headingPitchRollQuaternion(position4, new Cesium.HeadingPitchRoll(heading1, pitch1, roll1));
var orientation5 = Cesium.Transforms.headingPitchRollQuaternion(position5, new Cesium.HeadingPitchRoll(heading1, pitch1, roll1));

var entity1 = viewer.entities.add({
    name: 'Gnisten',
    position : position1,
    orientation : orientation1,
    // description: 'This an entity description with a clickable button in it.',
    model : {
        uri : 'Model/building1.glb',
        color : new Cesium.Color(1.0, 1.0, 1.0, 1),
        scale : 1,
    }
});
var entity2 = viewer.entities.add({
    name: 'Lanterna',
    position : position2,
    orientation : orientation2,
    model : {
        uri : 'Model/building2.glb',
        color : new Cesium.Color(1.0, 1.0, 1.0, 1),
        scale : 1,
    }
});
var entity3 = viewer.entities.add({
    name: 'Ankeret',
    position : position3,
    orientation : orientation3,
    model : {
        uri : 'Model/building3.glb',
        color : new Cesium.Color(1.0, 1.0, 1.0, 1),
        scale : 1,
    }
});
var entity4 = viewer.entities.add({
    name: 'Kompasset',
    position : position4,
    orientation : orientation4,
    model : {
        uri : 'Model/building4.glb',
        color : new Cesium.Color(1.0, 1.0, 1.0, 1),
        scale : 1,
    }
});
var entity5 = viewer.entities.add({
    name: 'Nautilus',
    position : position5,
    orientation : orientation5,
    model : {
        uri : 'Model/building5.glb',
        color : new Cesium.Color(1.0, 1.0, 1.0, 1),
        scale : 1,
    }
});

var Map;
var handler= new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
handler.setInputAction(function (movement) {
    var picked = viewer.scene.pick(movement.position);
    var id = Cesium.defaultValue(picked.id, picked.primitive.id);
    if (id instanceof Cesium.Entity) {
        var carto = Cesium.Ellipsoid.WGS84.cartesianToCartographic(id.position._value); 
        var long = Cesium.Math.toDegrees(carto.longitude) + 0.0008;
        var lati = Cesium.Math.toDegrees(carto.latitude) + 0.0003;
        console.dir(long);
        console.dir(lati);
        viewer.scene.camera.flyTo(NTNUView);
        entity1._model._color._value.alpha = 1;
        entity2._model._color._value.alpha = 1;
        entity3._model._color._value.alpha = 1;
        entity4._model._color._value.alpha = 1;
        entity5._model._color._value.alpha = 1;
        id._model._color._value.alpha = 0.4;
        // document.getElementById('buttoncontrol').style.display='block';
        Map = new Mazemap.Map({
            container: 'mazemap-container',
            center: {lng: long, lat: lati},
            zoom: 17.3,
            speed: 2.5,
            curve: 1,
            zLevel: -1,
            zLevelControl: false,
            doubleClickZoom: false,
            touchZoomRotate: false
        });
        var labMarker = new Mazemap.MazeMarker({
            imgUrl: 'smart-city.svg',
            imgScale: 1,
            color: '#00A621',
        }).setLngLat({lng: 6.233833546462392, lat: 62.47198568997882}).addTo(Map);
        var popup = new Mazemap.Popup({closeOnClick: true, offset: [0, -27]})
                .setHTML(
                    '<div id="container_buttons">' +
                    '<br><b style="font-size: 20px;">SmartCT Lab</b><br><br>' +
                    '&nbsp&nbsp<button class="a_demo_one" onclick = "buttonclicked()"><b style="font-size: 15px;">Indoor Data</b></button></p>' +
                    '</div>'
                    ).setMaxWidth('none');
        labMarker.setPopup(popup);
        Map.on('load', function(){
            // Initialize a Highlighter for POIs
            // Storing the object on the map just makes it easy to access for other things
            Map.highlighter = new Mazemap.Highlighter( Map, {
                showOutline: true,
                showFill: true,
                outlineColor: Mazemap.Util.Colors.MazeColors.MazeBlue,
                fillColor: Mazemap.Util.Colors.MazeColors.MazeBlue
            } );
        
        });
    }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);


function buttonclicked() {
    window.open("Proto.html")
}