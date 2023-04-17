<?php

class Database
{
    private $host = "localhost";
    private $db_name = "artus_ma_test";
    private $username = "dbs-interim";
    private $password = "Atlas-2013!";
    public $conn;

    public function getConnection()
    {
        $this->conn = null;

        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
        } catch (PDOException $exception) {
            echo "Connection failed: " . $exception->getMessage();
        }

        return $this->conn;
    }
}