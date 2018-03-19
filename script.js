

function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: 39.431155, lng: 22.692261}
  });

  // Create an array of alphabetical characters used to label the markers.
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length]
    });
  });
  var infoWin = new google.maps.InfoWindow();
  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  var markers = locations.map(function(location, i) {
  var marker = new google.maps.Marker({
      position: location
      });
    google.maps.event.addListener(marker, 'click', function(evt) {
      infoWin.setContent(location.info);
      infoWin.open(map, marker);
       })
    return marker;
       });

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});


}


var locations = [
  {lat: 40.6376125, 
   lng: 22.9477395,
   info: "<br>Το κουμπί</br><br>Πελοποννήσου 2, Θεσσαλονίκη 546 31</br>"},
  {lat: 38.070993, 
   lng: 23.812312,
   info: "<br>Μέντα</br><br>Αγ. Θεοδώρων 10, Κηφισιά</br>"},
  {lat: 38.071209, 
   lng: 23.811747,
   info: "<br>Αμαρυλλίς cafe</br><br>Κυριάκου 15, Κηφισιά</br>"},
  {lat: 38.071266, 
   lng: 23.812795,
   info: "<br>Ninnolo</br><br>Αγ. Δημητρίου 8, Κηφισιά</br>"},
  {lat: 38.070819, 
   lng: 23.812514,
   info:"<br>Petite fleur</br><br>Αγ. Θεοδώρων 4, Κηφισιά</br>"},
  {lat: 38.059598, 
   lng: 23.795237,
   info:"<br>FLORIDITA</br><br>Λεωφ. Ειρήνης 14, Πεύκη</br>"},
  {lat: 38.072335, 
   lng: 23.812744,
   info:"<br>Βάρσος</br><br>Κασσαβέτη 5, Κηφισιά</br>"},
  {lat: 37.984158, 
   lng: 23.732237,
   info:"<br>Mama Tierra</br><br>Ακαδημίας 84 & Εμμανουήλ Μπενάκη, Αθήνα</br>"},
  {lat: 37.976058, 
   lng: 23.728339,
   info:"<br>Amoroso Cafe</br><br>Καπνικαρέας 6, Αθήνα</br>"},
  {lat: 37.977509, 
   lng: 23.727654,
   info:"<br>Telaro</br><br>Αιόλου 33, Αθήνα</br>"},
  {lat: 37.978106, 
   lng: 23.727978,
   info:"<br>MamaRoux</br><br>Αιόλου 48, Αθήνα</br>"},
  {lat: 37.999488, 
   lng: 23.793308,
   info:"<br>Λείριον</br><br>Σαρανταπόρου 25(Χώρος Τέχνης & Βιβλιοθήκης)</br>"},
  {lat: 38.020788, 
   lng: 23.800860,
   info:"<br>7th Thought-Coffee&Fashion House</br><br>Αγίας Παρασκευής 29-31</br>"},
  {lat: 37.989557, 
   lng: 23.728067,
   info:"<br>Το ΒΑΖΑΚΙ Juice-bar</br><br>Αριστοτέλους 33, Αθήνα</br>"},
  {lat: 40.845562, 
   lng: 25.877224,
   info:"<br>Καφεβιβλιοπωλείο ΚΑΦΚΑ</br><br>Εμπορίου 41, Αλεξανδρούπολη</br>"},
   {lat: 40.633119, 
   lng: 22.943714,
   info:"<br>Το Τσάι</br><br>Καρόλου Ντήλ 27, Θεσσαλονίκη</br>"},
   {lat: 40.730968, 
   lng: 22.921068,
   info:"<br>Estrella</br><br>Παύλου Μελά 48, Κέντρο, Θεσσαλονίκη</br>"},
  {lat: 37.977310, 
   lng: 23.730163,
   info:"<br>Estrella</br><br>Ρόμβης 24α, πλησίον πλ. Συντάγματος, Αθήνα</br>"},
  {lat: 38.072998, 
   lng: 23.812497,
   info:"<br>Gozleme</br><br> Λ.Κηφισίας 238-240, Κηφισιά</br>"}
]

google.maps.event.addDomListener(window, "load", initMap);

 
