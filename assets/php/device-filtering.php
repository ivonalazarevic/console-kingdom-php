<?php
    include("connection/connection.php");
    include("functions.php");
    try {
        $query = "SELECT * FROM devices WHERE active = 1";
        global $connection;
        $execution = $connection->prepare($query);
        $execution->execute();
        $result = $execution->fetchAll();
        $numberOfDevices = count($result);
        $devicesPerPage = 6;
        if(isset($_GET['page'])) {
            $page = ($_GET['page'] - 1) * $devicesPerPage;
            $query .= " LIMIT $page, $devicesPerPage";
        }
        //
        $execution = $connection->prepare($query);
        $execution->execute();
        $result = $execution->fetchAll();
        $output = printDevices($result, $numberOfDevices);
        $response = ["response"=>$output];
        http_response_code(200);
        header("Content-type: application/json");
        echo(json_encode($response));
    } catch(PDOException $e) {
        http_response_code(500);
        echo($e->getMessage());
    }
?>