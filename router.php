<html>
<head>
    <title>Cartoneige</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="src/css/style.css"/>
	<!-- Load import file -->
	<script src="https://unpkg.com/togeojson@0.16.0"></script>
	<script src="https://unpkg.com/leaflet-filelayer@1.2.0"></script>
	<link rel="stylesheet" href="./esri-leaflet-geocoder.css">
	<!-- Barre de recherche -->
    <script src="./esri-leaflet-geocoder.js"></script>
</head>
<body>
<?php

require $controller_rep . 'header.php';

switch ($_url_tab[0]) {

    default:

        require $controller_rep . 'cartoneige.php';
        break;
}
require $controller_rep . 'footer.php';
?>
<script>
// Ajout du control "fichier" sur la map
L.Control.fileLayerLoad({
    // Allows you to use a customized version of L.geoJson.
    // For example if you are using the Proj4Leaflet leaflet plugin,
    // you can pass L.Proj.geoJson and load the files into the
    // L.Proj.GeoJson instead of the L.geoJson.
    layer: L.geoJson,
    // See http://leafletjs.com/reference.html#geojson-options
    layerOptions: {style: {color:'red'}},
    // Add to map after loading (default: true) ?
    addToMap: true,

    // File size limit in kb (default: 1024) ?
    fileSizeLimit: 100000,
    // Restrict accepted file formats (default: .geojson, .json, .kml, and .gpx) ?
    formats: [
        '.geojson',
        '.kml',
        '.json'
    ]
}).addTo(map);

var control = L.Control.fileLayerLoad();
control.loader.on('data:loading', function (e) {
				alert("Loading ...");
				$("#loadingContainer").show();
});

var control = L.Control.fileLayerLoad();
control.loader.on('data:loaded', function (event) {
    // event.layer gives you access to the layers you just uploaded!

    // Add to map layer switcher
    layerswitcher.addOverlay(event.layer, event.filename);
});

var control = L.Control.fileLayerLoad();
control.loader.on('data:error', function (error) {
    // Do something usefull with the error!
    console,error(error);
});
</script>
</body>
</html>



