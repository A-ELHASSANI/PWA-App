<?php

class User
{
    private $conn;
    private $table_name = "users_collabos";

    public $login;
    public $pass;
    public $nom;

    public $prenom;
    public $cin;
     public $iduser;
    public $date_naissance;
    public $num_cnss;
    public $telephone;
    public $email_contact;

    public function __construct($db)
    {
        $this->conn = $db;
    }



function emailExists() {
 //,nom,prenom,cin,iduser,date_naissance,num_cnss,telephone,email_contact 
    $query = "SELECT login,pass ,iduser
            FROM " . $this->table_name . "
            WHERE login = ?
            LIMIT 0,1";
 
    $stmt = $this->conn->prepare($query);
 
    $this->login=htmlspecialchars(strip_tags($this->login));
 
    $stmt->bindParam(1, $this->login);
 
    $stmt->execute();
 
    $num = $stmt->rowCount();
    if ($num > 0) {
 
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
 
        $this->login= $row['login'];
        $this->pass = $row['pass'];
        $this->iduser = $row['iduser'];

        return true;
    }
     return false;
}
public function selectUser(){

    
    // session_start();

    // $login = $_POST['email'];
    // $pass = $_POST['password'];

    // $db = new database();
    // $conn = $db->getConnection();

    // $stmt = $conn->prepare('SELECT  nom , prenom , cin , iduser , date_naissance,num_cnss,telephone,email_contact 
    // FROM users_collabos WHERE login = :login AND pass = :pass');
    // $stmt->execute(array(':login' => $login, ':pass' => $pass));
    // $user = $stmt->fetch(PDO::FETCH_ASSOC);

    // if ($user) {
    //     $_SESSION['insiders'] = $user;
    // }

        // $result = mysqli_query($this->conn, "SELECT  * FROM  " .$this->table_name ." WHERE login = " .$_SESSION['login']. " and pass = ".$_SESSION['pass']);
        // $row = mysqli_fetch_assoc($result);
        // $this->nom = $row['nom'];
        // $this->prenom = $row['prenom'];
        // $this->cin = $row['cin'];
        // $this->iduser = $row['iduser'];
        // $this->date_naissance = $row['date_naissance'];
        // $this->num_cnss = $row['num_cnss'];
        // $this->telephone = $row['telephone'];
        // $this->email_contact = $row['email_contact'];
    }       
 
}
