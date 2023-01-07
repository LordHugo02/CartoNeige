var map = L.map('map').setView([43.6, 1.44], 7);



//style par défaut

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

//style carte neige avec station de ski

L.tileLayer(`https://api.maptiler.com/maps/winter/{z}/{x}/{y}.png?key=${mapTilerKey}`,{ //style URL
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 1,
    attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
    crossOrigin: true
}).addTo(map);

//précipitation neige

// L.tileLayer(`https://api.maptiler.com/maps/winter/{z}/{x}/{y}.png?key=${key}`,{ //style URL
//     tileSize: 512,
//     zoomOffset: -1,
//     minZoom: 1,
//     attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
//     crossOrigin: true
// }).addTo(map);



