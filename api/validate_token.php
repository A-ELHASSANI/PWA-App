<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once "config/core.php";
include_once "config/database.php";

require "libs/php-jwt/vendor/autoload.php";

use \Firebase\JWT\JWT;
use \Firebase\JWT\Key;

$data = json_decode(file_get_contents("php://input"));

$jwt = isset($data->jwt) ? $data->jwt : "";

if ($jwt) {

    session_start();

    $decoded = JWT::decode($jwt, new Key($key, 'HS256'));
   
    if ($decoded->data->id) {
        $db = new database();
        $conn = $db->getConnection();

        $stmt = $conn->prepare('SELECT  nom , prenom ,cin , date_naissance , rib ,num_cnss , telephone , adresse , email ,photo
        FROM users_collabos WHERE iduser = :iduser');
        $stmt->execute(array(':iduser' => $decoded->data->id));
        $user = $stmt->fetch(PDO::FETCH_OBJ);
        
        if ($user) {
            $_SESSION['insiders'] = $user;
        
            http_response_code(200);

            echo json_encode(
                array(
                    "message" => "Access is allowed",
                    "data" => $decoded->data
                )
            );
        } else {
            http_response_code(401);

            echo json_encode(
                array(
                    "message" => "Your access is denied",
                    "error" => "error"
                )
            );
        }

    } else {

        http_response_code(401);

        echo json_encode(array("message" => "Access denied"));
    }

}  
