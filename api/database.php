<?php
// Database credentials
$host = "193.203.184.94";
$dbname = "u694998504_satyam";
$username = "u694998504_satyam";
$password = "Satyam@150";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    // Set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
