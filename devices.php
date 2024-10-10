<?php
    session_start();
    include("assets/php/connection/connection.php");
    include("assets/php/functions.php");
    korisnikPostoji();
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Console Kingdom</title>
        <meta name="keywords" content="Controller, Joystick, Console,Xbox,Gaming,Playstation, Nintendo, Entertainment"/>
        <meta name="description" content="Discover the ultimate destination for gaming enthusiasts at Console Kingdom. Explore a wide selection of gaming consoles, accessories, and services designed to elevate your gaming experience."/>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="assets/img/logoprimary.ico"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" crossorigin="anonymous"/>
        <link rel="stylesheet" href="assets/css/style.css"/>
    </head>
    <body>
        <?php
            include("assets/php/pages/header.php");
        ?>
        <div class="container">

            <section id="devicesMain" class="bgWhite main">
                
                <div id="devicesContainer"></div>
                
            </section>
        </div>
        <?php
            include("assets/php/pages/footer.php");
        ?>
    </body>
</html>