<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
// Include database connection file
include 'database.php';

// Prepare the SQL query to fetch the order by ID
$sql = "SELECT * FROM orders";
$stmt = $pdo->prepare($sql);

// Execute the query
$stmt->execute();
$orders = $stmt->fetchAll(PDO::FETCH_ASSOC);

if ($orders) {
    echo json_encode($orders);
} else {
    echo json_encode([]);
}
?>
