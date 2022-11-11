<?php
    require $controller_rep . 'header.php';
    
    switch ($_url_tab[0]) {
        
        default:
            require $controller_rep . 'cartoneige.php';
            break;
    }
    
    require $controller_rep . 'footer.php';
