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
        <script src="https://kit.fontawesome.com/10ae70a318.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="assets/css/style.css"/>
    </head>
    <body>
        <?php
            include("assets/php/pages/header.php");
        ?>
        <section id="contactMain">
            <div class="heading">
                <h2 class="font-xl">Contact</h2>
                <span class="underline"></span>
            </div>
            <div class="container">
                <div id="contactForm" class="contactCol container">
                    <form>
                        <div class="formGroup">
                            <label for="tbEmail" class="font-small">Email:</label>
                            <input type="email" name="tbEmail" id="tbEmail" class="font-small textField" autocomplete="off"/>
                            <label class="errorMessage font-small">examplename@example.com</label>
                        </div>
                        <div class="formGroup">
                            <label for="tbName" class="font-small">Name:</label>
                            <input type="text" name="tbName" id="tbName" class="font-small textField" autocomplete="off"/>
                            <label class="errorMessage font-small">
                                <ul>
                                    <li>-Name must be 3+ chars long</li>
                                    <li>- Each word must start with uppercase</li>
                                </ul>
                            </label>
                        </div>
                        <div class="formGroup">
                            <label for="tbMessage" class="font-small">Message:</label>
                            <textarea name="tbMessage" id="tbMessage" cols="30" rows="10" class="font-small textField" maxlength="500"></textarea>
                            <label class="errorMessage font-small">Min 20 chars, max 500 !</label>
                        </div>
                        <span class="textCenter">
                            <button name="btnSend" id="btnSend" class="btnPrimary">
                                <i class="fa-solid fa-envelope"></i>
                            </button>
                        </span>
                    </form>
                </div>
            </div>
        </section>
        <?php
            include("assets/php/pages/footer.php");
        ?>
    </body>
</html>
