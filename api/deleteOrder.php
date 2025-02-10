<?php
// Include database connection file
include 'database.php';

// Get the order ID from the query parameter
$id = $_GET['id'];

if ($id) {
    // Prepare the SQL query to delete the order
    $sql = "DELETE FROM orders WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);

    // Execute the query
    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Order deleted successfully."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to delete order."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid ID."]);
}
?>
