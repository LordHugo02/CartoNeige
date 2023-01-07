
<?php
    require __DIR__ . '/config/config.php';
    
    session_start();
    $logs_rep = "";
    ini_set('display_errors', 1); // Pour afficher les erreurs
    ini_set('error_log', $logs_rep . 'error.log'); // Pour enregistrer les erreurs dans un fichier
    error_reporting(E_ALL); // Pour gérer toutes les erreurs
    
    /**
     * On nettoie l'URL
     * @var string $url
     */
    if(!empty($_GET['url'])) {
        $url = $_GET['url'];
        if($url[0] == '/') {
            $url = substr($url, 1);
        }
        if(strlen($url) > 0 && $url[strlen($url)-1] == '/') {
            $url = substr($url, 0, -1);
        }
    }else{
        $url = '';
    }
    
    
    /**
     * On décompose l'URL
     * @var array $_url_tab
     */
    $_url_tab = explode('/', $url);
    require __DIR__ . '/router.php';

