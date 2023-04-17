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
        $db = new database();
        $conn = $db->getConnection();

        $stmt = $conn->prepare('SELECT pp.id_period ,mois, annee, rentabilite , netPayer , sbg , type , soumis FROM users_collabos uc 
        JOIN paie_bulletinpaie bp on uc.iduser = bp.salarie_id 
        JOIN paie_periodepaie pp on bp.period_id = pp.id_period  
        WHERE uc.iduser = :iduser');
        $stmt->execute(array(':iduser' => $decoded->data->id));
        $userCnss = $stmt->fetchAll(PDO::FETCH_OBJ);

        if ($userCnss) {
            $newUserCnss = [];
            
            foreach ($userCnss as $newArr) {
                $found = false;
                foreach ($newUserCnss as &$mergedObject) {            
                    if ($mergedObject->id_period == $newArr->id_period) {
                        if($mergedObject->type == "Heures normales" || $newArr->type == "Heures normales"){
                        
                           $mergedObject->netPayer += $newArr->netPayer ;
                           $mergedObject->rentabilite = ($newArr->rentabilite + $mergedObject->rentabilite)/7.35;
                           $mergedObject->sbg += $newArr->sbg;                                                               
                           $mergedObject->soumis += $newArr->soumis;                                                               
                        }else{
                            $mergedObject->netPayer += $newArr->netPayer ;
                            $mergedObject->rentabilite += $newArr->rentabilite ;
                            $mergedObject->sbg += $newArr->sbg;    
                            $mergedObject->soumis += $newArr->soumis;    
                        }

                        $found = true;   
                        break;
                    }
                    
                }
                if (!$found) {
                    $newUserCnss[] = $newArr;
                }
            }
            
            http_response_code(200);

            echo json_encode(
                ($newUserCnss)
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
