function initMap() {
  var styleArray=[
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f1fffc"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ff0000"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#6291c1"
            }
]
            },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#7cd8e3"
            },
            {
                "gamma": "0.45"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "hue": "#00f2ff"
            },
            {
                "gamma": "0.88"
            },
            {
                "lightness": "0"
            },
            {
                "saturation": "0"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "gamma": "0.86"
            },
            {
                "lightness": "-14"
            },
            {
                "saturation": "0"
            },
            {
                "weight": "1.07"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#729db8"
            },
            {
                "saturation": "-9"
            },
            {
                "weight": "1.07"
            },
            {
                "gamma": "1.85"
            },
            {
                "lightness": "44"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#4fa7e3"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#3fa4cd"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ff0000"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#00a4ff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "hue": "#00f9ff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#00e5ff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#6ad0ef"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "hue": "#00ffff"
            },
            {
                "gamma": "3.78"
            },
            {
                "saturation": "0"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#00beff"
            },
            {
                "weight": "1.03"
            },
            {
                "lightness": "-38"
            },
            {
                "saturation": "0"
            },
            {
                "gamma": "0.86"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#3e8a97"
            },
            {
                "saturation": "0"
            },
            {
                "lightness": "7"
            },
            {
                "gamma": "0.72"
            },
            {
                "weight": "0.86"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "saturation": "16"
            },
            {
                "lightness": "18"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "labels.icon",
        "stylers": [
            {
                "hue": "#00c5ff"
            },
            {
                "saturation": "-27"
            },
            {
                "visibility": "on"
            },
            {
                "gamma": "0.79"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "-16"
            },
            {
                "saturation": "0"
            },
            {
                "gamma": "0.72"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
];

  // var collection = new Array();

  // collection[0] = new google.maps.LatLng(40.736968, -73.992232);
  // collection[1] = new google.maps.LatLng(40.588451, -73.811456);
  // collection[2] = new google.maps.LatLng(40.468235, -73.995358);
  // collection[3] = new google.maps.LatLng(40.588891, -73.624323);
  // collection[4] = new google.maps.LatLng(40.583045, -73.656797);
  
  var d12 = {lat: 40.736968, lng: -73.992232};
  var rockaway = {lat: 40.588451, lng: -73.811456};
  var cove = {lat: 40.468235, lng: -73.995358};
  var lidbeach = {lat: 40.588891, lng: -73.624323};
  var longbeach = {lat: 40.583045, lng: -73.656797};

  var map = new google.maps.Map(document.getElementById('map'), {
    styles: styleArray,
    zoom: 10,
    center: {lat: 40.652540, lng: -73.987406},
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading">D 12</h3>';

  var contentString2 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading">Rockaway</h3>';

var contentString3 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading">The Cove</h3>';

var contentString4 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading">Lido Beach</h3>';

var contentString5 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading">Long Beach</h3>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 200
  });

  var infowindow2 = new google.maps.InfoWindow({
    content: contentString2,
    maxWidth: 200
  });

  var infowindow3 = new google.maps.InfoWindow({
    content: contentString3,
    maxWidth: 200
  });

  var infowindow4 = new google.maps.InfoWindow({
    content: contentString4,
    maxWidth: 200
  });

  var infowindow5 = new google.maps.InfoWindow({
    content: contentString5,
    maxWidth: 200
  });

  var marker = new google.maps.Marker({
    position: d12,
    map: map,
    title: 'D 12'
  });

  var marker2 = new google.maps.Marker({
    position: rockaway,
    map: map,
    title: 'Rockaway'
  });

  var marker3 = new google.maps.Marker({
    position: cove,
    map: map,
    title: 'The Cove'
  });

  var marker4 = new google.maps.Marker({
    position: lidbeach,
    map: map,
    title: 'Lido Beach'
  });

  var marker5 = new google.maps.Marker({
    position: longbeach,
    map: map,
    title: 'Long Beach'
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  marker2.addListener('click', function() {
  infowindow2.open(map, marker2);
});
  marker3.addListener('click', function() {
  infowindow3.open(map, marker3);
});
  marker4.addListener('click', function() {
  infowindow4.open(map, marker4);
});
  marker5.addListener('click', function() {
  infowindow5.open(map, marker5);
});
}
