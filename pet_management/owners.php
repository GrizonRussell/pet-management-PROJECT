<?php
header('Content-Type: application/json');
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT * FROM Owners";
    $result = $conn->query($sql);

    $owners = [];
    while($row = $result->fetch_assoc()) {
        $owners[] = $row;
    }

    echo json_encode($owners);
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $name = $data['Name'];
    $contactDetails = $data['ContactDetails'];
    $address = $data['Address'];

    $sql = "INSERT INTO Owners (Name, ContactDetails, Address) VALUES ('$name', '$contactDetails', '$address')";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(['message' => 'Owner added successfully']);
    } else {
        echo json_encode(['message' => 'Error: ' . $conn->error]);
    }
}

$conn->close();
?>
