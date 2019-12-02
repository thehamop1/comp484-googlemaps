class mapPoint{
    constructor(y, x){
        this.x = x;
        this.y = y;
    }
}
class boundingBox{
    constructor(topLeft, topRight, bottomLeft, bottomRight){
        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomLeft = bottomLeft;
        this.bottomRight = bottomRight;
    }
}

var csunBuildingCoordinates = [
    ['Jacaranda', new boundingBox(new mapPoint(34.242050, -118.529434), new mapPoint(34.242166, -118.527793), new mapPoint(34.241009, -118.529523), new mapPoint(34.241036, -118.527805))],
    ['Redwood', new boundingBox(new mapPoint(34.242623, -118.527026), new mapPoint(34.242574, -118.525358), new mapPoint(34.241315, -118.526826), new mapPoint(34.241359, -118.525351))],
    ['College of Business and Economics', new boundingBox(new mapPoint(34.242464, -118.531112), new mapPoint(34.242442, -118.529827), new mapPoint(34.241591, -118.530970), new mapPoint(34.241613, -118.529822))],
    ['Michael D. Eisner College of Education', new boundingBox(new mapPoint(34.241541, -118.531428), new mapPoint(34.241554, -118.530459), new mapPoint(34.241115, -118.531425), new mapPoint(34.241115, -118.530379))],
    ['Sequoia Hall - College of Health & Human Development', new boundingBox(new mapPoint(34.240811, -118.528451), new mapPoint(34.240830, -118.527667), new mapPoint(34.240147, -118.528444), new mapPoint(34.240147, -118.527559))],
    ['Admissions and Records', new boundingBox(new mapPoint(34.240716, -118.531477), new mapPoint(34.240740, -118.530157), new mapPoint(34.239937, -118.531413), new mapPoint(34.239964, -118.530154))]
];
function drawBounds(buildingCoordinates, map){
    buildingCoordinates.forEach(function(building, index){
        var rectangle = new google.maps.Rectangle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            bounds: {
                north: building[1].topLeft.y,
                south: building[1].bottomLeft.y,
                east: building[1].topRight.x,
                west: building[1].topLeft.x
            }
        });
        console.log(building[1]);
    });
}
var map;
var styles = {
    default: null,
    hide: [
        {elementType: 'geometry', stylers: [{color: '#fb5b5a'}]},
        {featureType: 'all', elementType: 'labels', stylers: [{"visibility":"off"}]},
        {
            featureType: 'poi.school',
            elementType: 'geometry',
            stylers: [{color: '#003f5c'}]
        },
        {
            featureType: 'POI',
            elementType: 'geometry',
            stylers: [{color: '#003f5c'}]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#263c3f'}]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#38414e'}]
        },
        {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{color: '#212a37'}]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#746855'}]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#1f2835'}]
        },
        {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{color: '#2f3948'}]
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#17263c'}]
        },
    ]
};
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 34.239645, lng: -118.528184},
        zoom: 17,
        disableDefaultUI: true
    });
    map.setOptions({styles: styles['hide']});
    map.addListener('click', function(e) {
        console.log(e.qa);
    });

    csunBuildingCoordinates.forEach(function(building, index){
        var rectangle = [];
        rectangle.push(new google.maps.Rectangle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            bounds: {
                north: building[1].topLeft.y,
                south: building[1].bottomLeft.y,
                east: building[1].topRight.x,
                west: building[1].topLeft.x
            }
        }));
    });
    //drawBounds(csunBuildingCoordinates, map);
}
