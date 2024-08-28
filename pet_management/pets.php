<?php
header('Content-Type: application/json');
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT Pets.*, Species.SpeciesName, Breeds.BreedName, Owners.Name AS OwnerName
            FROM Pets
            JOIN Species ON Pets.SpeciesID = Species.SpeciesID
            JOIN Breeds ON Pets.BreedID = Breeds.BreedID
            JOIN Owners ON Pets.OwnerID = Owners.OwnerID";
    $result = $conn->query($sql);

    $pets = [];
    while($row = $result->fetch_assoc()) {
        $pets[] = $row;
    }

    echo json_encode($pets);
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $name = $data['Name'];
    $speciesID = $data['SpeciesID'];
    $breedID = $data['BreedID'];
    $dateOfBirth = $data['DateOfBirth'];
    $ownerID = $data['OwnerID'];

    $sql = "INSERT INTO Pets (Name, SpeciesID, BreedID, DateOfBirth, OwnerID) VALUES ('$name', '$speciesID', '$breedID', '$dateOfBirth', '$ownerID')";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(['message' => 'Pet added successfully']);
    } else {
        echo json_encode(['message' => 'Error: ' . $conn->error]);
    }
}

$conn->close();
?>
