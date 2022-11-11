<?php

    
    //import js fontawesome

    echo '<script type="text/javascript" src="' . $pub_url . 'vendor/font-awesome/js/all.js"></script>';
    echo '<script type="text/javascript" src="' . $pub_url . 'vendor/leaflet/leaflet.js"></script>';
    echo '<script type="text/javascript" src="' . $pub_url . 'src/js/map.js"></script>';
    
    require $view_rep . 'footer.php';
