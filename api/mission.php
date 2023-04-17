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

if ( $jwt && $_POST['action'] == "missions_list") {
    
   
    $decoded = JWT::decode($jwt, new Key($key, 'HS256'));
//echo $decoded->data->id ;// 6655
    if ($decoded->data->id) {
        $db = new database();
        $conn = $db->getConnection();
        $sql = "SELECT uc.user_collabo_id , num_contrat , avenant , DATE_FORMAT(`date_debut`,'%d/%m/%Y') AS datedebut , DATE_FORMAT(`date_fin`,'%d/%m/%Y') AS date_fin , type_contrat , uc.agence_id , c.raison_sociale , p.nom_poste , a.agence  ,salaire_brut , fk_statut_contrat 
                FROM users_collabos_contratsci uc 
                INNER JOIN ( adm_agences a ) ON uc.agence_id = a.id_agence 
                INNER JOIN ( clients c) ON uc.client_id = c.idclts 
                INNER JOIN (adm_type_poste p) ON p.id_poste = uc.qualification 
                WHERE uc.user_collabo_id = ?" ;

                $stmt = $conn->prepare($sql);
                $stmt->bindParam(1, $decoded->data->id, PDO::PARAM_INT);
                $stmt->execute();
                $num = $stmt->rowCount();
                $missions = $stmt->fetchAll(PDO::FETCH_ASSOC);
       // print_r($missions);
        
            http_response_code(200);

            echo json_encode(
                array(
                    "message" => "Access is allowed",
                    "res" => $missions
                )
            );
       

    } else {

        http_response_code(401);

        echo json_encode(array("message" => "Access denied"));
    }

}  
