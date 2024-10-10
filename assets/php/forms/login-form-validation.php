<?php
    session_start();
    include("../connection/connection.php");
    include("../functions.php");
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $email = $_POST['email'];
        $password = $_POST['password'];

        // regularni izrazi
        $regExpEmail = "/^[a-z][a-z0-9\-_\.]{2,}@([a-z0-9\-_]{2,}\.)+[a-z]{2,}$/";
        $regExpPassword = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/";

        // validiranje
        $noErrors = true;
        if(!preg_match($regExpEmail, $email)) $noErrors = false;
        if(!preg_match($regExpPassword, $password)) $noErrors = false;

        // ispis
        if($noErrors) {
            $securePassword = md5($password);
            $currentUser = getUser($email, $securePassword);
            if($currentUser) {
                if($currentUser->active == 1) {
                    $_SESSION['user'] = $currentUser;
                    http_response_code(200);
                    echo(true);
                } else {
                    http_response_code(403);
                    echo("Your account isnt active");
                }
            } else {
                http_response_code(409);
                echo('This account doesnt exist');
            }
        } else {
            echo("Invalid input.");
            http_response_code(400);
        }
    } else {
        http_response_code(400);
    }
?>