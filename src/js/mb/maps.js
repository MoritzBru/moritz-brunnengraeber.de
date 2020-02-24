function initMap() {
    const googleMaps = window.google && window.google.maps;
    if (!googleMaps) { return; }

    const selectors = {
        map: '.mb-map',
    };

    const mapDomEl = document.querySelector(selectors.map);
    if (!mapDomEl) { return; }

    const iconBasePath = '/assets/map/';

    const mapMarkersData = [
        {
            name: 'Home',
            desc: 'Where I live.',
            pos: { lat: 48.1352, lng: 11.5094 },
            coords: "48°08'07\"N 11°30'34\"E",
            icon: `${iconBasePath}home.svg`,
        }, {
            name: 'Technical University of Munich',
            desc: 'Where I worked and studied a lot.',
            pos: { lat: 48.1489, lng: 11.5675 },
            coords: "48°08'56\"N 11°34'03\"E",
            icon: `${iconBasePath}tum.svg`,
        }, {
            name: 'Netcentric Deutschland',
            desc: 'Where I work at the moment.',
            pos: { lat: 48.1406, lng: 11.5353 },
            coords: "48°08'26\"N 11°32'07\"E",
            icon: `${iconBasePath}netcentric.svg`,
        },
    ];

    const mapBounds = {
        north: 48.17,
        south: 48.12,
        east: 11.65,
        west: 11.44,
    };

    const getInfoWindowContent = (name, coords, desc) => `<h5 class="text-dark">${name}</h5><p class="text-dark text-monospace">${coords}<br>${desc}</p>`;

    const darkStyle = [
        {
            elementType: 'geometry',
            stylers: [{ color: '#212121' }],
        }, {
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }],
        }, {
            elementType: 'labels.text.fill',
            stylers: [{ color: '#757575' }],
        }, {
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#212121' }],
        }, {
            featureType: 'administrative',
            elementType: 'geometry',
            stylers: [{ color: '#757575' }],
        }, {
            featureType: 'administrative.country',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9e9e9e' }],
        }, {
            featureType: 'administrative.land_parcel',
            stylers: [{ visibility: 'off' }],
        }, {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#bdbdbd' }],
        }, {
            featureType: 'administrative.neighborhood',
            stylers: [{ visibility: 'off' }],
        }, {
            featureType: 'poi',
            elementType: 'labels.text',
            stylers: [{ visibility: 'off' }],
        }, {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#757575' }],
        }, {
            featureType: 'poi.business',
            stylers: [{ visibility: 'off' }],
        }, {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#181818' }],
        }, {
            featureType: 'poi.park',
            elementType: 'labels.text',
            stylers: [{ visibility: 'off' }],
        }, {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#616161' }],
        }, {
            featureType: 'poi.park',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#1b1b1b' }],
        }, {
            featureType: 'road',
            elementType: 'geometry.fill',
            stylers: [{ color: '#2c2c2c' }],
        }, {
            featureType: 'road',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
        }, {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#8a8a8a' }],
        }, {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{ color: '#373737' }],
        }, {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#3c3c3c' }],
        }, {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry',
            stylers: [{ color: '#4e4e4e' }],
        }, {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#616161' }],
        }, {
            featureType: 'transit',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#757575' }],
        }, {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#000000' }],
        }, {
            featureType: 'water',
            elementType: 'labels.text',
            stylers: [{ visibility: 'off' }],
        }, {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#3d3d3d' }],
        },
    ];

    const gmap = new googleMaps.Map(mapDomEl, {
        zoom: 10,
        center: { lat: 0, lng: 0 },
        styles: darkStyle,
        disableDefaultUI: true,
        // fullscreenControl: false,
        // zoomControl: false,
        // scaleControl: true,
        // mapTypeControl: false,
        // streetViewControl: false,
        // rotateControl: false,
    });

    gmap.fitBounds(mapBounds);

    const mapInfoWindow = new googleMaps.InfoWindow();

    mapMarkersData.forEach((marker) => {
        const newMarker = new googleMaps.Marker({
            position: marker.pos,
            icon: marker.icon,
            map: gmap,
        });
        const newInfoWindowContent = getInfoWindowContent(marker.name, marker.coords, marker.desc);

        newMarker.addListener('click', () => {
            mapInfoWindow.close();
            mapInfoWindow.setContent(newInfoWindowContent);
            mapInfoWindow.open(gmap, newMarker);
        });
        gmap.addListener('click', () => {
            mapInfoWindow.close();
        });
    });
}

export default initMap;
