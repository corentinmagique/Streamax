-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Hôte : db
-- Généré le : ven. 06 mai 2022 à 06:27
-- Version du serveur : 10.3.34-MariaDB-1:10.3.34+maria~focal
-- Version de PHP : 8.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `streamax`
--

-- --------------------------------------------------------

--
-- Structure de la table `apikeys`
--

CREATE TABLE `apikeys` (
  `IdApiKeys` int(11) NOT NULL,
  `LoginApiKeys` varchar(250) CHARACTER SET utf8 NOT NULL,
  `PasswordApiKeys` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `StateApiKeys` char(1) CHARACTER SET utf8 NOT NULL DEFAULT '0',
  `CreatedApiKeys` datetime DEFAULT current_timestamp(),
  `UpdatedKeys` datetime DEFAULT current_timestamp(),
  `DeletedKeys` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `apikeysaccess`
--

CREATE TABLE `apikeysaccess` (
  `IdApiKeyAccess` int(11) NOT NULL,
  `UserIdApiKeyAccess` int(11) DEFAULT NULL,
  `DatabaseIdApiKeyAccess` int(11) DEFAULT NULL,
  `RoleApiKeyAccess` char(1) CHARACTER SET utf8 DEFAULT '0',
  `ApplicationApiKeyAccess` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `NameApiKeyAccess` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `StateApiKeyAccess` char(1) CHARACTER SET utf8 NOT NULL DEFAULT '0',
  `CreatedApiKeyAccess` datetime DEFAULT current_timestamp(),
  `UpdatedApiKeyAccess` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `DeletedApiKeyAccess` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `devices`
--

CREATE TABLE `devices` (
  `IdDevice` int(11) NOT NULL,
  `ManufacturerDevice` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `IdMaterialDevice` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `ModelDevice` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `OsVersionDevice` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `LastConnexion` datetime DEFAULT NULL,
  `CreatedDevice` datetime DEFAULT current_timestamp(),
  `UpdatedDevice` datetime DEFAULT current_timestamp(),
  `DeletedDevice` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `mydatabases`
--

CREATE TABLE `mydatabases` (
  `IdDatabase` int(11) NOT NULL,
  `CodeApplication` varchar(17) CHARACTER SET utf8 DEFAULT NULL,
  `NameDatabase` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `LoginDatabase` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `PasswordDatabase` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `AddressDatabase` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `AdressCronDatabase` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `ViewDatabase` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `StateDatabase` char(1) CHARACTER SET utf8 NOT NULL DEFAULT '0',
  `CronDatabase` char(1) CHARACTER SET utf8 DEFAULT NULL,
  `TransfertDatabase` char(1) CHARACTER SET utf8 DEFAULT NULL,
  `FirebaseDatabase` text CHARACTER SET utf8 DEFAULT NULL,
  `CreatedDatabase` datetime DEFAULT current_timestamp(),
  `UpdatedDatabase` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `DeletedDatabase` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `playlist`
--

CREATE TABLE `playlist` (
  `IdPlaylist` int(11) NOT NULL,
  `NamePlaylist` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `IdOrganisationPlaylist` int(11) DEFAULT NULL,
  `IdPlaylistCompositionPlaylist` int(11) DEFAULT NULL,
  `CreatedPlaylist` datetime DEFAULT current_timestamp(),
  `UpdatedPlaylist` datetime DEFAULT current_timestamp(),
  `DeletedPlaylist` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `playlistcomposition`
--

CREATE TABLE `playlistcomposition` (
  `IdPlaylistComposition` int(11) NOT NULL,
  `UrlVideosPlaylistComposition` text CHARACTER SET utf8 DEFAULT NULL,
  `CreatedPlaylistComposition` datetime DEFAULT current_timestamp(),
  `UpdatedPlaylistComposition` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `DeletedPlaylistComposition` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `IdUser` int(11) NOT NULL,
  `LoginUser` varchar(250) CHARACTER SET utf8 NOT NULL,
  `PasswordUser` varchar(250) CHARACTER SET utf8 NOT NULL,
  `PinUser` varchar(10) CHARACTER SET utf8 NOT NULL,
  `StateUser` char(1) CHARACTER SET utf8 NOT NULL DEFAULT '0',
  `CreatedUser` datetime DEFAULT current_timestamp(),
  `UpdatedUser` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `DeletedUser` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`IdUser`, `LoginUser`, `PasswordUser`, `PinUser`, `StateUser`, `CreatedUser`, `UpdatedUser`, `DeletedUser`) VALUES
(1, 'runpos@admin.pro', '0000', '0000', '0', '2022-05-06 04:36:59', '2022-05-06 04:36:59', NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `apikeys`
--
ALTER TABLE `apikeys`
  ADD PRIMARY KEY (`IdApiKeys`);

--
-- Index pour la table `apikeysaccess`
--
ALTER TABLE `apikeysaccess`
  ADD PRIMARY KEY (`IdApiKeyAccess`);

--
-- Index pour la table `devices`
--
ALTER TABLE `devices`
  ADD PRIMARY KEY (`IdDevice`);

--
-- Index pour la table `mydatabases`
--
ALTER TABLE `mydatabases`
  ADD PRIMARY KEY (`IdDatabase`);

--
-- Index pour la table `playlist`
--
ALTER TABLE `playlist`
  ADD PRIMARY KEY (`IdPlaylist`);

--
-- Index pour la table `playlistcomposition`
--
ALTER TABLE `playlistcomposition`
  ADD PRIMARY KEY (`IdPlaylistComposition`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`IdUser`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `apikeys`
--
ALTER TABLE `apikeys`
  MODIFY `IdApiKeys` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `apikeysaccess`
--
ALTER TABLE `apikeysaccess`
  MODIFY `IdApiKeyAccess` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `devices`
--
ALTER TABLE `devices`
  MODIFY `IdDevice` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `mydatabases`
--
ALTER TABLE `mydatabases`
  MODIFY `IdDatabase` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `playlist`
--
ALTER TABLE `playlist`
  MODIFY `IdPlaylist` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `playlistcomposition`
--
ALTER TABLE `playlistcomposition`
  MODIFY `IdPlaylistComposition` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `IdUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
