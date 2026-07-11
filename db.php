<?php
$host = "localhost";
$user = "root";        // default for XAMPP
$password = "";        // default for XAMPP
$dbname = "contact_db";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Database connection failed");
}
?>
