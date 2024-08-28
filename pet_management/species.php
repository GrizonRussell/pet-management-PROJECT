<?php
header('Content-Type: application/json');
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT * FROM Species";
    $result = $conn->query($sql);

    $species = [];
    while($row = $result->fetch_assoc()) {
        $species[] = $row;
    }

    echo json_encode($species);
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $speciesName = $data['SpeciesName'];

    $sql = "INSERT INTO Species (SpeciesName) VALUES ('$speciesName')";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(['message' => 'Species added successfully']);
    } else {
        echo json_encode(['message' => 'Error: ' . $conn->error]);
    }
}

$conn->close();
?>
