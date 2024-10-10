<?php
    session_start();
    include("assets/php/connection/connection.php");
    include("assets/php/functions.php");
    korisnikPostoji();
    if(!isset($_SESSION['user'])) {
        header('Location: 401.php');
    }
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Console Kingdom</title>
        <meta name="keywords" content="Controller, Joystick, Console,Xbox,Gaming,Playstation, Nintendo, Entertainment"/>
        <meta name="description" content="Discover the ultimate destination for gaming enthusiasts at Console Kingdom. Explore a wide selection of gaming consoles, accessories, and services designed to elevate your gaming experience."/>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href=""/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" crossorigin="anonymous"/>
        <link rel="stylesheet" href="assets/css/style.css"/>
    </head>
    <body>
        <?php
            include("assets/php/pages/header.php");
        ?>
        <section id="cartMain" class="bgWhite main klasa">
            <div class="container">
                <div id="cartList" class="tableWrapper">
                    <table class="font-small table" cellspacing="0">
                        <thead>
                            <tr>
                                <td class="colDeviceName">Device name</td>
                                <td class="colPrice">Price</td>
                                <td class="colQuantity">Quantity</td>
                                <td class="colRemove"><i class="fas fa-trash"></i></td>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <div id="checkout">
                    <form>
                        <div class="formGroup">
                            <label for="tbName" class="font-small">Full name:</label>
                            <input type="text" name="tbName" id="tbName" class="textField font-small" autocomplete="off"/>
                            <label class="errorMessage">
                                <ul class="font-small">
                                    <li>- A name cannot have less than 3 characters</li>
                                    <li>- Has to be at least 2 words</li>
                                    <li>- Each word must be capitalized</li>
                                </ul>
                            </label>
                        </div>
                        <div class="formGroup">
                            <label for="tbEmail" class="font-small">Email:</label>
                            <input type="email" name="tbEmail" id="tbEmail" class="textField font-small" autocomplete="off"/>
                            <label class="errorMessage font-small">examplename@example.com</label>
                        </div>
                        <div class="formGroup">
                            <label for="tbAddress" class="font-small">Address:</label>
                            <input type="text" name="tbAddress" id="tbAddress" class="textField font-small" autocomplete="off"/>
                            <label class="errorMessage font-small">Strete</label>
                        </div>
                    </form>
                    <br/>
                    <span id="totalPrice" class="font-small">Total Price: <span class="bold"></span></span>
                    <br/>
                    <button id="btnCheckout" class="font-small btnPrimary">Checkout</button>
                </div>
            </div>
            
        </section>
        <?php
            include("assets/php/pages/footer.php");
        ?>
    </body>
</html>