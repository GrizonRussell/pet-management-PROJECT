<?php
header('Content-Type: application/json');
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT * FROM Breeds";
    $result = $conn->query($sql);

    $breeds = [];
    while($row = $result->fetch_assoc()) {
        $breeds[] = $row;
    }

    echo json_encode($breeds);
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $breedName = $data['BreedName'];
    $speciesID = $data['SpeciesID'];

    $sql = "INSERT INTO Breeds (BreedName, SpeciesID) VALUES ('$breedName', '$speciesID')";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(['message' => 'Breed added successfully']);
    } else {
        echo json_encode(['message' => 'Error: ' . $conn->error]);
    }
}

$conn->close();
?>
