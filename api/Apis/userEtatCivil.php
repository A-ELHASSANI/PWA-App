<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once "../config/core.php";
include_once "../config/database.php";
require "../libs/php-jwt/vendor/autoload.php";

use \Firebase\JWT\JWT;
use \Firebase\JWT\Key;


$data = json_decode(file_get_contents("php://input"));

$jwt = isset($data->jwt) ? $data->jwt : "";

if ($jwt) {
    $decoded = JWT::decode($jwt, new Key($key, 'HS256'));

    if ($decoded->data->id) {
       $id =  $decoded->data->id;
        $db = new database();
        $conn = $db->getConnection();

        $stmt = $conn->prepare('SELECT fichier_joint , id_type , type_doc FROM users_collabos uc 
        JOIN users_collabos_files ucf on uc.iduser = ucf.user_collabo_id 
        JOIN adm_type_doc atd on atd.id_type = ucf.type_id
        WHERE uc.iduser = :iduser');
        $stmt->execute(array(':iduser' => $id));
        $userEtat = $stmt->fetchAll(PDO::FETCH_OBJ);

        if ($userEtat) {
            http_response_code(200);

            echo json_encode(
               ($userEtat)
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
