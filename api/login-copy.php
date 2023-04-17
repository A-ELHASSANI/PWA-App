<?php
// ini_set('display_errors', '1');
// ini_set('display_startup_errors', '1');
// error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
include_once "config/database.php";
include_once "objects/user.php";
 
$database = new Database();
$db = $database->getConnection();
 
$user = new User($db);
 
$data = json_decode(file_get_contents("php://input" , true));
 

$user->login = $data->txt_identifiant;

$email_exists = $user->emailExists();

include_once "config/core.php";
require "libs/php-jwt/vendor/autoload.php";
include_once "libs/php-jwt/vendor/firebase/php-JWT/src/BeforeValidException.php";
include_once "libs/php-jwt/vendor/firebase/php-JWT/src/ExpiredException.php";
include_once "libs/php-jwt/vendor/firebase/php-JWT/src/SignatureInvalidException.php";
include_once "libs/php-jwt/vendor/firebase/php-JWT/src/JWT.php";
use \Firebase\JWT\JWT;




if ($email_exists && $data->txt_password === $user->pass) {
    
    
    $token = array(
       "iss" => $iss,
       "aud" => $aud,
       "iat" => $iat,
       "nbf" => $nbf,
    
       "data" => array(
           "login" => $user->login,
           "id" => $user->iduser
       )
    );

    http_response_code(200);
 
    $jwt = JWT::encode($token, $key, 'HS256');
    echo json_encode(
        array(
            "message" => "login succeful",
            "jwt" => $jwt
        )
    );

}
 
else {
 
   

  echo json_encode(array("message" => "login failed"));
}
?>