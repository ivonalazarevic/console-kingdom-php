<?php
    session_start();
    include("assets/php/connection/connection.php");
    include("assets/php/functions.php");
    korisnikPostoji();
    redirectTo404();
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Console Kingdom</title>
        <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="icon" href=""/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" crossorigin="anonymous"/>
    <link rel="stylesheet" href="assets/css/style.css"/>
    </head>
    <body>
        <?php
            include("assets/php/pages/admin-header.php");
        ?>
        <div id="adminMain">
            <div class="container">
            </div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script type="text/javascript" src="assets/js/custom.js"></script>
    </body>
</html>