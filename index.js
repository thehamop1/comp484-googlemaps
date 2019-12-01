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
            featureType: 'poi',
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
}
