<?php
    session_start();
    include("../connection/connection.php");
    include("../functions.php");
    redirectTo404();
    $response = ["response"=>printAdminSectionDevices()];
    http_response_code(200);
    header("Content-type: application/json");
    echo(json_encode($response));
?>