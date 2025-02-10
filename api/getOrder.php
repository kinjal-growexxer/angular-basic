<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
// Include database connection file
include 'database.php';

// Get the order ID from the query parameter
$id = $_GET['id'];

if ($id) {
    // Prepare the SQL query to fetch the order by ID
    $sql = "SELECT * FROM orders WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);

    // Execute the query
    $stmt->execute();
    $order = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($order) {
        echo json_encode($order);
    } else {
        echo json_encode(["status" => "error", "message" => "Order not found."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid ID."]);
}
?>
