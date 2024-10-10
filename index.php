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
        
        <img src="assets/img/wallpaper.jpg" alt="hero img" class="design">
        <section id="aboutUs" class="bgWhite">
            <div class="container">
                <div id="aboutUsImage">
                    <img src="assets/img/picture.jpg" alt="Full equipment for gaming"/>
                </div>
                <div id="aboutUsText">
                    <h3 class="font-large tc">Our Services</h3>
                    <p class="font-medium"><b>Quality Guarantee</b> - Unlock the ultimate gaming adventure with our extensive collection of consoles and accessories.</p>
                    <br/>
                    <p class="font-medium"><b>Game Library and Rentals</b> - Dive into a world of endless entertainment with our latest console offerings! Not sure which game to choose? Try before you buy with our game rental service and discover your next favorite adventure.</p>
                    <br/>
                    <p class="font-medium"><b>Expert Advice and Support</b>: Have questions about gaming hardware, software, or accessories? Our knowledgeable staff is here to provide expert advice, recommendations, and personalized assistance to help you make the most of your gaming experience.</p>
                </div>
            </div>
            <div class="container">
                <div id="aboutUsImage">
                    <img src="assets/img/pexels.jpg" alt="PS Controllers"/>
                </div>
                <div id="aboutUsText">
                    <p class="font-medium"><b>Console Repairs and Maintenance</b>: Experience technical difficulties? Don't let a malfunctioning console ruin your gaming fun. Our skilled technicians are here to help with fast and reliable repair services, ensuring you can get back to gaming in no time.</p>
                    <br/>
                    <p class="font-medium"><b>Accessory Selection</b>: Enhance your gaming setup with our wide range of accessories, including controllers, headsets, charging docks, and more. Whether you're looking for performance upgrades or stylish additions, we have everything you need to customize your gaming experience.</p>
                    <br/>
                    <p class="font-medium"><b>Console Sales and Trade-Ins</b>: Explore our extensive collection of gaming consoles, from the latest releases to beloved classics. Looking to upgrade? Take advantage of our trade-in program to swap your old console for the newest model and get back in the game without breaking the bank.</p>
                </div>
            </div>
        </section>
      
        <?php
            include("assets/php/pages/footer.php");
        ?>
      
    </body>
</html>