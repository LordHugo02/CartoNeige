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
</body>
</html>



