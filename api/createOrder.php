<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
// Include database connection file
include 'database.php';

// Get data from POST request
$data = json_decode(file_get_contents("php://input"));

if (isset($data->wineName) && isset($data->quantity) && isset($data->price) && isset($data->customer) && isset($data->orderDate)) {
    $wineName = $data->wineName;
    $quantity = $data->quantity;
    $price = $data->price;
    $customer = $data->customer;
    $orderDate = $data->orderDate;

    // Prepare the SQL query
    $sql = "INSERT INTO orders (wineName, quantity, price, customer, orderDate) VALUES (:wineName, :quantity, :price, :customer, :orderDate)";
    $stmt = $pdo->prepare($sql);

    // Bind parameters to the query
    $stmt->bindParam(':wineName', $wineName);
    $stmt->bindParam(':quantity', $quantity);
    $stmt->bindParam(':price', $price);
    $stmt->bindParam(':customer', $customer);
    $stmt->bindParam(':orderDate', $orderDate);

    // Execute the query
    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Order created successfully."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to create order."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Missing required fields."]);
}
?>
