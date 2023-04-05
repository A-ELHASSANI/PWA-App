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

if ( $jwt && $_POST['action'] == "declarationsCnss") {
    
   
    $decoded = JWT::decode($jwt, new Key($key, 'HS256'));

    if ($decoded->data->id) {
       // echo $decoded->data->id ;
        $db = new database();
        $conn = $db->getConnection();


        try {
               
            $sql_peri = "SELECT * , CONCAT(mois,'/',annee) as periode_mois FROM `paie_periodepaie` ";
            $stmt_peri = $conn->prepare($sql_peri);
            $stmt_peri->execute();
            $num_peri = $stmt_peri->rowCount();
            $periodes = $stmt_peri->fetchAll(PDO::FETCH_OBJ);
            
            foreach ($periodes as $key => $p) {
    
                $sql = "SELECT * FROM releves_heures rh , paie_bulletinpaie pb 
                WHERE   rh.bp_id = pb.bp_id  
                 AND rh.periode_id = ?
                 AND pb.salarie_id = ? ";
    
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(1, $p->id_period, PDO::PARAM_INT);
                $stmt->bindParam(2, $decoded->data->id, PDO::PARAM_INT);
                $stmt->execute();
                $num = $stmt->rowCount();
                $res = $stmt->fetchAll(PDO::FETCH_OBJ);
                $sum_net = 0;
    
                $sum_j = 0;
                $sum_h = 0;
                $sum_sbg = 0;
                $sum_soumis = 0;
                
                foreach ($res as $k => $r) {
                    $sum_net += $r->netPayer;
                    $sum_sbg += $r->sbg;
                    $sum_soumis += $r->soumis;
             
    
                    if ($r->type == "Heures normales") {
                        $sum_h += $r->rentabilite;
                    } else {
                        $sum_j += $r->rentabilite;
                    }
                }
    
                $sum_j += ($sum_h / 7.35);
    
    
                $periodeList[$p->id_period] = array(
                    "id_period" => $p->id_period,
                    "sum_net" => $sum_net,
                    "sum_j" => $sum_j,
                    "sum_sbg" => $sum_sbg,
                    "sum_soumis" => $sum_soumis,
                    "periode_mois" => $p->periode_mois,
                );
            }
    
    
            http_response_code(200);
    
            echo json_encode(array("error" => false, "message" => "Successful", "res" => $periodeList));
        } catch (\Throwable $th) {
            exit('error');
        }

/*
        $stmt = $conn->prepare('SELECT bp_id , type , rentabilite ,  DATE_FORMAT(`date`,"%d/%m/%Y") AS date  , salaireBase , netPayer   , DATE_FORMAT(`dateGen`,"%d/%m/%Y") AS dateGen    FROM  paie_bulletinpaie  WHERE salarie_id  = :iduser');
        $stmt->execute(array(':iduser' => $decoded->data->id));
        $user_bulletin = $stmt->fetchAll(PDO::FETCH_OBJ);
       // print_r($user_bulletin);

                   
            http_response_code(200);

            echo json_encode(
                array(
                    "message" => "Access is allowed",
                    "res" => $user_bulletin
                )
            );
       */

    } else {

        http_response_code(401);

        echo json_encode(array("message" => "Access denied"));
    }

}  
