-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 28, 2024 at 12:11 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pet_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `breeds`
--

CREATE TABLE `breeds` (
  `BreedID` int(11) NOT NULL,
  `BreedName` varchar(100) NOT NULL,
  `SpeciesID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `owners`
--

CREATE TABLE `owners` (
  `OwnerID` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `ContactDetails` varchar(100) DEFAULT NULL,
  `Address` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pets`
--

CREATE TABLE `pets` (
  `PetID` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `SpeciesID` int(11) DEFAULT NULL,
  `BreedID` int(11) DEFAULT NULL,
  `DateOfBirth` date DEFAULT NULL,
  `OwnerID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `species`
--

CREATE TABLE `species` (
  `SpeciesID` int(11) NOT NULL,
  `SpeciesName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `breeds`
--
ALTER TABLE `breeds`
  ADD PRIMARY KEY (`BreedID`),
  ADD KEY `SpeciesID` (`SpeciesID`);

--
-- Indexes for table `owners`
--
ALTER TABLE `owners`
  ADD PRIMARY KEY (`OwnerID`);

--
-- Indexes for table `pets`
--
ALTER TABLE `pets`
  ADD PRIMARY KEY (`PetID`),
  ADD KEY `OwnerID` (`OwnerID`),
  ADD KEY `SpeciesID` (`SpeciesID`),
  ADD KEY `BreedID` (`BreedID`);

--
-- Indexes for table `species`
--
ALTER TABLE `species`
  ADD PRIMARY KEY (`SpeciesID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `breeds`
--
ALTER TABLE `breeds`
  MODIFY `BreedID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `owners`
--
ALTER TABLE `owners`
  MODIFY `OwnerID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pets`
--
ALTER TABLE `pets`
  MODIFY `PetID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `species`
--
ALTER TABLE `species`
  MODIFY `SpeciesID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `breeds`
--
ALTER TABLE `breeds`
  ADD CONSTRAINT `breeds_ibfk_1` FOREIGN KEY (`SpeciesID`) REFERENCES `species` (`SpeciesID`);

--
-- Constraints for table `pets`
--
ALTER TABLE `pets`
  ADD CONSTRAINT `pets_ibfk_1` FOREIGN KEY (`OwnerID`) REFERENCES `owners` (`OwnerID`),
  ADD CONSTRAINT `pets_ibfk_2` FOREIGN KEY (`SpeciesID`) REFERENCES `species` (`SpeciesID`),
  ADD CONSTRAINT `pets_ibfk_3` FOREIGN KEY (`BreedID`) REFERENCES `breeds` (`BreedID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
