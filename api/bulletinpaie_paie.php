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

 $jwt = isset($_POST['jwt']) ? $_POST['jwt'] : "";

if ( $jwt && $_POST['action'] == "bulletinpaie_paie_list") {
    
   
    $decoded = JWT::decode($jwt, new Key($key, 'HS256'));

    if ($decoded->data->id) {
        $db = new database();
        $conn = $db->getConnection();

        $stmt = $conn->prepare('SELECT bp_id , type , rentabilite ,  DATE_FORMAT(`date`,"%d/%m/%Y") AS date  , salaireBase , netPayer   , DATE_FORMAT(`dateGen`,"%d/%m/%Y") AS dateGen    FROM  paie_bulletinpaie  WHERE salarie_id  = :iduser');
        $stmt->execute(array(':iduser' => $decoded->data->id));
        $user_bulletin = $stmt->fetchAll(PDO::FETCH_OBJ);
       // print_r($user_bulletin);
        //if ($user_bulletin) {
                   
            http_response_code(200);

            echo json_encode(
                array(
                    "message" => "Access is allowed",
                    "res" => $user_bulletin
                )
            );
        // } else {
        //     http_response_code(401);

        //     echo json_encode(
        //         array(
        //             "message" => "Your access is denied",
        //             "error" => "error"
        //         )
        //     );
        // }

    } else {

        http_response_code(401);

        echo json_encode(array("message" => "Access denied"));
    }

}  
