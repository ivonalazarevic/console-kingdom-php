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
        <section id="authorMain" class="bgWhite main">
            <div class="heading">
                <h2 class="font-xl">Author</h2>
                <div class="underline"></div>
            </div>
            <div class="container my-5 py-5 z-depth-1">
      <section class="px-md-5 mx-md-5 dark-grey-text text-center text-lg-left">
        <div class="design-2">
          <div
            class="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">
            <img
              src="assets/img/me.jpeg"
              class="img-fluid"
              alt="author"
              id="slika"
            />
          </div>
          <div class="col-lg-6 mb-4 mb-lg-0">

            <h5 class="font-weight-bold mb-3 naslov">Ivona Lazarevic 112/20</h5>

            <p class="text-muted mb-4 centar">
            My name is Ivona Lazarevic. I'm from Pancevo. I am 22 years old and I am a student at an ICT high school in Belgrade. My goal is to further my education in the field of internet technologies. I enjoy working, especially in a team!<br/> Contact mail: ivona.lazarevic.112.20@ict.edu.rs
            </p>

          
          </div>
        </div>
      </section>
    </div>
        </section>
        <?php
            include("assets/php/pages/footer.php");
        ?>
    </body>
</html>
