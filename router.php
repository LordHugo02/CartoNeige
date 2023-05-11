<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="src/css/style.css"/>

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
$.get("http://maps.theia-land.fr/neige.json", function(data){
    $('#dateValueMenu').text("Carte mise à jour le "+data["dateNeige"]);
    $('#dateValueMenu').css("font-weight","Bold");
    $('#dateValue').text(data["dateNeige"]);
});

function openModal(){
    $('#modalInfo').modal('show');
}

	// Variable Javascript de style pour l'élément qui permet l'ajout de fichier
			var style = {
				color: 'red',
				opacity: 1.0,
				fillOpacity: 1.0,
				weight: 2,
				clickable: false
			};

// Ajout du control "fichier" sur la map
			L.Control.FileLayerLoad.LABEL = '<a title="Charger un fichier GPX, KML ou GeoJSON"><img class="icon" src="folder.svg" alt="file icon"/></a>';
			control = L.Control.fileLayerLoad({
				fileSizeLimit: 10000,
				fitBounds: true,
				layerOptions: {
					style: style,
					pointToLayer: function (data, latlng) {
						return L.circleMarker(
							latlng,
							{ style: style }
						);
					}
				}
			});

			control.addTo(map);

			control.loader.on('data:loading', function (e) {
				alert("Loading ...");
				$("#loadingContainer").show();
			});

			// Gestion des evenements après l'upload d'un fichier
			control.loader.on('data:loaded', function (e) {
				alert("Loaded !");
				var layer = e.layer;
				console.log(layer);
			});
			control.loader.on('data:error', function (error) {
				alert("Error : check log");
				console.error(error);
			});
</script>
</body>
</html>



