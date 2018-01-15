function initMap() {
  var dark_style =
    [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#212121"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#212121"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#181818"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1b1b1b"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#2c2c2c"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8a8a8a"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#373737"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#3c3c3c"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#4e4e4e"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#3d3d3d"
          }
        ]
      }
    ];

  var icon_base = "../img/map/";
  var map_markers_data = [
    {
      "name": "Puchheim",
      "desc": "Where I live.",
      "pos": {lat: 48.1800, lng: 11.3736},
      "coords": "48°10'48\"N | 11°22'25\"E",
      "icon": icon_base + "home_40.svg"
    },
    {
      "name": "Technical University of Munich",
      "desc": "Where I work and study.",
      "pos": {lat: 48.1489, lng: 11.5675},
      "coords": "48°08'56\"N | 11°34'03\"E",
      "icon": icon_base + "tum_40.svg"
    }
  ];

  var bounds = {
    north: 48.19,
    south: 48.14,
    east: 11.57,
    west: 11.36
  };

  var map = new google.maps.Map(document.getElementById("google_map"), {
    zoom: 10,
    center: {lat: 0, lng: 0},
    styles: dark_style,
    fullscreenControl: false,
    zoomControl: true,
    scaleControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    rotateControl: false
  });

  map.fitBounds(bounds);

  window.mapmarkers = [];
  window.infowindow = null;

  for (var i = 0; i < map_markers_data.length; ++i) {
    mapmarkers.push(new google.maps.Marker({
      position: map_markers_data[i].pos,
      icon: map_markers_data[i].icon,
      map: map,
      optimized: false
    }));

    mapmarkers[i].infowindow = "<h5 class='text-dark'>" + map_markers_data[i].name + "</h5><p class='text-dark text-monospace'>" + map_markers_data[i].coords + "<br />" + map_markers_data[i].desc + "</p>";

    mapmarkers[i].addListener("click", function(e) {
      if (infowindow) {
        infowindow.close();
      }
      infowindow = new google.maps.InfoWindow();
      infowindow.setContent(this.infowindow);
      infowindow.open(map, this);
    });
    map.addListener("click", function(e) {
      if (infowindow) {
        infowindow.close();
      }
    });

  } // for map_markers_data

}// initMap
