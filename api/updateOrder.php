<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
// Include database connection file
include 'database.php';

// Get data from PUT request
$data = json_decode(file_get_contents("php://input"));

if (isset($data->id) && isset($data->wineName) && isset($data->quantity) && isset($data->price) && isset($data->customer) && isset($data->orderDate)) {
    $id = $data->id;
    $wineName = $data->wineName;
    $quantity = $data->quantity;
    $price = $data->price;
    $customer = $data->customer;
    $orderDate = $data->orderDate;

    // Prepare the SQL query
    $sql = "UPDATE orders SET wineName = :wineName, quantity = :quantity, price = :price, customer = :customer, orderDate = :orderDate WHERE id = :id";
    $stmt = $pdo->prepare($sql);

    // Bind parameters to the query
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->bindParam(':wineName', $wineName);
    $stmt->bindParam(':quantity', $quantity);
    $stmt->bindParam(':price', $price);
    $stmt->bindParam(':customer', $customer);
    $stmt->bindParam(':orderDate', $orderDate);

    // Execute the query
    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Order updated successfully."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to update order."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Missing required fields."]);
}
?>
