var map = L.map('map').setView([43.6, 1.44], 7);
// Ajout de l'echelle sur la map
L.control.scale().addTo(map);

//style par défaut

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);


//style carte neige avec station de ski




//précipitation neige

// L.tileLayer(`https://api.maptiler.com/maps/winter/{z}/{x}/{y}.png?key=${key}`,{ //style URL
//     tileSize: 512,
//     zoomOffset: -1,
//     minZoom: 1,
//     attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
//     crossOrigin: true
// }).addTo(map);



// L.tileLayer.wms(
//     "http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi",
//     {
//         layers: 'nexrad-n0r-900913',
//         transparent: 'true',
//         format: 'image/png',
//         maxZoom: 21,
//         opacity: 1
//     }
// ).addTo(map);


// var snow = L.OWM.snow({opacity: 0.5, appId: OWM_API_KEY});


//ajout des anciens layers de la map

// Couche WMTS Theia
var neige = L.tileLayer(
    "http://maps.theia-land.fr/mapcache/wmts?" +
    "&REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0" +
    "&STYLE=default" +
    "&TILEMATRIXSET=GoogleMapsCompatible" +
    "&FORMAT=image/png"+
    "&LAYER=neige"+
    "&TILEMATRIX={z}" +
    "&TILEROW={y}" +
    "&TILECOL={x}",
    {
        maxZoom : 20,
        opacity : 1,
        maxNativeZoom:10,
        attribution : "IGN-F/Geoportail",
        //tileSize : 256 // les tuiles du Géooportail font 256x256px
    }
);

var pentes = L.tileLayer.wms(
    "https://wxs.ign.fr/altimetrie/geoportail/r/wms?",
    {
        layers: 'GEOGRAPHICALGRIDSYSTEMS.SLOPES.MOUNTAIN',
        transparent: 'true',
        format: 'image/png',
        maxZoom : 21,
        opacity : 1,
    }
);

var stationVerte = L.tileLayer.wms(
    "https://wxs.ign.fr/cartovecto/geoportail/v/wms?",
    {
        layers: 'STATIONSVERTES',
        transparent: 'true',
        format: 'image/png',
        maxZoom : 21,
        opacity : 1,
    });

var villagesEtape = L.tileLayer.wms(
    "https://wxs.ign.fr/cartovecto/geoportail/v/wms?",
    {
        layers: 'VILLAGESETAPE',
        transparent: 'true',
        format: 'image/png',
        maxZoom : 21,
        opacity : 1,
    }
);

var routes = L.tileLayer.wms(
    "https://magosm.magellium.com/geoserver/ows?",
    {
        layers: 'magosm:france_highways_line',
        transparent: 'true',
        format: 'image/png',
        maxZoom: 21,
        opacity: 1
    }
);

var randos = L.tileLayer.wms(
    "https://magosm.magellium.com/geoserver/ows?",
    {
        layers: 'magosm:france_hiking_foot_routes_line',
        transparent: 'true',
        format: 'image/png',
        maxZoom: 21,
        opacity: 1
    }
);

var velos = L.tileLayer.wms(
    "https://magosm.magellium.com/geoserver/ows?",
    {
        layers: 'magosm:france_bicycle_mtb_routes_line',
        transparent: 'true',
        format: 'image/png',
        maxZoom: 21,
        opacity: 1
    }
);

//Intempéries
var nuages = L.tileLayer(`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${openWeatherKey}`,{});
var precipitation = L.tileLayer(`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${openWeatherKey}`,{});
var temperatures = L.tileLayer(`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${openWeatherKey}`,{});
var vent = L.tileLayer(`https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${openWeatherKey}`,{});
var pression = L.tileLayer(`https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=${openWeatherKey}`,{});

//Base de maps
var stations = L.tileLayer(`https://api.maptiler.com/maps/winter/{z}/{x}/{y}.png?key=${mapTilerKey}`,{ //style URL
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 1,
    attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
    crossOrigin: true
});

var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {}),
    osm  = L.tileLayer('http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {}),
    base = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {}),
    esri = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {});


// Ajout des différentes couches au menu du choix du fond de carte sur la map
var baseLayers = {
    "Stations": stations,
    "Topo map": topo,
    "OSM": osm,
    "Base maps": base,
    "Esri": esri
};

// Ajout de la couche de neige pour pouvoir l'enlever si besoin
var overlays = {
    "Neige": neige,
    "Routes": routes,
    "Randonnées": randos,
    "Pistes cyclable": velos,
    "Pentes": pentes,
    "Stations Verte": stationVerte,
    "Villages étape": villagesEtape,
    "Nuages": nuages,
    "Precipitation": precipitation,
    "Vent": vent,
    "Temperatures": temperatures,
    "Pression": pression,
};

// Ajout du controleur pour modifier les layers
L.control.layers(baseLayers, overlays).addTo(map);

// Evenement lors de la modification du curseur
slider.addEventListener('input', function () {
    sliderValue.textContent = Math.trunc((slider.value * 100)) + '%';
    neige.setOpacity(slider.value);
    pentes.setOpacity(slider.value);
    pentes.setOpacity(slider.value);
}, false);

// Mise à jour du label opacité
function updateOpacity(value){
    sliderValue.textContent = Math.trunc((value * 100)) + '%';
    neige.setOpacity(value);
    pentes.setOpacity(value);
}

function transposeProjection(x, y, src, dest) {
    const p = new proj4.toPoint([x, y]);
    return proj4.transform(src, dest, p);
}

function ctoc(){

    fetch("https://api.camptocamp.org/outings").then(function(res) {
        if (res.ok) {
            return res.json();
        }
    }).then(function(value) {
        value.documents.forEach(function (element) {
            let tabGeo = JSON.parse(element.geometry.geom);

            let x = tabGeo.coordinates[0];
            let y = tabGeo.coordinates[1];

            const geodesicProj = new proj4.Proj("WGS84");
            const mercatorProj = new proj4.Proj("EPSG:3857");

            let geo = transposeProjection(x, y, mercatorProj, geodesicProj);

            L.marker(geo.x, geo.y).addTo(map);
        })
    }).catch(function(err) {
    });
}
ctoc()

// Variable Javascript de style pour l'élément qui permet l'ajout de fichier

var style = {
    color: 'red',
    opacity: 1.0,
    fillOpacity: 1.0,
    weight: 2,
    clickable: false
};

/*
// Ajout du contrôle de recherche de ville
const searchControl = L.esri.Geocoding.geosearch({title:"Rechercher sur la carte", placeholder:"Ville, rue ou lieu qui se trouve sur la carte."}).addTo(map);
// Action lors d'une recherche de ville effectuée
searchControl.on("results", function (data) {
    console.log("data", data);
});
*/
//infos

// https://github.com/buche/leaflet-openweathermap/blob/master/example/files/map.js

// https://www.meteociel.fr/modeles/arome.php
