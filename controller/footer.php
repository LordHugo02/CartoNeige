<?php

    //import js fontawesome
    echo '<script type="text/javascript" src="' . $pub_url . 'config/config.js"></script>';
    echo '<script type="text/javascript" src="' . $pub_url . 'vendor/font-awesome/js/all.js"></script>';
    echo '<script type="text/javascript" src="' . $pub_url . 'vendor/leaflet/leaflet.js"></script>';
    echo '<script type="text/javascript" src="' . $pub_url . 'src/js/map.js"></script>';

    //Load Leaflet from CDN
	echo '<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/>';
    echo '<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>';

    //Load import file
    echo '<script src="https://unpkg.com/togeojson@0.16.0"></script>';
    echo '<script src="https://unpkg.com/leaflet-filelayer@1.2.0"></script>';

    //Load Esri Leaflet from CDN
    echo '<script src="https://unpkg.com/esri-leaflet@2.3.3/dist/esri-leaflet.js" integrity="sha512-cMQ5e58BDuu1pr9BQ/eGRn6HaR6Olh0ofcHFWe5XesdCITVuSBiBZZbhCijBe5ya238f/zMMRYIMIIg1jxv4sQ==" crossorigin=""></script>';

    //Load Esri Leaflet Geocoder from CDN
    echo '<link rel="stylesheet" href="https://unpkg.com/esri-leaflet-geocoder@2.3.2/dist/esri-leaflet-geocoder.css" integrity="sha512-IM3Hs+feyi40yZhDH6kV8vQMg4Fh20s9OzInIIAc4nx7aMYMfo+IenRUekoYsHZqGkREUgx0VvlEsgm7nCDW9g==" crossorigin=""/>';
    echo '<script src="https://unpkg.com/esri-leaflet-geocoder@2.3.2/dist/esri-leaflet-geocoder.js" integrity="sha512-8twnXcrOGP3WfMvjB0jS5pNigFuIWj4ALwWEgxhZ+mxvjF5/FBPVd5uAxqT8dd2kUmTVK9+yQJ4CmTmSg/sXAQ==" crossorigin=""></script>';

    //JQUERY
    echo '<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>';

    //Latest compiled and minified JavaScript
    echo '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>';
    echo '<script src="https://cdn.jsdelivr.net/npm/leaflet-easybutton@2/src/easy-button.js"></script>';
    require $view_rep . 'footer.php';