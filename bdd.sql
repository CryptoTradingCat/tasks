-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : lun. 27 mars 2023 à 01:55
-- Version du serveur : 10.5.18-MariaDB-0+deb11u1
-- Version de PHP : 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `planing_taches`
--

-- --------------------------------------------------------

--
-- Structure de la table `residents`
--

CREATE TABLE `residents` (
  `id` int(11) NOT NULL,
  `residents_name` varchar(150) NOT NULL,
  `residents_genre` int(11) NOT NULL,
  `residents_monday_tasks` int(2) DEFAULT NULL,
  `residents_tuesday_tasks` int(2) DEFAULT NULL,
  `residents_wednesday_tasks` int(2) DEFAULT NULL,
  `residents_thursday_tasks` int(2) DEFAULT NULL,
  `residents_friday_tasks` int(2) DEFAULT NULL,
  `residents_saturday_tasks` int(2) DEFAULT NULL,
  `residents_sunday_tasks` int(2) DEFAULT NULL,
  `residents_total_tasks` int(1) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `residents`
--

INSERT INTO `residents` (`id`, `residents_name`, `residents_genre`, `residents_monday_tasks`, `residents_tuesday_tasks`, `residents_wednesday_tasks`, `residents_thursday_tasks`, `residents_friday_tasks`, `residents_saturday_tasks`, `residents_sunday_tasks`, `residents_total_tasks`, `created_at`, `updated_at`) VALUES
(4, 'Nicolas', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-03-19 16:19:28', '2023-03-19 17:30:42'),
(6, 'Alexandre', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-03-19 16:19:48', '2023-03-19 16:19:48'),
(7, 'Thelma', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-03-19 16:19:48', '2023-03-26 12:07:03'),
(8, 'Mathieu', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-03-19 16:20:01', '2023-03-19 16:20:01'),
(9, 'Thomas', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-03-19 16:20:01', '2023-03-19 16:20:01'),
(10, 'Bruno', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-03-19 16:20:18', '2023-03-19 16:20:18'),
(11, 'Jean-Damien', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-03-19 16:20:18', '2023-03-19 16:20:18'),
(12, 'Xavier', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-03-19 16:20:34', '2023-03-19 16:20:34'),
(13, 'Aymeric', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-03-19 16:20:34', '2023-03-19 16:20:34'),
(14, 'Anne-Christine', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-03-19 16:20:52', '2023-03-19 16:20:52'),
(15, 'Dyniss', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-03-19 16:20:52', '2023-03-19 16:20:52'),
(16, 'Kevin', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-03-19 16:21:08', '2023-03-19 16:21:08'),
(17, 'Sylvain.F', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-03-19 16:21:08', '2023-03-26 17:26:12'),
(18, 'Aurelien', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-03-19 16:21:20', '2023-03-19 16:21:20'),
(20, 'Milan', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-03-19 16:21:28', '2023-03-19 16:21:28'),
(23, 'Samir', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-03-19 23:54:57', '2023-03-19 23:54:57'),
(24, 'Yannis', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-03-19 23:55:20', '2023-03-26 11:39:39'),
(29, 'Cameron', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-03-26 11:40:02', '2023-03-26 11:40:02'),
(30, 'Loris', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-03-26 11:40:08', '2023-03-26 11:40:08'),
(31, 'Juliette', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-03-26 17:25:08', '2023-03-26 17:25:08'),
(32, 'Morgane', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-03-26 17:25:17', '2023-03-26 17:25:17'),
(33, 'Sylvain.B', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-03-26 17:25:32', '2023-03-26 17:25:32'),
(34, 'Julien', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-03-26 17:25:46', '2023-03-26 17:25:46'),
(35, 'Maria', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-03-26 20:11:19', '2023-03-26 20:11:19');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `residents`
--
ALTER TABLE `residents`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `residents`
--
ALTER TABLE `residents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;