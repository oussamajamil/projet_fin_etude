-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 30 juin 2021 à 23:40
-- Version du serveur :  10.4.18-MariaDB
-- Version de PHP : 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `projetlicda`
--

-- --------------------------------------------------------

--
-- Structure de la table `cadeauxes`
--

DROP TABLE IF EXISTS `cadeauxes`;
CREATE TABLE `cadeauxes` (
  `id` int(10) UNSIGNED NOT NULL,
  `projet_id` int(10) UNSIGNED NOT NULL,
  `titre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Rechargeable` enum('oui','non') COLLATE utf8mb4_unicode_ci NOT NULL,
  `prix_debut` int(11) NOT NULL,
  `prix_fin` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `cadeauxes`
--

INSERT INTO `cadeauxes` (`id`, `projet_id`, `titre`, `description`, `Rechargeable`, `prix_debut`, `prix_fin`, `created_at`, `updated_at`) VALUES
(17, 110, 'Laboriosam cupidita', 'Aliquid perferendis', 'non', 100, 300, NULL, NULL),
(18, 110, 'Non amet quo perfer', 'Autem voluptatem id', 'oui', 300, 100, NULL, NULL),
(19, 110, 'Non amet quo perfer', 'Autem voluptatem id', 'oui', 300, 100, NULL, NULL),
(20, 111, 'Minima rerum tempori', 'Consectetur incidid', 'oui', 100, 300, NULL, NULL),
(21, 111, 'Nulla dolor laborum', 'Deserunt adipisci ut', 'non', 300, 100, NULL, NULL),
(22, 111, 'Nulla dolor laborum', 'Deserunt adipisci ut', 'non', 300, 100, NULL, NULL),
(23, 112, 'Magnam beatae obcaec', 'Dolores labore obcae', 'non', 100, 300, NULL, NULL),
(24, 112, 'Perspiciatis labori', 'A deserunt quam et e', 'oui', 300, 100, NULL, NULL),
(25, 112, 'Perspiciatis labori', 'A deserunt quam et e', 'oui', 300, 100, NULL, NULL),
(26, 113, 'Aut consectetur eli', 'Eaque quae commodi r', 'non', 100, 300, NULL, NULL),
(27, 113, 'Voluptas hic dolorum', 'Non in ipsum culpa', 'oui', 300, 100, NULL, NULL),
(28, 113, 'Voluptas hic dolorum', 'Non in ipsum culpa', 'oui', 300, 100, NULL, NULL),
(29, 114, 'kjn xcnvdfnvn', 'fnvjiodfjvodfiov', 'non', 100, 300, NULL, NULL),
(30, 114, 'tfndbvkdnfvlnsdln', 'ncvsflnvklsdncvsdcnl', 'non', 300, 100, NULL, NULL),
(31, 114, 'tfndbvkdnfvlnsdln', 'ncvsflnvklsdncvsdcnl', 'non', 300, 100, NULL, NULL),
(32, 115, 'Dolorem magna enim m', 'Ipsum numquam volup', 'non', 100, 300, NULL, NULL),
(33, 115, 'Et nihil ratione dol', 'Laborum et dolorem o', 'oui', 300, 100, NULL, NULL),
(34, 115, 'Et nihil ratione dol', 'Laborum et dolorem o', 'oui', 300, 100, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `id_projet` int(10) UNSIGNED NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `investissements`
--

DROP TABLE IF EXISTS `investissements`;
CREATE TABLE `investissements` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_projet` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `Prixdinvetissemnt` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déclencheurs `investissements`
--
DROP TRIGGER IF EXISTS `PRIX_rest`;
DELIMITER $$
CREATE TRIGGER `PRIX_rest` AFTER INSERT ON `investissements` FOR EACH ROW UPDATE projets set Prix_payes=Prix_payes+New.Prixdinvetissemnt WHERE id=New.id_projet
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `like_projets`
--

DROP TABLE IF EXISTS `like_projets`;
CREATE TABLE `like_projets` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `id_projet` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déclencheurs `like_projets`
--
DROP TRIGGER IF EXISTS `likeProjets`;
DELIMITER $$
CREATE TRIGGER `likeProjets` AFTER INSERT ON `like_projets` FOR EACH ROW UPDATE projets set nombre_vote=nombre_vote+1 WHERE id=New.id_projet
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `thilike`;
DELIMITER $$
CREATE TRIGGER `thilike` AFTER DELETE ON `like_projets` FOR EACH ROW UPDATE projets set nombre_vote=nombre_vote-1 WHERE id=Old.id_projet
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `Message` varchar(300) DEFAULT NULL,
  `nom` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `reponde` enum('oui','non') DEFAULT 'non',
  `data-creation` date DEFAULT current_timestamp(),
  `sujet` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `messages`
--

INSERT INTO `messages` (`id`, `Message`, `nom`, `email`, `reponde`, `data-creation`, `sujet`) VALUES
(1, 'oussama cv vous allez bien ', 'jamil', 'oussamajamil01@gmail.Com', 'non', '2021-06-30', NULL),
(2, 'hello hello v', 'hhhhh', 'oussamajamil01@gmail.com', 'non', '2021-06-30', 'mesage'),
(3, 'fnsdcnsdcnksdnk', 'fvjfsdcv', 'oussamajamil01@gmail.com', 'non', '2021-06-30', 'oussama'),
(4, 'dkkdkdkkd', 'oussama jamil', 'oussamajamil01@gmail.com', 'non', '2021-06-30', 'kfdfkkfkf'),
(5, 'dkkdkdkkd', 'oussama jamil', 'oussamajamil01@gmail.com', 'non', '2021-06-30', 'kfdfkkfkf'),
(6, 'dkkdkdkkd', 'oussama jamil', 'oussamajamil01@gmail.com', 'non', '2021-06-30', 'kfdfkkfkf'),
(7, 'oussama jamil01@gmail.comzd,z dcdclndklnckn', 'oussama jamil', 'oussamajamil01@gmail.com', 'non', '2021-06-30', 'ousseefelfl lrldle'),
(8, 'oussama2018', 'klnklnkln', 'oussamajamil01@gmail.com', 'non', '2021-06-30', 'fffffffffffffff'),
(9, 'oussama2018', 'klnklnjjjkln', 'oussamajamil01@gmail.com', 'non', '2021-06-30', 'fffffffffffffffjjjj'),
(10, 'oussama2018', 'oussama jamil', 'oussamajamil01@gmail.com', 'non', '2021-06-30', 'jjjjjcndjjd'),
(11, 'kcdpoj,sczkdcfs,v nk', 'oussama jamil', 'oussamajamil01@gmail.com', 'non', '2021-06-30', 'oussamansdncn'),
(12, 'oussama20189', 'oussama jamil', 'oussamajamil01@gmail.com', 'non', '2021-06-30', 'fffffffffffffff');

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(32, '2014_10_12_000000_create_users_table', 1),
(33, '2014_10_12_100000_create_password_resets_table', 1),
(34, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(35, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(36, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(37, '2016_06_01_000004_create_oauth_clients_table', 1),
(38, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(39, '2019_08_19_000000_create_failed_jobs_table', 1),
(40, '2021_04_06_193820_create_projets_table', 1),
(41, '2021_04_07_130124_create_investissements_table', 1),
(42, '2021_04_07_131237_create_like_projets_table', 1),
(43, '2021_04_07_152816_create_comments_table', 1),
(44, '2021_04_08_124951_create_notifications_table', 1),
(45, '2021_04_08_125402_create_messages_table', 1),
(46, '2021_04_08_235529_create_sessions_table', 1),
(47, '2021_04_27_014746_create_questions_table', 1),
(48, '2021_05_17_094901_create_cadeauxes_table', 2);

-- --------------------------------------------------------

--
-- Structure de la table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
CREATE TABLE `notifications` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Type` enum('message','investissements') COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `text` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `oauth_access_tokens`
--

DROP TABLE IF EXISTS `oauth_access_tokens`;
CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('0037f7344878f12e10d9781e6eabb8c8a141c389da5362a68c26ac6142e50606f57bfd8d6eec5e2f', 11, 1, 'AppName', '[]', 0, '2021-06-03 09:20:57', '2021-06-03 09:20:57', '2022-06-03 10:20:57'),
('00b9daefbfaddd05f6cf46832e5e3f3e04e011b793cc34bcdabb093f223acf0b552277c6a1142504', 7, 1, 'AppName', '[]', 1, '2021-05-02 21:38:14', '2021-05-02 21:38:14', '2022-05-02 22:38:14'),
('00e26358a7deb4a5e43a4420d73c4a47a7142a45ac2b539971f7350be4a1f136e479c276edec8bf7', 11, 1, 'AppName', '[]', 1, '2021-06-23 20:24:37', '2021-06-23 20:24:37', '2022-06-23 21:24:37'),
('016d33fe55a270d961b6d55aa26f8f41cad3b92037a34a63d3dec57e7b7d01108d7832c652460bb0', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:09:57', '2021-04-30 16:09:57', '2022-04-30 17:09:57'),
('0183149d266f07a76932418529b1f41bba9aa8efc1e96f697a241432d55cc2ead82e2742202de8ef', 11, 1, 'AppName', '[]', 0, '2021-05-22 13:05:43', '2021-05-22 13:05:43', '2022-05-22 14:05:43'),
('0188554b1aebdcca0a2274d5f4af018574e9c8ee09b65650f95807ea43f29a783653264f2bfa8ee2', 7, 1, 'AppName', '[]', 1, '2021-04-30 23:48:37', '2021-04-30 23:48:37', '2022-05-01 00:48:37'),
('01995e2c45a633bbd777bdb5bcf3b5646e69b286f8ea99802d4991e3b1a1e56f5c31a831d7d23812', 11, 1, 'AppName', '[]', 0, '2021-05-16 13:34:16', '2021-05-16 13:34:16', '2022-05-16 14:34:16'),
('0271b692059c240d15eeb10d5e4bdfa60c2bfebce98b1567876895c1caa398a777fa6a21dd749c16', 7, 1, 'AppName', '[]', 0, '2021-05-02 22:24:36', '2021-05-02 22:24:36', '2022-05-02 23:24:36'),
('028edf660623caaa48951bd856d06204300403205559b9053eb92d729cd757b3799280a7f282ff2b', 7, 1, 'AppName', '[]', 0, '2021-04-30 19:22:00', '2021-04-30 19:22:00', '2022-04-30 20:22:00'),
('034f841536fab3d6a2fed51c213dd2d0b1c407b904b664a4f01c769562f4a29ed95fa8ef3661bdbe', 7, 1, 'AppName', '[]', 0, '2021-04-30 18:13:07', '2021-04-30 18:13:07', '2022-04-30 19:13:07'),
('035c45269800773f72dd4ce5e21f88ae940d002714d7c5d3735b62bdec1c11348c374cabc13c1d64', 5, 1, 'AppName', '[]', 0, '2021-04-27 17:47:48', '2021-04-27 17:47:48', '2022-04-27 18:47:48'),
('03d3ccfe643f46a842ffb3d2a7d5e12aae4d87b5fdaa050eff9058ac0fa72276c4e3dc3db8be8e22', 5, 1, 'AppName', '[]', 0, '2021-04-27 17:45:35', '2021-04-27 17:45:35', '2022-04-27 18:45:35'),
('03db333c90c3668787f8a3712f36533f91c5e43e1278bcf20ae1fda2e93daa9a8be434930f81d0e6', 7, 1, 'AppName', '[]', 0, '2021-05-02 22:24:38', '2021-05-02 22:24:38', '2022-05-02 23:24:38'),
('04d80752653c56e712112e30f510f445558007c43aaced035e050ce660221fe6891827b1a95e2a14', 7, 1, 'AppName', '[]', 0, '2021-05-06 23:03:13', '2021-05-06 23:03:13', '2022-05-07 00:03:13'),
('053c7efee45fb87e32bcdfb4c86c7d0437bac686ef735a6da3d442366011dc8b14c8861eaa5c145b', 7, 1, 'AppName', '[]', 0, '2021-04-30 15:38:13', '2021-04-30 15:38:13', '2022-04-30 16:38:13'),
('058fe1701b62740118ab9280c600e8fb2d05ef923226da3cf13674480b208b09beb8dd006e57a0db', 7, 1, 'AppName', '[]', 0, '2021-05-05 18:05:09', '2021-05-05 18:05:09', '2022-05-05 19:05:09'),
('05db385e3bdb5971cc23a7054ed4a04a593239ba0d4d8fa693efece9d02575038388b7cdf40b309b', 7, 1, 'AppName', '[]', 0, '2021-04-30 11:00:46', '2021-04-30 11:00:46', '2022-04-30 12:00:46'),
('061dfda9f81d913681cb5003a50281aa88c252abe7043677792c2de06ac9f0c55e091f68b485ee52', 7, 1, 'AppName', '[]', 1, '2021-04-30 18:24:48', '2021-04-30 18:24:48', '2022-04-30 19:24:48'),
('0637a18728ba53953ba0649a95148e249732b1c2540f57ff3f043e55bc0e30ca28c374564490f254', 7, 1, 'AppName', '[]', 1, '2021-04-30 18:16:05', '2021-04-30 18:16:05', '2022-04-30 19:16:05'),
('063c202aa689f2be885a5586aa6300aa1b3181b0ebcdbb1777f2a8ffd7d7ce753e9e527d5320c37c', 11, 1, 'AppName', '[]', 0, '2021-06-01 17:45:14', '2021-06-01 17:45:14', '2022-06-01 18:45:14'),
('0669137661de49482a2ae6a7721befb7ce83132977fa8dbf82ffbd402a77677eb0ff1d4fcab69d23', 5, 1, 'AppName', '[]', 0, '2021-04-28 03:03:20', '2021-04-28 03:03:20', '2022-04-28 04:03:20'),
('066ee22ce490558a5725b037a1528895cc9cba8734532ec4e83d5ddb0ecf2e53a8c868a88f5a7d06', 7, 1, 'AppName', '[]', 1, '2021-05-02 20:55:38', '2021-05-02 20:55:38', '2022-05-02 21:55:38'),
('06bba5da74b086594bc16c56b648464f70522a97955698ffa5b0f647589830fed77573fdc1da1784', 7, 1, 'AppName', '[]', 1, '2021-04-29 17:43:38', '2021-04-29 17:43:38', '2022-04-29 18:43:38'),
('06fe5e489be6c34d1ba9d080b034b675a64bbdf9a976a11125007a086391af31c2e2f23e8d8943fc', 5, 1, 'AppName', '[]', 0, '2021-04-28 02:58:06', '2021-04-28 02:58:06', '2022-04-28 03:58:06'),
('071ef955e4e85776a9ce98b41fd5e04f9a2d2448161a0d1792e322b25f2771508bb69d8268e76985', 11, 1, 'AppName', '[]', 1, '2021-06-25 15:27:06', '2021-06-25 15:27:06', '2022-06-25 16:27:06'),
('083f187e27a5194c4ffdc02a685242aab2fcfd2e37914516da86be568b6eb10695fce5be59fbee95', 10, 1, 'AppName', '[]', 0, '2021-05-13 16:35:33', '2021-05-13 16:35:33', '2022-05-13 17:35:33'),
('0860092b9b76c32801b8b315dc636b8686b5e98d83866408c8bce6b97e83beca71c197f11357aef7', 7, 1, 'AppName', '[]', 1, '2021-05-07 23:40:20', '2021-05-07 23:40:20', '2022-05-08 00:40:20'),
('096e846f849c08b3c4135c6ace78abda2addb617d3f69cfdb39f850bbd52b1796955b76a8d67ae79', 7, 1, 'AppName', '[]', 1, '2021-05-02 22:29:53', '2021-05-02 22:29:53', '2022-05-02 23:29:53'),
('098d05d201f0c6a2bd734531f5f7ba710ca43f93f66a10c40cd14f81d1d5474ed2db7ce90fc67718', 7, 1, 'AppName', '[]', 0, '2021-04-29 18:10:23', '2021-04-29 18:10:23', '2022-04-29 19:10:23'),
('0a1e815e32002b93a598088e561d41e11c959fea67ca84a5a3a32c8ac3a804693240221e3c6c60c8', 11, 1, 'AppName', '[]', 1, '2021-06-04 23:31:50', '2021-06-04 23:31:50', '2022-06-05 00:31:50'),
('0bb445dfc88abaf40f92a2abadc7c9fcf457b962c184f773ef327f25b3158437454d8c1a6f9c419a', 5, 1, 'AppName', '[]', 1, '2021-04-28 01:20:40', '2021-04-28 01:20:40', '2022-04-28 02:20:40'),
('0d56dec9ddb7e0187986f4e05b3cbad9ee476adb8af31f0c440cda77cee6771e9f1f981d0a50648a', 7, 1, 'AppName', '[]', 0, '2021-05-01 21:32:30', '2021-05-01 21:32:30', '2022-05-01 22:32:30'),
('0de38ef5b45c7f0fe2bf8e1865e35341f7209687cb0d4a9f96cd641ba038681b5b2f51c062cb0086', 11, 1, 'AppName', '[]', 0, '2021-05-17 08:19:39', '2021-05-17 08:19:39', '2022-05-17 09:19:39'),
('0ee92277c8996a1c8986b2508d1b09f88415c4779ad2ad5f54f2e63bbb8edbb62d54467b0f07b344', 11, 1, 'AppName', '[]', 0, '2021-05-21 13:09:58', '2021-05-21 13:09:58', '2022-05-21 14:09:58'),
('0ef7b69d853254c7f0104ab76cc8b5d915f67139e62e892582d701b5e3b36bbd4aee1971551ec3fd', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:38:55', '2021-04-30 16:38:55', '2022-04-30 17:38:55'),
('0f04858bc7c9161860a8ae9e7736d6f27262769d42e174e8b2168507ae54d63a7732c7f355756240', 7, 1, 'AppName', '[]', 0, '2021-04-29 22:12:05', '2021-04-29 22:12:05', '2022-04-29 23:12:05'),
('0f3769a3e027ceecfb5a6334b6e15edd1316d15c52a007f5efd720420396fc04a026084943b74830', 11, 1, 'AppName', '[]', 0, '2021-06-23 21:52:48', '2021-06-23 21:52:48', '2022-06-23 22:52:48'),
('0f5bab0f49f0afd615528c9272d9e8aaf296175d4fee2041c906442897685c29bc7d4da8d5b8625a', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:24:24', '2021-04-30 16:24:24', '2022-04-30 17:24:24'),
('0f8d72eb615682835671f6983173ec0993496c927e84e87bce88edeb740d6249686089dc7278ee9a', 7, 1, 'AppName', '[]', 0, '2021-05-01 22:50:56', '2021-05-01 22:50:56', '2022-05-01 23:50:56'),
('0fc39bdf221f94ff41c00210ffc6a774e072226050b9b65febc24fe39b96fa294b33fbfd33b081a4', 7, 1, 'AppName', '[]', 0, '2021-04-29 21:49:14', '2021-04-29 21:49:14', '2022-04-29 22:49:14'),
('0fdffce3eab319de3bafbdbaa55e2b1f74b2f7b33ece64c795e5db1013ec123b9acc1ea176c89898', 11, 1, 'AppName', '[]', 0, '2021-05-18 13:17:57', '2021-05-18 13:17:57', '2022-05-18 14:17:57'),
('0fe77fad685753c08e2ab5d43acd0e95901b582333273cccf452b34d3b63ab4ec76cc39a6a1ba913', 7, 1, 'AppName', '[]', 0, '2021-05-04 11:03:58', '2021-05-04 11:03:58', '2022-05-04 12:03:58'),
('108db33751f5283847bf966450d23e0515ad709569ac2f50e7a0b3dc814a4a176bec9ce5abb67634', 7, 1, 'AppName', '[]', 0, '2021-04-30 11:02:51', '2021-04-30 11:02:51', '2022-04-30 12:02:51'),
('1090ded248ca14845694e170a27b21a7d53d7242187ade0ed6d6130c73f09f29a97620c43211f0bb', 7, 1, 'AppName', '[]', 1, '2021-05-01 03:41:34', '2021-05-01 03:41:34', '2022-05-01 04:41:34'),
('10da8b02a24bd11ffdb02ec977b8e71619d726109ec3450b7322ab4e77c639e17e26bc62ba5d473a', 7, 1, 'AppName', '[]', 0, '2021-04-29 21:50:04', '2021-04-29 21:50:04', '2022-04-29 22:50:04'),
('11e6dc2b16f0bc78e4e7263810e9fe4cb446c558693565032d861b7aeffb3ce0fedd260722e6b711', 7, 1, 'AppName', '[]', 0, '2021-04-30 15:00:07', '2021-04-30 15:00:07', '2022-04-30 16:00:07'),
('11ff1167ffbbdb452f9f7a286c84a8c5d9fe7edb0e77f3342f9576ee77798f5f994b4b3d34999db6', 7, 1, 'AppName', '[]', 1, '2021-05-01 23:48:03', '2021-05-01 23:48:03', '2022-05-02 00:48:03'),
('12c495df095e6e5150be7a589e1caf8fdd5a9f9d53079e30b189ac32e1e3479adf39ceaf9dd6f450', 5, 1, 'AppName', '[]', 0, '2021-04-28 01:39:24', '2021-04-28 01:39:24', '2022-04-28 02:39:24'),
('12f39ae24c3c2bf383042b5748d85d7ed9624900fb995e47f20dce8afea915b8b7cab4db83152ab0', 7, 1, 'AppName', '[]', 0, '2021-04-30 15:55:11', '2021-04-30 15:55:11', '2022-04-30 16:55:11'),
('12ff779a82ea7b1c15b649469ac1e5a699f4bd2a65eebb30bac4991f17c77f9a508f655eb93520c8', 11, 1, 'AppName', '[]', 0, '2021-06-04 14:09:08', '2021-06-04 14:09:08', '2022-06-04 15:09:08'),
('1354fc71681df3a217c48361f237c7de4cb345ceabcc2373715bc64d4f92372a27368f4a565486b5', 7, 1, 'AppName', '[]', 1, '2021-05-04 08:47:50', '2021-05-04 08:47:50', '2022-05-04 09:47:50'),
('135facdf1549873d47d4dfb3eafd8ba65a2dd81f399b1f001319d69c0c561a9c7949f2e445c572fb', 7, 1, 'AppName', '[]', 0, '2021-04-30 21:45:15', '2021-04-30 21:45:15', '2022-04-30 22:45:15'),
('1396d72f222bf9430811dbb1f8b40489a1f18eb8031bd2da0dfd72a981db18d78a9256b8069834ee', 7, 1, 'AppName', '[]', 0, '2021-04-28 05:53:47', '2021-04-28 05:53:47', '2022-04-28 06:53:47'),
('1401b6583e4f7da7ca35e73104517fbb5d6766ba420f2fe0d2b70fd7756ccec70be9e077e23da699', 7, 1, 'AppName', '[]', 0, '2021-05-01 23:59:20', '2021-05-01 23:59:20', '2022-05-02 00:59:20'),
('144149f72eac396167793545c44233f54e23bb8c07d7be5cb9c8f3cd56e91374eda99dc963aa842f', 7, 1, 'AppName', '[]', 1, '2021-05-02 18:34:25', '2021-05-02 18:34:25', '2022-05-02 19:34:25'),
('14f627e4a6693cadcaa722f5c99cb9edd4f7e543849db7c44302993fcc6c468841caa245d6fb67a9', 10, 1, 'AppName', '[]', 0, '2021-05-10 19:24:14', '2021-05-10 19:24:14', '2022-05-10 20:24:14'),
('1538eb50abd6de284c0a22ef701efb6d9315fe041562c0d74de18e69a666a0b25f199408672dcfed', 5, 1, 'AppName', '[]', 0, '2021-04-28 02:57:12', '2021-04-28 02:57:12', '2022-04-28 03:57:12'),
('1639220d5582e879adc2f93d455f107e45548e38fc5fe902041e21607fbb28c332b52d652d38ce05', 11, 1, 'AppName', '[]', 0, '2021-05-22 19:41:03', '2021-05-22 19:41:03', '2022-05-22 20:41:03'),
('16443fb9d71806c286c8580ddceab387caac69daad00763cc9c2c6b2f98546633bc6c50fd7d81eea', 7, 1, 'AppName', '[]', 1, '2021-05-02 20:43:24', '2021-05-02 20:43:24', '2022-05-02 21:43:24'),
('165730ae7ffcb0011b8f163e65fff4f22071e608e31bed7ecc5c695afc4313710343011a2d84b4e1', 11, 1, 'AppName', '[]', 0, '2021-05-13 17:52:43', '2021-05-13 17:52:43', '2022-05-13 18:52:43'),
('1658cffc3b6a4005b83993e9f3ab8e06e9c8e43a58d621a965ec3d84ce0a324df03a84c03f319dce', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:08:35', '2021-04-30 16:08:35', '2022-04-30 17:08:35'),
('16e1cde8f880c56501ba35263c2b89547063739d21d4f29272b75dd64dcd24f9725ac01f1a79a272', 7, 1, 'AppName', '[]', 0, '2021-04-29 20:16:41', '2021-04-29 20:16:41', '2022-04-29 21:16:41'),
('17d264f661eff50251bc7fb64bb3b6388cb0df349339b2b5230182a993fa14125e67f474429e58c0', 7, 1, 'AppName', '[]', 0, '2021-04-28 06:06:50', '2021-04-28 06:06:50', '2022-04-28 07:06:50'),
('18ba0767fb154929188b2489e31b8aee566163b6dfa1f71e6cc63e8d71927be2b0072452ecb22642', 7, 1, 'AppName', '[]', 0, '2021-04-30 10:43:56', '2021-04-30 10:43:56', '2022-04-30 11:43:56'),
('194b8679ea5a9ce1bc8a51d4b47be78cff48401c4451e4f2eca7e58f393464a2eb7c02a1249ee3db', 7, 1, 'AppName', '[]', 1, '2021-04-29 21:58:39', '2021-04-29 21:58:39', '2022-04-29 22:58:39'),
('1951e5f49095848632f3a91a195ff650351644cad2d159610afef739fa35cefce1d5de5dff1ca106', 7, 1, 'AppName', '[]', 1, '2021-05-08 00:02:25', '2021-05-08 00:02:25', '2022-05-08 01:02:25'),
('19640785a8d0db0aae904544fcc1ba54cb9153c9ba37321b5c9f4abd16fa66195e645ae53b55c4f1', 7, 1, 'AppName', '[]', 1, '2021-05-01 23:00:08', '2021-05-01 23:00:08', '2022-05-02 00:00:08'),
('19b68d045a6bd4085088332545edd1ab097165480d77369dd7be37170259a705a867e1bab3a60b67', 7, 1, 'AppName', '[]', 0, '2021-04-30 10:58:10', '2021-04-30 10:58:10', '2022-04-30 11:58:10'),
('1b244b4ad8b33bf3121d8ab4391dd695044a9f819da58bda2f7d3f96eab3c98e515c9c5a21ec735e', 7, 1, 'AppName', '[]', 1, '2021-05-02 20:29:21', '2021-05-02 20:29:21', '2022-05-02 21:29:21'),
('1b6fb1b126e881c0a4d9804e861864e92d63a52ab05493eae43cdae8334ae7e98a847dc394efd225', 7, 1, 'AppName', '[]', 0, '2021-05-01 22:16:23', '2021-05-01 22:16:23', '2022-05-01 23:16:23'),
('1b74910aa8079451094e943f9e7430a05de294c62f88f6837407ddc0018794769c00350e0b8fa7da', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:10:02', '2021-04-30 16:10:02', '2022-04-30 17:10:02'),
('1c632785fd9fd955aa54ce04ae478c38cd749d2dc855f510a79fef41e724ce74caa20d059a489b38', 7, 1, 'AppName', '[]', 1, '2021-05-02 18:25:29', '2021-05-02 18:25:29', '2022-05-02 19:25:29'),
('1caecc23820bacf602ce49b6cd1ec573056b8c852764ac1c038ce15578d40b81071a848f3cd631f2', 5, 1, 'AppName', '[]', 0, '2021-04-27 19:03:04', '2021-04-27 19:03:04', '2022-04-27 20:03:04'),
('1d8bbae711ecb66ea6d986c19a8805f41ffd2c198afeaaa8051fd8ca435a59bf730f74fef27dc884', 7, 1, 'AppName', '[]', 1, '2021-05-01 23:07:07', '2021-05-01 23:07:07', '2022-05-02 00:07:07'),
('1dacf3dba4b9c2908ee5c57a55c138168ccc11f25bc64a36c92b11671559f35cf121b3da667b79f6', 7, 1, 'AppName', '[]', 1, '2021-05-02 23:40:46', '2021-05-02 23:40:46', '2022-05-03 00:40:46'),
('1e22f4d140be50300abb6e78209d05e8874503d0f8a6d9ba423e9385552bba27d9000ebe1eec2b40', 5, 1, 'AppName', '[]', 0, '2021-04-27 17:44:29', '2021-04-27 17:44:29', '2022-04-27 18:44:29'),
('1eb0e15baa71ed662a35c26d205826092a9da0fdfddd6f0911b31a489417961c3125c26409cdad81', 11, 1, 'AppName', '[]', 0, '2021-05-15 04:01:50', '2021-05-15 04:01:50', '2022-05-15 05:01:50'),
('1eb1075fa34d73d68036a3492ae2ba95831c80b4e52304edf5d635159038f9faca69e9af2ecff232', 11, 1, 'AppName', '[]', 0, '2021-05-19 22:50:04', '2021-05-19 22:50:04', '2022-05-19 23:50:04'),
('1ee2700999346820438b083411f3037fb4210372f3fe6e8831e840e00fd7c18383e6d1fac5c248af', 7, 1, 'AppName', '[]', 0, '2021-04-30 13:29:47', '2021-04-30 13:29:47', '2022-04-30 14:29:47'),
('1ee2d65f45f6198e0904bdaa88e21c14016313b2b8d7c99f91bdce49e6c888377efd746cd00b0128', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:09:36', '2021-04-30 16:09:36', '2022-04-30 17:09:36'),
('1f94b28215b51b9dd1344a3ed847818b1846498cc33900a3b5f18cc5b893174f3e850f649cb7223a', 11, 1, 'AppName', '[]', 1, '2021-06-23 22:56:44', '2021-06-23 22:56:44', '2022-06-23 23:56:44'),
('1fed53d593b168dd91219bd078a7280a2802a0019bebb819ee33b4d52be62940a45d388c524a4815', 11, 1, 'AppName', '[]', 1, '2021-05-30 03:37:36', '2021-05-30 03:37:36', '2022-05-30 04:37:36'),
('2085ea2d5f2e5102c872cbb052ad054bcdf42716b26cad0bd168d24b2d6bd9a11bffa6fabfbdae6c', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:08:38', '2021-04-30 16:08:38', '2022-04-30 17:08:38'),
('2188632b15d4d1abe6b58c4b077f03554f59edeffb7efb82f2553aa8ca68efafaebab5564f92d595', 11, 1, 'AppName', '[]', 0, '2021-05-21 13:16:13', '2021-05-21 13:16:13', '2022-05-21 14:16:13'),
('21c32224d9410b72689b0028e01ad08e4ff43ccf386707e6c993a3bac7939c32e05bfd3ac6aba96f', 7, 1, 'AppName', '[]', 1, '2021-05-01 23:57:06', '2021-05-01 23:57:06', '2022-05-02 00:57:06'),
('21de7f92bc6b7717fddc6641ff81a66beeaddac3b50b81afc2f09186c9d0be591482e407e22606b7', 7, 1, 'AppName', '[]', 0, '2021-04-29 18:46:52', '2021-04-29 18:46:52', '2022-04-29 19:46:52'),
('220d2b2b5943666dabad274936bf26690eb2c05ead4dec47e72c7aee3fe17ad7c08fde56d0b8f194', 7, 1, 'AppName', '[]', 1, '2021-05-01 02:54:18', '2021-05-01 02:54:18', '2022-05-01 03:54:18'),
('2239b00f6c1ae727b75a42a5f8bd77d2c419eeb6b62d642538d718aa7cb8af85b80a81ee1c817b13', 7, 1, 'AppName', '[]', 1, '2021-05-02 22:39:57', '2021-05-02 22:39:57', '2022-05-02 23:39:57'),
('22b631f07432b90811d7353f283feeb41cdf37b18f1affef413493299a1d588bd8760c675505de82', 7, 1, 'AppName', '[]', 0, '2021-05-02 16:33:34', '2021-05-02 16:33:34', '2022-05-02 17:33:34'),
('2317080924c6223d94f07e1caeb5fe8293ede5bbf9ae4e0d3402c5c7d8fc78643acb3d03da958838', 7, 1, 'AppName', '[]', 0, '2021-04-29 18:07:05', '2021-04-29 18:07:05', '2022-04-29 19:07:05'),
('23244b4152a4d4198a745eff97bc13a8ac8093f6e97e710a03c1ad85a2cbd1dd1affc7e3c36568df', 5, 1, 'AppName', '[]', 0, '2021-04-28 02:57:16', '2021-04-28 02:57:16', '2022-04-28 03:57:16'),
('23a9d5a097c1f57d532b5772114e63a7cc82a4f2ede81401baad6d8c7428449a90dcb73fbbd4227c', 5, 1, 'AppName', '[]', 1, '2021-04-28 01:23:14', '2021-04-28 01:23:14', '2022-04-28 02:23:14'),
('24802856dce25614cadaa9eab4d4ef957997b985ed559b6ca34c562f349459291f7cbe692d40672d', 7, 1, 'AppName', '[]', 0, '2021-05-01 02:54:16', '2021-05-01 02:54:16', '2022-05-01 03:54:16'),
('24d14a7020960b43bb4668d739913e6eda86839ba40b703b6f3514d2afdff38e718a1a0cdd71ceb8', 11, 1, 'AppName', '[]', 0, '2021-05-15 08:37:38', '2021-05-15 08:37:38', '2022-05-15 09:37:38'),
('24e2c688adb9feefb1e48f37e82d1bc184113ca74b678b2005fca55375d75ef9bfc1b3f6d08943be', 7, 1, 'AppName', '[]', 0, '2021-05-06 15:32:08', '2021-05-06 15:32:08', '2022-05-06 16:32:08'),
('250ac023d7d504ce02af2cb8a2215895ae1f4a0f037bdf2f6633ad4c3d0ae86cac0b11e3f90f79c0', 7, 1, 'AppName', '[]', 0, '2021-04-30 15:55:05', '2021-04-30 15:55:05', '2022-04-30 16:55:05'),
('266f37c9b8d84f5558a12cd27197588eda570a00592cf67f2570768737f0c8383ac866fddb39b7b7', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:10:04', '2021-04-30 16:10:04', '2022-04-30 17:10:04'),
('2742736a3455e09bbbb94f082783f1e69baffd5f39f28d9089c31cd31a551657a8be72d888e8bfb2', 10, 1, 'AppName', '[]', 0, '2021-05-10 16:13:35', '2021-05-10 16:13:35', '2022-05-10 17:13:35'),
('27d968a546d7ce30e80ee03a856e252af42044a0f8b0b9a0bc0466730c4103dc8a37f9514cd435c7', 16, 1, 'AppName', '[]', 0, '2021-05-30 08:11:56', '2021-05-30 08:11:56', '2022-05-30 09:11:56'),
('280bb1579c3656b8ee8877e8936e5454209b0b66b7974ffbc02949d2652863872e3c67dc49d4df1f', 11, 1, 'AppName', '[]', 1, '2021-06-29 15:36:38', '2021-06-29 15:36:38', '2022-06-29 16:36:38'),
('2873496276e7beb5c1410d656e05e937c716ffb6d6e832b383c52f75c1a1a74d64f4c779510dd233', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:10:14', '2021-04-30 16:10:14', '2022-04-30 17:10:14'),
('2891c3e5ffe27a959008c1068f768b69987f6d5fe32880a474bb57aa1116db3ccebc173f13884afb', 7, 1, 'AppName', '[]', 0, '2021-04-30 13:11:09', '2021-04-30 13:11:09', '2022-04-30 14:11:09'),
('28e8022642744438ab0379a5b9d5d219cf277db59fb8786b59d2926f3d7052e4999f57247320f936', 11, 1, 'AppName', '[]', 0, '2021-05-22 15:56:47', '2021-05-22 15:56:47', '2022-05-22 16:56:47'),
('2920e8c2105236d71e2eaa3a18ec7016571a52c420f20097a32149cc394ea99e59df6f5d9e10ae74', 5, 1, 'AppName', '[]', 0, '2021-04-28 00:45:48', '2021-04-28 00:45:48', '2022-04-28 01:45:48'),
('29ab0f7d0f17ba83a206fcdf360b318584b1a9e7f70b921cabb350f13ea52e6e5bf3d09b34d9edb5', 11, 1, 'AppName', '[]', 1, '2021-05-16 18:05:00', '2021-05-16 18:05:00', '2022-05-16 19:05:00'),
('2ad88cdd378005362b4417101a3058186d630b8678c935cd309c898ccd972fb1a9217af7e4a2ba61', 11, 1, 'AppName', '[]', 0, '2021-05-15 08:37:29', '2021-05-15 08:37:29', '2022-05-15 09:37:29'),
('2b0df5ac5a5d7be85d72fa5228869d1571862ce637fdd66c29c84cef3376336412acbaeea1ccc848', 7, 1, 'AppName', '[]', 1, '2021-04-30 19:38:34', '2021-04-30 19:38:34', '2022-04-30 20:38:34'),
('2b11ba6884a154c9dc4727574091898bf557e79d74c21b3a64eb7102a4efb7e8acfaad07e83a6ddd', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:10:09', '2021-04-30 16:10:09', '2022-04-30 17:10:09'),
('2c5c4ac30a31c678e777e7c7f44a5446deea5a3de78b4f500c3418a2a7b6cd0575deced8d35cf521', 7, 1, 'AppName', '[]', 1, '2021-05-07 05:58:31', '2021-05-07 05:58:31', '2022-05-07 06:58:31'),
('2ce63b9fd2bb47794d5f3fc1ad19bef5c1e76a4a1359e8671b6c2d351bfe1ae7dba51490baa53939', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:05:00', '2021-04-30 16:05:00', '2022-04-30 17:05:00'),
('2ff0f577f75a4298b9be149c8e1ca7ac03127aa219f6adef284ce462b0c3541572c40a44abcea560', 7, 1, 'AppName', '[]', 0, '2021-04-30 10:33:21', '2021-04-30 10:33:21', '2022-04-30 11:33:21'),
('30571d42173d51cbc32124f54e44e2a36825a747a398219409db054a97675026a5d4f892d2b3ba46', 5, 1, 'AppName', '[]', 0, '2021-04-28 00:37:00', '2021-04-28 00:37:00', '2022-04-28 01:37:00'),
('30ebb3d961ef70c22fb88ce936f6e2842d027b6d65e86c06e3aa8b884386d3f57c0f931628cf8dc4', 7, 1, 'AppName', '[]', 0, '2021-04-28 06:03:52', '2021-04-28 06:03:52', '2022-04-28 07:03:52'),
('31298063cfa4659f25d0c482e1e3ab6998808c62607c35ed9ab54c0a5abfeb719dd494b56ae6be4a', 7, 1, 'AppName', '[]', 0, '2021-04-30 10:48:41', '2021-04-30 10:48:41', '2022-04-30 11:48:41'),
('31425923dc106f8373c1c2dc4f356bfa7c123594290e40213caf98cac123218736f192c68de5d435', 11, 1, 'AppName', '[]', 1, '2021-06-09 22:42:09', '2021-06-09 22:42:09', '2022-06-09 23:42:09'),
('31e34569323caa8882d28451974db51a8ac5515a45047dd1dfd497108f159f7f56a0f17ef0880bf5', 7, 1, 'AppName', '[]', 1, '2021-05-02 01:13:59', '2021-05-02 01:13:59', '2022-05-02 02:13:59'),
('325b1f51bbdbf390d6e68676b896b95803e4cf26065a3cf52295b1c46d61d92f34a9e4efe88ba1e7', 11, 1, 'AppName', '[]', 0, '2021-06-04 18:42:54', '2021-06-04 18:42:54', '2022-06-04 19:42:54'),
('3263d4a4e3adf6f40c988f8481523e474ab69bb7bb2a71e1ebe58357608c2f9a5cc51f19095a2fad', 5, 1, 'AppName', '[]', 0, '2021-04-28 00:07:46', '2021-04-28 00:07:46', '2022-04-28 01:07:46'),
('32ac572b3fa9c5a79821e628ea257d969ca30b58dadcddaf781ab55105f985a86d83c086eb72751c', 7, 1, 'AppName', '[]', 0, '2021-04-30 22:20:41', '2021-04-30 22:20:41', '2022-04-30 23:20:41'),
('3338915d92dd2d751f053db14f3045e4118b865f82b3220d60a6ba71609ee3415f0c766858f8f561', 7, 1, 'AppName', '[]', 1, '2021-05-01 02:55:25', '2021-05-01 02:55:25', '2022-05-01 03:55:25'),
('3347d38ff4ba9758a2bcefdb8e3f9c447aa5152ef058fff885defd7f62d2f9fd0dd9e1def5ebc1f8', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:27:13', '2021-04-30 16:27:13', '2022-04-30 17:27:13'),
('33651fb844bb4ebed971d3c8c83b6b2be6e3e3a2c5c360e09372d9b4baa515680ac6da10cc5ec11e', 7, 1, 'AppName', '[]', 0, '2021-04-30 23:39:47', '2021-04-30 23:39:47', '2022-05-01 00:39:47'),
('33a76b30cc6dc38e4950dd5b697cf71f480e27e7e6b42f0103928fd1d85158ad85f88af0877160b2', 7, 1, 'AppName', '[]', 0, '2021-04-30 10:57:00', '2021-04-30 10:57:00', '2022-04-30 11:57:00'),
('33e2f13f67529f51abc4a460a0ba02aa7f4700c06c95315f43247a854d7e1da0f9e4aecfbb9c1456', 11, 1, 'AppName', '[]', 1, '2021-05-27 13:05:29', '2021-05-27 13:05:29', '2022-05-27 14:05:29'),
('33f36db1608ac04f0f75b777dae900088690716452d3ef8f8fe782ccac3dc8497ec3b10b14d08cdb', 7, 1, 'AppName', '[]', 1, '2021-04-28 07:13:33', '2021-04-28 07:13:33', '2022-04-28 08:13:33'),
('34542dc76a9c40f64d4b4dc090baf63edb096161ca9bfce72997b6b1762f3ef05f7f303652a79cd9', 7, 1, 'AppName', '[]', 1, '2021-05-02 23:34:57', '2021-05-02 23:34:57', '2022-05-03 00:34:57'),
('3462030d002ab1536adc3fdaafd23b03fb9451fbf930cf5ca1987c23e1ada90e39da292a8f16ff58', 5, 1, 'AppName', '[]', 0, '2021-04-28 01:50:27', '2021-04-28 01:50:27', '2022-04-28 02:50:27'),
('356e30470e416191c277f4e5cd41fdfd6516db58b376e1c843b5a4f35c0e2b6eafab6ee2aee697bd', 11, 1, 'AppName', '[]', 0, '2021-06-10 13:34:58', '2021-06-10 13:34:58', '2022-06-10 14:34:58'),
('35a5e1f94bdd88128a30b17183411f9eb46b8ee5da905629b2f75d6d84cd8d0a7bea2169a48a769e', 7, 1, 'AppName', '[]', 1, '2021-05-02 05:00:21', '2021-05-02 05:00:21', '2022-05-02 06:00:21'),
('361b363f3ed86924cd56a53ac0dab367d8935c29276b83974c0ddb8759960fdee9dedacca1097733', 7, 1, 'AppName', '[]', 1, '2021-05-02 20:08:23', '2021-05-02 20:08:23', '2022-05-02 21:08:23'),
('373cd3ce8ba19c253a5fa3c29b5a0f9e1776b982c657da893c776ff04955b81f69b23c1d9d4c3997', 11, 1, 'AppName', '[]', 0, '2021-05-19 22:50:07', '2021-05-19 22:50:07', '2022-05-19 23:50:07'),
('373ebc8dce51f3d3cb94c8311b6b343852f5249940b06c456aba7a091334d9bb5148eb6793d461ce', 7, 1, 'AppName', '[]', 0, '2021-04-29 20:18:46', '2021-04-29 20:18:46', '2022-04-29 21:18:46'),
('37b7a6ef9bb1db4b1bdf36409687972df5800ec0aaf4d44481f69d80612afe141ea9d8ddae6bd2fc', 7, 1, 'AppName', '[]', 0, '2021-04-29 21:52:59', '2021-04-29 21:52:59', '2022-04-29 22:52:59'),
('37c2fee4057e6b3db4eaf1a674ceb626a9764431a8af9c16595de44f1eddf427eb9baade8c1c6a70', 7, 1, 'AppName', '[]', 0, '2021-04-30 18:13:25', '2021-04-30 18:13:25', '2022-04-30 19:13:25'),
('380f0291f84c28fbb71f9beb8ef39bbe6468b824a82e8ecde3ab2436c6fb24a0ea5582d7b7fe02be', 11, 1, 'AppName', '[]', 0, '2021-06-03 16:10:27', '2021-06-03 16:10:27', '2022-06-03 17:10:27'),
('383dda9c10942ef64f5280317d2e5f0b5aebef88be37d8a11edcfb577fa65dec76f2e0b60a84675f', 12, 1, 'AppName', '[]', 0, '2021-05-27 13:34:14', '2021-05-27 13:34:14', '2022-05-27 14:34:14'),
('384d3ed3d33c5d3579710e0072520b16f71d4b60da6c4422daec66b84a3459a5f01a20f2ba8e93ac', 11, 1, 'AppName', '[]', 0, '2021-05-13 17:53:51', '2021-05-13 17:53:51', '2022-05-13 18:53:51'),
('385aa2623727c66ceae0cd5a2bbfd971ecd39a99ab86ac31974375244fab065ae2b32ac302ba27e4', 11, 1, 'AppName', '[]', 0, '2021-05-22 20:45:58', '2021-05-22 20:45:58', '2022-05-22 21:45:58'),
('387a0d381668b6245d6b311ce7e2c8b5dd4dc064569f53239dea12c0ac1da2fe8f1be1ce96aaa124', 7, 1, 'AppName', '[]', 1, '2021-04-30 18:26:27', '2021-04-30 18:26:27', '2022-04-30 19:26:27'),
('38cf0879b5b03630f146d0673d31e5fae053f7801d18a16ea6c753de3c352ae17ac222c22c9d6762', 1, 1, 'AppName', '[]', 0, '2021-04-27 02:07:25', '2021-04-27 02:07:25', '2022-04-27 03:07:25'),
('38f84bf7d102e85c4308ecabf1b6d10bac6662955b4158e8a4a5e1ec087b18e5e3e3abb5599793c2', 13, 1, 'AppName', '[]', 0, '2021-05-27 13:43:25', '2021-05-27 13:43:25', '2022-05-27 14:43:25'),
('3936bc37683de6858ce8f9063c90a1cf20282dd638d1f1a89860d65b41664793f5321f3cd9b1814a', 11, 1, 'AppName', '[]', 0, '2021-06-29 19:01:06', '2021-06-29 19:01:06', '2022-06-29 20:01:06'),
('39c9b8c631bd3fca3e2c817420ad9f1b291a1eb1897714d265c887885db411d979f15f7f63594fc3', 7, 1, 'AppName', '[]', 0, '2021-05-07 05:46:57', '2021-05-07 05:46:57', '2022-05-07 06:46:57'),
('3a3aa20e16670eac202a6d71c2bb242940b4e41c2871e3e057f392f51912ba24918b0d7c78da705b', 11, 1, 'AppName', '[]', 0, '2021-05-15 04:01:57', '2021-05-15 04:01:57', '2022-05-15 05:01:57'),
('3a9e9530c7edaff15b47f6959c364350c94a1ee2024f4ea28a62200233ed4a9420744459df1ebaa6', 7, 1, 'AppName', '[]', 0, '2021-04-29 21:28:47', '2021-04-29 21:28:47', '2022-04-29 22:28:47'),
('3aa16bf71813bc2a7e6776ca4cbd6fbf20eae113f87a1845d2da2b3345abe226fe0f955548ab285a', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:11:16', '2021-04-30 16:11:16', '2022-04-30 17:11:16'),
('3afce5ad1b35bcc47d261de56524c4be47bca90028bb330247e47e6cd47faa08bd807c8f312bfbd7', 7, 1, 'AppName', '[]', 1, '2021-05-01 03:50:36', '2021-05-01 03:50:36', '2022-05-01 04:50:36'),
('3b222089a16994f669b027bd63c47962ce313da45ea0342c4402ec4449675a2ad181e3e62c26b572', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:26:17', '2021-04-30 16:26:17', '2022-04-30 17:26:17'),
('3b68dae541fa86f979444fa883c2eb328f1e8147f3cc4c22dbd9b2f1bf6273cbb8e95cb250f6eafe', 11, 1, 'AppName', '[]', 0, '2021-06-30 17:43:17', '2021-06-30 17:43:17', '2022-06-30 18:43:17'),
('3b6f7c2fefb4887ae31fe308be500e25d68cd128ed8c87e582e06e0a930fc0dbd1f9df4e6eda5550', 10, 1, 'AppName', '[]', 0, '2021-05-08 00:16:30', '2021-05-08 00:16:30', '2022-05-08 01:16:30'),
('3be3a9f1d57c3ebd47d919940e782ef57f9ce9af04523da4abdff7d828706944cfa946d8d7cb485b', 11, 1, 'AppName', '[]', 1, '2021-06-09 19:07:19', '2021-06-09 19:07:19', '2022-06-09 20:07:19'),
('3cbf883f53103135446506d3d4ec719712e708f83c23f9074dca20e3b8a5771174183e57c5c6c429', 7, 1, 'AppName', '[]', 0, '2021-04-30 14:30:44', '2021-04-30 14:30:44', '2022-04-30 15:30:44'),
('3d2358f094f760272234aecf0541febc9d2720663a30e22004cee60b879a6a778dfc064242dd6a76', 5, 1, 'AppName', '[]', 1, '2021-04-28 00:57:58', '2021-04-28 00:57:58', '2022-04-28 01:57:58'),
('3e178112ecaa755d1b8ca015c168d24332daab734925d382e06a2f4f6b7287c910b3b1c55d5a7a95', 7, 1, 'AppName', '[]', 0, '2021-04-29 20:17:15', '2021-04-29 20:17:15', '2022-04-29 21:17:15'),
('3f3dfc2634de777a269e92cd5b6155d3df8df155c78113d763ec691e1671490039389b3e3501447e', 7, 1, 'AppName', '[]', 0, '2021-05-01 23:48:42', '2021-05-01 23:48:42', '2022-05-02 00:48:42'),
('3f58c1109bf33885b9bb50052218bc5fd32c6fa9f999f816315bcfab473942466af37de8f2a7dff6', 11, 1, 'AppName', '[]', 0, '2021-06-09 23:00:30', '2021-06-09 23:00:30', '2022-06-10 00:00:30'),
('3fa59e51e7c9d24a2b93fb0289f4aec944cf28fdae1dbb0f8ac734248467a413c0da1b8ed7cf059b', 11, 1, 'AppName', '[]', 1, '2021-05-14 03:05:52', '2021-05-14 03:05:52', '2022-05-14 04:05:52'),
('3fe89adfee5021efc00b178f24311e5d39ede2aeb2d442f2bc0cec3010451e67701ce334bb9b99b0', 1, 1, 'AppName', '[]', 0, '2021-04-27 02:57:47', '2021-04-27 02:57:47', '2022-04-27 03:57:47'),
('403ce1f8a374d5a9986ae0e0fafa012e62924ad805ae0cb4821e80fee60c2f40fde6db7256d462f2', 7, 1, 'AppName', '[]', 0, '2021-05-02 22:24:37', '2021-05-02 22:24:37', '2022-05-02 23:24:37'),
('407b656959a59ce3164715c7caeff452646ee69dfe786a6b01d63f58dc691aed511d03c90e2d9c75', 11, 1, 'AppName', '[]', 0, '2021-06-25 15:54:31', '2021-06-25 15:54:31', '2022-06-25 16:54:31'),
('40a482dbc64e7a4a3393e8b70287d1325713dbf9972cac050c2396671dd115b77fbcebae5ceda175', 11, 1, 'AppName', '[]', 0, '2021-06-24 04:20:06', '2021-06-24 04:20:06', '2022-06-24 05:20:05'),
('40f3c8d672cfc09f82e7e58527cedc0c308751fd9e62534ee98df7731d54ffdb58e992e7c45175d3', 7, 1, 'AppName', '[]', 1, '2021-05-01 21:42:56', '2021-05-01 21:42:56', '2022-05-01 22:42:56'),
('40fc8dce487d2a522eb939974216857144e74c2ab3f194c5829471dd45f1c21aa0f42dbbd4edf280', 7, 1, 'AppName', '[]', 1, '2021-05-02 01:29:20', '2021-05-02 01:29:20', '2022-05-02 02:29:20'),
('410ba3b6c6a176630ace48988236ffa70badb26661950d622d90dacff8b89db208fa7fa47739fc4d', 5, 1, 'AppName', '[]', 0, '2021-04-28 01:43:39', '2021-04-28 01:43:39', '2022-04-28 02:43:39'),
('41ba8b300eb2e74a1df48bae5349de931dfdc0e57a1ef53dc9b3bc76a42d9bf2db57bc8f9ef3b4d7', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:19:06', '2021-04-30 16:19:06', '2022-04-30 17:19:06'),
('41e46793cd5cb4c46f33dfa88bccf6c0113fdd24f4722f5dfbeba244d7ff05804c3883d0c2db694a', 5, 1, 'AppName', '[]', 0, '2021-04-27 07:29:08', '2021-04-27 07:29:08', '2022-04-27 08:29:08'),
('42b0bc7f6d605fb4aaa78c83c14ddb798b83e1c6c83954447a4a2434469df04d20c943cc731b5bda', 7, 1, 'AppName', '[]', 0, '2021-04-29 17:25:52', '2021-04-29 17:25:52', '2022-04-29 18:25:52'),
('44be6926804303840ce36235ae66c9e878d48d9c185c675e9978f98ae1da3aaa02d0a3d50b899f72', 7, 1, 'AppName', '[]', 0, '2021-04-29 18:43:24', '2021-04-29 18:43:24', '2022-04-29 19:43:24'),
('44cdc169aaedd4a881c77088b953e9cf12fed99cb3f9b4ae5d6df40217054a2097adc34afe0550d4', 7, 1, 'AppName', '[]', 1, '2021-05-02 22:28:12', '2021-05-02 22:28:12', '2022-05-02 23:28:12'),
('44d644e24133eff36ee19e3000b557ac4703a18336bdb496945368087feb60b229a3383cd62b6df2', 5, 1, 'AppName', '[]', 0, '2021-04-28 05:36:34', '2021-04-28 05:36:34', '2022-04-28 06:36:34'),
('451dc263cdc8c72eddc3195b770b9405a4b1c6c190904dbeee21296cc16455cd584ec5637c312609', 10, 1, 'AppName', '[]', 0, '2021-05-13 16:34:20', '2021-05-13 16:34:20', '2022-05-13 17:34:20'),
('45690d7a4d3b4816a43b0af24fd9e9f75357257de54bdb4e72f187d3e9494ee5c99156e4647742a6', 11, 1, 'AppName', '[]', 0, '2021-06-28 10:00:59', '2021-06-28 10:00:59', '2022-06-28 11:00:59'),
('457b7af76574c7a202f0158b5f7b7e5ddefb5e8f31a01bef77386172ec6763941e0a022c9ed90c09', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:09:40', '2021-04-30 16:09:40', '2022-04-30 17:09:40'),
('4594dc69819be7b3b6aa0c2bdd2d3d11cafca9043b430c22d8a69cdd8779a120fdcd99a640e202b6', 11, 1, 'AppName', '[]', 0, '2021-05-31 18:36:08', '2021-05-31 18:36:08', '2022-05-31 19:36:08'),
('45e9a9b6fde4198d9dd8766f4c57f0da65df662a4771783e13825087645274b889d0e9bd841350c7', 7, 1, 'AppName', '[]', 0, '2021-04-30 12:52:58', '2021-04-30 12:52:58', '2022-04-30 13:52:58'),
('466b26e96f5816ffd77f4f4df5aded1b7de9bd092784b55b8ab1c584c84167c8022b66d30c0083c8', 11, 1, 'AppName', '[]', 0, '2021-06-03 09:20:58', '2021-06-03 09:20:58', '2022-06-03 10:20:58'),
('466e5975d69f02bd04ef0a98f45a595cad77d59409be844c1a517f87d2e1044c5ebfbb1de582b231', 7, 1, 'AppName', '[]', 1, '2021-04-30 23:21:25', '2021-04-30 23:21:25', '2022-05-01 00:21:25'),
('46df811c9513e7ef23d0c756a045cf93be8612d5dcee316aefc81d46774a47bc7458801b7d972cd5', 11, 1, 'AppName', '[]', 0, '2021-05-22 13:05:45', '2021-05-22 13:05:45', '2022-05-22 14:05:45'),
('473a754ca83a1f3180b207e70a1ed3a4f50c79e14a7b419143b7a891fc1b051d75efbdea7078ef08', 7, 1, 'AppName', '[]', 0, '2021-04-30 13:50:35', '2021-04-30 13:50:35', '2022-04-30 14:50:35'),
('48d36efeec8d06c1ec8230a793d455b74ca27dbed81c1d2b2526e092ba17d228ad44da0ca08c1403', 5, 1, 'AppName', '[]', 0, '2021-04-28 01:39:56', '2021-04-28 01:39:56', '2022-04-28 02:39:56'),
('48f821907055727241522d1b8608a8f03e4e9a30726f606e45bb8fe2c32e8ccb47c1f122f756006b', 7, 1, 'AppName', '[]', 0, '2021-04-30 15:45:39', '2021-04-30 15:45:39', '2022-04-30 16:45:39'),
('49d3075466b2361b62264ea9a62abf4ed6c1b916f5b59370540bdfe5a2e1f07b365d6a0fc78a67a5', 7, 1, 'AppName', '[]', 0, '2021-05-07 18:31:36', '2021-05-07 18:31:36', '2022-05-07 19:31:36'),
('49d844ba88f3842ed84e87661249321201f7b275ecd1b35d3ad34e5bee367dcb336429c7e61d6d71', 7, 1, 'AppName', '[]', 0, '2021-05-01 21:35:03', '2021-05-01 21:35:03', '2022-05-01 22:35:03'),
('4a10b4e165a79b171d3a024d4881917737c623c56352fbbb98d38affce763a81aedfa50565ed2ecc', 7, 1, 'AppName', '[]', 0, '2021-04-30 23:21:49', '2021-04-30 23:21:49', '2022-05-01 00:21:49'),
('4a21884689587ffc18992ee52f205e4981f763aff72640105872c0ba87b392cbfdd5d5938ff99469', 7, 1, NULL, '[]', 0, '2021-05-02 22:24:32', '2021-05-02 22:24:32', '2022-05-02 23:24:32'),
('4a9154037055aae298a80b89123370da06227d20fef47f2b806a4672f7d31a23fd2f40b67d18456b', 7, 1, 'AppName', '[]', 0, '2021-04-30 13:16:59', '2021-04-30 13:16:59', '2022-04-30 14:16:59'),
('4aa329d80418724e4721dda5a4685905d82a5458a8b5ee94122da74835959a3b065f1e3c58c955bd', 17, 1, 'AppName', '[]', 0, '2021-06-04 14:20:02', '2021-06-04 14:20:02', '2022-06-04 15:20:02'),
('4b0aa4e89acac7d534921fc6b80b94abba194545b4052e3e2dec77f4d1087ec668b0c653ac33f842', 13, 1, 'AppName', '[]', 1, '2021-06-23 22:56:20', '2021-06-23 22:56:20', '2022-06-23 23:56:20'),
('4b201f36ca7de62e127522edf69f6df326bd6a38f0967f9541361d769623f8e48f96d37495aea059', 7, 1, 'AppName', '[]', 1, '2021-04-30 18:30:56', '2021-04-30 18:30:56', '2022-04-30 19:30:56'),
('4b3faa177ebf7d0f5d0cdb8bb1d61eddf2945926ed5da1a07cbfc1721067edaff5a4f19bbe0c51bc', 7, 1, 'AppName', '[]', 0, '2021-05-01 00:08:05', '2021-05-01 00:08:05', '2022-05-01 01:08:05'),
('4b8b9f8b99aa0ce56addbef0b908f61337e407c413dda32b88225fc3803cfdc8aa61bf8eaf55fe2f', 7, 1, 'AppName', '[]', 0, '2021-05-05 22:47:39', '2021-05-05 22:47:39', '2022-05-05 23:47:39'),
('4b9a1319ee27e727dc018b68cc5b1e92f09f15a76a2fff2a85659be11b7c47df9c962c50e328162b', 7, 1, 'AppName', '[]', 0, '2021-04-30 15:47:08', '2021-04-30 15:47:08', '2022-04-30 16:47:08'),
('4bfaf7b4ca46b9b4a1707336b197e67e6cfda7100b1880c55503825836fc22148e3d539c5e7e864e', 5, 1, 'AppName', '[]', 0, '2021-04-27 06:14:11', '2021-04-27 06:14:11', '2022-04-27 07:14:11'),
('4c28b1fc321e2dbd5b17184677aab7366d44cac969d390244a99d037c71ee08b4c46dd4f0858993c', 7, 1, 'AppName', '[]', 0, '2021-04-29 17:19:39', '2021-04-29 17:19:39', '2022-04-29 18:19:39'),
('4c4232eab4902a29578996e56c638ce509f45e1fce79901fde8c5dbfdcd98256b0c8c19a5e07d2f5', 11, 1, 'AppName', '[]', 0, '2021-06-24 00:53:28', '2021-06-24 00:53:28', '2022-06-24 01:53:28'),
('4cf30105113a2c61a49f96223e15ca464573fbe61c5f86f3f9410d74f9c16b02fd9f1835f20c41f1', 7, 1, 'AppName', '[]', 1, '2021-04-30 19:33:21', '2021-04-30 19:33:21', '2022-04-30 20:33:21'),
('4d2d34b254804d5b22bf9f43bdf17f2a8c493b8be672fd9f5c48823072bde36911308c36e7e9e0ff', 7, 1, 'AppName', '[]', 0, '2021-04-30 18:16:29', '2021-04-30 18:16:29', '2022-04-30 19:16:29'),
('4d630ca4930d38282bd3278b9d3cf2b0b6e22d8e8ed47bec492bbcdab6a02eef090b94e849585fda', 11, 1, 'AppName', '[]', 1, '2021-06-09 22:43:08', '2021-06-09 22:43:08', '2022-06-09 23:43:08'),
('4daf8f312c0b5f56fa5299dc408656b015ebe452f55b060b4f9fa0f38f061414f60bcab87f3745d8', 7, 1, 'AppName', '[]', 0, '2021-05-03 23:53:09', '2021-05-03 23:53:09', '2022-05-04 00:53:09'),
('4ddcfd83ee992e57782af150a69a29b05747ceaf92d9da56351b12b91a9372621e9b79f0491e64cf', 7, 1, 'AppName', '[]', 0, '2021-04-28 05:57:53', '2021-04-28 05:57:53', '2022-04-28 06:57:53'),
('4df4d3cb12e608462d996c70ed90cb0526bd42c098e5956c24ad852e2bda6811f48ed970556bed1d', 10, 1, 'AppName', '[]', 0, '2021-05-13 16:35:31', '2021-05-13 16:35:31', '2022-05-13 17:35:31'),
('4e1974e6aebdf248e2bbfce6cb50b53a741fb4946c97669255f9d8dbd307e98e393ee99477dcdb97', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:09:58', '2021-04-30 16:09:58', '2022-04-30 17:09:58'),
('4eb0e3ceb9f79470b86bb052f2c15aae84794b64317e5b7367eb6e445442b99283edf3779ebe389a', 7, 1, 'AppName', '[]', 1, '2021-05-02 18:24:07', '2021-05-02 18:24:07', '2022-05-02 19:24:07'),
('4f2e2cd0473612bc8a19427bf1fa2b07157dedb40d72b2f0ec6af0b989d459cabc21152974051261', 7, 1, 'AppName', '[]', 0, '2021-05-01 23:20:03', '2021-05-01 23:20:03', '2022-05-02 00:20:03'),
('4f757ae5f75d9ee226b3e536cc03a1fb6839bc3cfb45813741b4b2ea77cb9e87f0f55c14a244885c', 5, 1, 'AppName', '[]', 0, '2021-04-28 00:47:40', '2021-04-28 00:47:40', '2022-04-28 01:47:40'),
('4fd139f809dff635ea26ffa9ba9ec28cb21c752a7522d98e66cbfd71fd44f73fd902cf93a063fdca', 7, 1, 'AppName', '[]', 0, '2021-05-03 23:53:12', '2021-05-03 23:53:12', '2022-05-04 00:53:12'),
('4fd2abaa3b9cef1351935c8d2444f35ed6421248cae17d18c970640680b443f0859e31220d8e673b', 7, 1, 'AppName', '[]', 1, '2021-04-30 18:20:35', '2021-04-30 18:20:35', '2022-04-30 19:20:35'),
('4fddd82fb061027c36f034743911a421a2e304fbb56eb3b8817549381c0b4d08def2b72732d7c7cc', 7, 1, 'AppName', '[]', 1, '2021-05-01 22:07:32', '2021-05-01 22:07:32', '2022-05-01 23:07:32'),
('500ab9d1e778592424184337de4fbce145f585b866537dae777d085d23b2a4fe11740ff879bbc652', 7, 1, 'AppName', '[]', 1, '2021-04-30 18:27:14', '2021-04-30 18:27:14', '2022-04-30 19:27:14'),
('5118739f4c93b8109e53add2179505388cf7f31aa66d71ab9711da1d70deefc3b31274d3e1a74d57', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:08:15', '2021-04-30 16:08:15', '2022-04-30 17:08:15'),
('514d76e1aebe0b22b1a282fd549ff37532db9051f8bd972c50655fbd2b0e77d148cd5a77a177fe20', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:09:56', '2021-04-30 16:09:56', '2022-04-30 17:09:56'),
('52353818c619b56623088f7cff15ea88ebabf200506b6bb3cd16a2ad5f68bfe8ece7968426fdf15a', 7, 1, 'AppName', '[]', 0, '2021-04-30 17:03:50', '2021-04-30 17:03:50', '2022-04-30 18:03:50'),
('52405502698a31089977319bc6c6ce5d33721196c4e682b79ea9e1e8c9b119abbf7888b1f1219906', 7, 1, 'AppName', '[]', 1, '2021-05-01 22:13:30', '2021-05-01 22:13:30', '2022-05-01 23:13:30'),
('53de2732bbdb66e8958a8042d6a724b1b74a8748aff87c47c5bcbc5dd7a6d06ea464e7a92f38d362', 5, 1, 'AppName', '[]', 1, '2021-04-28 01:15:00', '2021-04-28 01:15:00', '2022-04-28 02:15:00'),
('540e4284ff0f801b3526574dcbe2f242a94df137ba62cc9f950adda64ae4b004f17ab7668ef12d1a', 13, 1, 'AppName', '[]', 1, '2021-06-25 15:37:18', '2021-06-25 15:37:18', '2022-06-25 16:37:18'),
('54443efa60fc89d0db7e6806483339f4216247e32961b38ad60dc9e9130d5afabcf19eadeaf97f63', 7, 1, 'AppName', '[]', 0, '2021-05-02 05:39:55', '2021-05-02 05:39:55', '2022-05-02 06:39:55'),
('547d0593a78804511a837da4de9d907fea715d20a7e2db08e01d4d675e7d041d6f8710a86b3bda5e', 10, 1, 'AppName', '[]', 0, '2021-05-13 17:42:12', '2021-05-13 17:42:12', '2022-05-13 18:42:12'),
('553eced638377aca80d8b9738c2e8f4cdc1733b51baa1ac29262adea2f28b6634884815cbfcecefd', 11, 1, 'AppName', '[]', 0, '2021-05-23 12:08:04', '2021-05-23 12:08:04', '2022-05-23 13:08:04'),
('555ba45f28c2e5989a9374259857bbb616e30a5ecbfecf546f96ac0cdf22aa6886bb434a21ede32a', 11, 1, 'AppName', '[]', 0, '2021-06-09 19:02:00', '2021-06-09 19:02:00', '2022-06-09 20:02:00'),
('5601cda15db5da84a89713cb68c8fb25197775bed7b09907069bf5dc377f6296615f9c29c293658f', 7, 1, 'AppName', '[]', 0, '2021-05-02 23:56:03', '2021-05-02 23:56:03', '2022-05-03 00:56:03'),
('564541aa3d75b0b5ed6c2d00246ae043aaa79116269a61b87fc5ff6cb04d19666ae7976615f15893', 7, 1, 'AppName', '[]', 1, '2021-05-02 18:36:42', '2021-05-02 18:36:42', '2022-05-02 19:36:42'),
('5687a52d86861bc8cbfbe77008a3f5ca4994783b39edc848e14c3381e12ecec87f4cac64cdcc5744', 11, 1, 'AppName', '[]', 1, '2021-05-21 13:16:15', '2021-05-21 13:16:15', '2022-05-21 14:16:15'),
('569a3c172db951b4f31dce47e7d83e6488d20369d377b83ca4093117c88eb78b8fbbf86107e333b9', 11, 1, 'AppName', '[]', 0, '2021-05-15 08:37:17', '2021-05-15 08:37:17', '2022-05-15 09:37:17'),
('57102441dc09e30870bc32e4ad83e0c34045c7ca9fe953d9cea16f32a8bc3ce05ff8076fbf01ff89', 7, 1, 'AppName', '[]', 0, '2021-04-30 15:50:10', '2021-04-30 15:50:10', '2022-04-30 16:50:10'),
('57417bca58dc1dd043c3245d8ab4ca5ad0b14b992565583ed89f378f1cdd56d2761a66576c49317b', 11, 1, 'AppName', '[]', 0, '2021-05-15 08:37:35', '2021-05-15 08:37:35', '2022-05-15 09:37:35'),
('57c841cdbe9c818d9b67ab6096144ffa371cb9a912c7eb1b2fb1975ccf4f14db80a78dd3e22baf33', 18, 1, 'AppName', '[]', 1, '2021-06-09 16:56:22', '2021-06-09 16:56:22', '2022-06-09 17:56:22'),
('580594fd3c4a02b830a317d9c582b8c0f080d25626732ac3723896ee0bdfacbbac21a40a9305730d', 8, 1, 'AppName', '[]', 1, '2021-05-04 01:55:16', '2021-05-04 01:55:16', '2022-05-04 02:55:16'),
('58519e8172bfff44c8b088a694757417697b61512a532110ee3d00609954eddfec923ef442608bd6', 11, 1, 'AppName', '[]', 1, '2021-06-29 15:53:16', '2021-06-29 15:53:16', '2022-06-29 16:53:16'),
('58776c03db5844a31dd7eba0db5beb894065b63871e991c9cb08bc5d10d2569549fb7ceaaa926b00', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:28:33', '2021-04-30 16:28:33', '2022-04-30 17:28:33'),
('589f1c1150073bab24fd5544ac4ed64d6cf660cf7c55d69b2c89597beeeeaf689da9722e3b8cb737', 7, 1, 'AppName', '[]', 1, '2021-04-30 23:33:31', '2021-04-30 23:33:31', '2022-05-01 00:33:31'),
('58dbbc456a183e211596832f7aff165dc8723b6aa7cfe920ceff73c51cd5d6e809ee25458b26e97a', 7, 1, 'AppName', '[]', 0, '2021-05-05 18:05:06', '2021-05-05 18:05:06', '2022-05-05 19:05:06'),
('58dc3ce7b5a070873d327b009d1227b09c43219e05347db12838a20293b86fe63b20e6dba110033e', 7, 1, 'AppName', '[]', 0, '2021-04-29 17:22:36', '2021-04-29 17:22:36', '2022-04-29 18:22:36'),
('593226f6c0dd580bdb6aa671b6f09bb2014079a9ca5f9790047259d455197ad3b5468f554ec0daae', 7, 1, 'AppName', '[]', 1, '2021-04-30 23:48:56', '2021-04-30 23:48:56', '2022-05-01 00:48:56'),
('5940686565f51e2d928cd89bd3d373b81a8a4dcd29314e7722b7b831fc9014a95a50c95a328ff09a', 11, 1, 'AppName', '[]', 1, '2021-05-19 22:50:12', '2021-05-19 22:50:12', '2022-05-19 23:50:12'),
('59dd43aa3b0c0ac9d472d6a1e13be39cd617ae9c84ada12ff456ce2be1cba1e71ae251f89054ec29', 11, 1, 'AppName', '[]', 1, '2021-06-04 14:09:10', '2021-06-04 14:09:10', '2022-06-04 15:09:10'),
('59f70ca7a910cb4ec1caf3e96df858f8e52e6eb95f2ab931a6f540cd49efade2988b10916cc136a6', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:10:01', '2021-04-30 16:10:01', '2022-04-30 17:10:01'),
('5aba365251f22a568c94c9181e25be8dfa4d48a252b4213825c6d069fff8a261ddc64321091fa56a', 11, 1, 'AppName', '[]', 0, '2021-06-10 18:22:44', '2021-06-10 18:22:44', '2022-06-10 19:22:44'),
('5c6dfff2b5f0a32f5b69a515eed3645e60252f27b825fca8d786fcb03dd4cc4cf88370bac7e1cb26', 7, 1, 'AppName', '[]', 1, '2021-05-01 22:02:38', '2021-05-01 22:02:38', '2022-05-01 23:02:38'),
('5c717cb1758cd4392a7c96b975999537a97602c7159cc126aa742d388077be33ac796474c241b2e2', 5, 1, 'AppName', '[]', 0, '2021-04-28 01:12:36', '2021-04-28 01:12:36', '2022-04-28 02:12:36'),
('5d2943f69f90951a1e8f2b2a488dc19b1bd6f159f0080d27bdd733c7c1fb914472c057e95c0eb55c', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:26:15', '2021-04-30 16:26:15', '2022-04-30 17:26:15'),
('5dc1e80e70a9547d6b452ee6721bf2cf92f6c3699633964bc4a0fc18169869acb0eca464b4c9bc7c', 11, 1, 'AppName', '[]', 1, '2021-06-09 14:32:33', '2021-06-09 14:32:33', '2022-06-09 15:32:33'),
('5dec90a73a3b6354198000153e300e4867ae6ba7c17b222aa4a8bd0563c0846f697a3b6744e19a5c', 11, 1, 'AppName', '[]', 1, '2021-06-08 12:44:17', '2021-06-08 12:44:17', '2022-06-08 13:44:17'),
('5f96201e9e370e884a77b32d1985c0d4036d96a2cf2362f8bd4c7aa8e2c829ef76427a00f1323f83', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:08:20', '2021-04-30 16:08:20', '2022-04-30 17:08:20'),
('5fa7b1e8485887383e59a3026f5d246c379b7e9cd9f9bad227dfb7f50b1cad9e0c8c2eea202920ce', 7, 1, 'AppName', '[]', 1, '2021-04-29 18:19:37', '2021-04-29 18:19:37', '2022-04-29 19:19:37'),
('607c96b09da1d54ba42c2042416a2e392b1380afbc5867947d6f1c0cf0a1f3360b02f4761eb17493', 11, 1, 'AppName', '[]', 0, '2021-06-30 17:16:22', '2021-06-30 17:16:22', '2022-06-30 18:16:22'),
('6094bf29230517f89b3e7074ac5f09da065ca14ff9f3c50ecf0a4cb84ac232a022e476a181a18f30', 11, 1, 'AppName', '[]', 0, '2021-06-29 16:31:19', '2021-06-29 16:31:19', '2022-06-29 17:31:19'),
('60a305a2b9513be5fed785257e006fd5fd8dfebe5969e84745d628b9fc64706d483bbc0b9d01777e', 9, 1, 'AppName', '[]', 0, '2021-05-04 10:59:33', '2021-05-04 10:59:33', '2022-05-04 11:59:33'),
('60a7e8bd522b2eb1accd95bea694838630334f8bb0a75cf1f5569c779b0b936c329d0792a1189505', 11, 1, 'AppName', '[]', 1, '2021-05-15 05:49:33', '2021-05-15 05:49:33', '2022-05-15 06:49:33'),
('6118743e8f617f65154dba085501e45b9649b9e774c0d61e0e8479f70cd35a7c1537f401e13fccf2', 11, 1, 'AppName', '[]', 1, '2021-06-28 09:25:58', '2021-06-28 09:25:58', '2022-06-28 10:25:58'),
('612afdcd4fd5d884b15cd379049457ccb0951ea235917418094267bd96df3c8260798bab7885eb69', 7, 1, 'AppName', '[]', 1, '2021-04-30 18:18:50', '2021-04-30 18:18:50', '2022-04-30 19:18:50'),
('613e9825cd6e8d2f4a6bdbaa9a060819162fbf425a10c67ba4e3cd94138a196fc219394305fd45a9', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:27:17', '2021-04-30 16:27:17', '2022-04-30 17:27:17'),
('6165fe9737191828cdc99e7889c09f1f85050dd07c8072cb595c6ddfe66a0d5b64daf28ad702d9bc', 7, 1, 'AppName', '[]', 0, '2021-04-29 18:20:20', '2021-04-29 18:20:20', '2022-04-29 19:20:20'),
('623897baf34142302c5c05f7e24ce9c578dc4d9fe02071cdc38b5754eee4df7b026bf364905c02be', 7, 1, 'AppName', '[]', 0, '2021-04-30 18:29:46', '2021-04-30 18:29:46', '2022-04-30 19:29:46'),
('62c0127b25c2e0d53ad8accc4dce17b46d36791131b9d0a5979451f7ffca55939e12bebbf452bce6', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:26:18', '2021-04-30 16:26:18', '2022-04-30 17:26:18'),
('62fd60c3362c5b3dfea0896ab951c4da7c1f040293505625c99a409641d8368495fb3175b53ae062', 10, 1, 'AppName', '[]', 1, '2021-05-08 00:19:01', '2021-05-08 00:19:01', '2022-05-08 01:19:01'),
('6342f2326dc5fcbc6e8abde1023d4e34ca5d93bf47d7d90c94f4c3d3f1d2312402d7624ca6e1702e', 7, 1, 'AppName', '[]', 1, '2021-04-29 17:56:28', '2021-04-29 17:56:28', '2022-04-29 18:56:28'),
('6410342a6d574ed327f8ff24460dad744df5abb6d8f3f0ee6328085284c33e9cecdc356db3935295', 11, 1, 'AppName', '[]', 1, '2021-05-27 14:13:34', '2021-05-27 14:13:34', '2022-05-27 15:13:34'),
('6414680eeaaaf7417da2f00249d32bb0fb86d84f9cb3dd67e4de12c5f37e28b3061fc642f1a4c8a8', 11, 1, 'AppName', '[]', 0, '2021-06-25 15:39:03', '2021-06-25 15:39:03', '2022-06-25 16:39:03'),
('644142ac680d8e91ade3b5441ca34af0408a0091443a3e6e553193c019dfa37dbf9d4e5d7ce07a52', 7, 1, 'AppName', '[]', 1, '2021-05-01 03:52:31', '2021-05-01 03:52:31', '2022-05-01 04:52:31'),
('645814f2b33298d9f8a3233abebe88af2c5ecfdb812e0026b2649160c4cd906738bd7b8ce28bcfcb', 11, 1, 'AppName', '[]', 1, '2021-06-08 12:51:00', '2021-06-08 12:51:00', '2022-06-08 13:51:00'),
('64824e923e87d849d354a2defa40457d7bf8e83418bb08fb527056d991e9283715657a8a9b7a3afe', 11, 1, 'AppName', '[]', 1, '2021-05-27 13:37:02', '2021-05-27 13:37:02', '2022-05-27 14:37:02'),
('6539d33b80f391b83d89437b6c5fdd712dc2a4b0ebdd3fbc6bec9ace54be8f71751536f67a9a182a', 6, 1, 'AppName', '[]', 0, '2021-04-28 05:47:20', '2021-04-28 05:47:20', '2022-04-28 06:47:20'),
('65b5b8c15534d6c7ab4457c21aa70f288e57b947f3701e316083d8a75582ec769db0b41a1a411acd', 11, 1, 'AppName', '[]', 1, '2021-05-21 14:11:40', '2021-05-21 14:11:40', '2022-05-21 15:11:40'),
('66591aad3fbe5c311a07a652eb8d287e351c4afec8f33fe2a43bd19d4114acf374432daccb01c81c', 11, 1, 'AppName', '[]', 0, '2021-05-30 11:11:33', '2021-05-30 11:11:33', '2022-05-30 12:11:33'),
('6700973db9d0204956059ddce2d54795e837a5f24ea4ae7870270ed11bd72fef361b935405cdf554', 7, 1, 'AppName', '[]', 0, '2021-04-29 18:50:01', '2021-04-29 18:50:01', '2022-04-29 19:50:01'),
('67210254f1be75cbc4e30fbf8615214020ffff628860fb50ba55da716d0814754e20165aec6e9f19', 11, 1, 'AppName', '[]', 0, '2021-06-03 09:20:52', '2021-06-03 09:20:52', '2022-06-03 10:20:52'),
('677d1a12bbfd9312d4b630c8ca88d7f5720ba99ed326b4833f7f82c194bcb013ebcb5188d213c8f2', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:10:03', '2021-04-30 16:10:03', '2022-04-30 17:10:03'),
('67a1e8f3d3643a1d88f421508fb4777bfc631974f57af2fb47091ad446b822664f6f6ab5be98e04b', 7, 1, 'AppName', '[]', 1, '2021-05-02 01:28:21', '2021-05-02 01:28:21', '2022-05-02 02:28:21'),
('682180749ff0d8e8644a2a268298cf8d7605d629d43a50a94722ac7624b1733d799750d3f0ce26c3', 5, 1, 'AppName', '[]', 0, '2021-04-28 03:04:14', '2021-04-28 03:04:14', '2022-04-28 04:04:14'),
('6932c92f076e3e0fb4d1d82a34b368d56a13490e51dc2faec8103482d846fec7fc8e2a9216f367c6', 7, 1, 'AppName', '[]', 0, '2021-04-29 19:44:23', '2021-04-29 19:44:23', '2022-04-29 20:44:23'),
('6aa7c0b426d15dd03a99dfbf1450b0b5e52d4c1650aa47f5c09b77d7dd69e8ec66f05a3e7deecc92', 7, 1, 'AppName', '[]', 0, '2021-04-30 14:42:02', '2021-04-30 14:42:02', '2022-04-30 15:42:02'),
('6adeb30230c6bf03c6927f7273a7782459e9fc045f2335fcaaf53f01b7390435d96e1f4367d08723', 10, 1, 'AppName', '[]', 0, '2021-05-08 06:07:08', '2021-05-08 06:07:08', '2022-05-08 07:07:08'),
('6ae99db922bf6406b16b2347fc75da965eafca0f74a2e1ba54c0a18e28d749cd0d570f22802c41bb', 7, 1, 'AppName', '[]', 0, '2021-04-29 19:34:32', '2021-04-29 19:34:32', '2022-04-29 20:34:32'),
('6c06004a967fc592c303fb1e78a850e0744a802983c75811836230efc939373d607e0ee8da1dce18', 11, 1, 'AppName', '[]', 0, '2021-05-14 03:08:20', '2021-05-14 03:08:20', '2022-05-14 04:08:20'),
('6caa33f9c6d056dd95b323bd54fd59f59f80ad5ad4d6d6bf9e6fa4c9f5bec53ad78722f5b18c7413', 5, 1, 'AppName', '[]', 0, '2021-04-27 06:15:59', '2021-04-27 06:15:59', '2022-04-27 07:15:59'),
('6e01e7b6cc9226265f06742d604d7122ee76f59244443883a1408c37d9c10a88f87d18dc5ad41d9e', 10, 1, 'AppName', '[]', 1, '2021-05-10 10:41:09', '2021-05-10 10:41:09', '2022-05-10 11:41:09'),
('6e63b3c06cf9e40edb539a493e2ae6b96f7459a7f0fdd35cf1bb3dbf6f4be2764c66d23deb4693a6', 11, 1, 'AppName', '[]', 1, '2021-06-28 11:53:41', '2021-06-28 11:53:41', '2022-06-28 12:53:41'),
('6ea11148c67303dfb4bff4f4b770e9270f4ed3f07f5612c52fe8094905c680d06b76a98d20c13153', 7, 1, 'AppName', '[]', 0, '2021-04-28 06:08:58', '2021-04-28 06:08:58', '2022-04-28 07:08:58');
INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('6ebe88b89e7bad90e0641756e88e56080abdf4c26b34edbe70bfd2aeeb19da1df834f1fe896e2a25', 7, 1, 'AppName', '[]', 1, '2021-05-01 22:06:21', '2021-05-01 22:06:21', '2022-05-01 23:06:21'),
('6f8338137a0a55bb41054cc2a1ee969eec5cd869699db77e1c9ddebe13886f503ee3473288ca291e', 7, 1, 'AppName', '[]', 1, '2021-05-07 06:04:30', '2021-05-07 06:04:30', '2022-05-07 07:04:30'),
('6fe1084ba29b25173dfbb6e767948a1098a55007942cae2d597b0b5fe5de1a22181d6bdd40341e21', 7, 1, 'AppName', '[]', 0, '2021-04-29 18:21:31', '2021-04-29 18:21:31', '2022-04-29 19:21:31'),
('71592bac2d2b3642c99c72c6b66c5e03633ec4eb1e747cc9f53bbb77e15aabf3e4b4b370e8030572', 7, 1, 'AppName', '[]', 0, '2021-04-28 07:00:03', '2021-04-28 07:00:03', '2022-04-28 08:00:03'),
('71b35dae60d4d62b70176924ca463e35ccea04e3310d3243aef66ae8003e0006cf3175fd03853af6', 7, 1, 'AppName', '[]', 0, '2021-05-01 22:05:41', '2021-05-01 22:05:41', '2022-05-01 23:05:41'),
('7206a281004d0c32998a4892efd5591baed53a59a3dfd8f3da0dcc574eff700cbc8c832c62e16ec0', 7, 1, 'AppName', '[]', 0, '2021-04-30 23:54:22', '2021-04-30 23:54:22', '2022-05-01 00:54:22'),
('72d828f6bbf75951377f8852a4546a6eea48b3ae97cf95752c65797870a34d16051e18afed557603', 11, 1, 'AppName', '[]', 0, '2021-05-18 19:40:50', '2021-05-18 19:40:50', '2022-05-18 20:40:50'),
('72f105c3f059270c498f5f038d0d883fedb92ee3849268f3edbc6ea1b04c8e0be581e230fe3ac9a2', 7, 1, 'AppName', '[]', 1, '2021-04-30 19:36:50', '2021-04-30 19:36:50', '2022-04-30 20:36:50'),
('7571b78f5f19f1a94c6eeb1e5c62f68018e39fc82a1699bcaa649e359eb0efee90ac472eb3b7109f', 7, 1, 'AppName', '[]', 1, '2021-04-30 19:37:35', '2021-04-30 19:37:35', '2022-04-30 20:37:35'),
('7592f320339c5278b002e0dd67e57a218fe110a8da081da08d1d00fd27d47e19a71e9d5a601a9d38', 11, 1, 'AppName', '[]', 0, '2021-05-16 09:45:34', '2021-05-16 09:45:34', '2022-05-16 10:45:34'),
('75dda1319be1633dcb448aeab7a84f9f53d7a9d038563baa60854176506e65e7425d406a53fcb225', 10, 1, 'AppName', '[]', 0, '2021-05-08 04:01:07', '2021-05-08 04:01:07', '2022-05-08 05:01:07'),
('760922780e3756cf11d6be63ed23acdd6cc96e8f938c675ff40539863d5d8bbe530b8e0f2995b2b9', 11, 1, 'AppName', '[]', 1, '2021-06-29 13:47:36', '2021-06-29 13:47:36', '2022-06-29 14:47:36'),
('767ab71831b956d80c02b598ead1020c32badf8e276b36b60d889ccacb5189fda5b617df5bd6a166', 5, 1, 'AppName', '[]', 0, '2021-04-28 01:49:06', '2021-04-28 01:49:06', '2022-04-28 02:49:06'),
('774f74be2855e5e869ee9d875a8e17009faa4d40480211a995486cb27400a2574760e9eff6250f6b', 11, 1, 'AppName', '[]', 1, '2021-06-09 22:47:52', '2021-06-09 22:47:52', '2022-06-09 23:47:52'),
('77937aaaf72fd56e840d73480221ef0cfcefa6dcef800f4c19c9f3e74cb231a255a2f204f33924b7', 11, 1, 'AppName', '[]', 1, '2021-05-21 13:10:13', '2021-05-21 13:10:13', '2022-05-21 14:10:13'),
('78a86447f0d21f34c87269d0df09a4963ae2975cbc7e58358c3c9eea1e70f6c919443999dae30c95', 7, 1, 'AppName', '[]', 1, '2021-04-29 20:22:10', '2021-04-29 20:22:10', '2022-04-29 21:22:10'),
('78ee2620e243b3035e1a9e124c0419568edb3091f4750fbc90c829e8fa032cbee4931d9cff38eaf4', 7, 1, 'AppName', '[]', 1, '2021-04-30 18:21:45', '2021-04-30 18:21:45', '2022-04-30 19:21:45'),
('79687a57e467df3af7fb547161efbf603b1bd7630d8d11a3471ab601ca386c287ac97cfdf1038af5', 11, 1, 'AppName', '[]', 1, '2021-05-15 04:16:33', '2021-05-15 04:16:33', '2022-05-15 05:16:33'),
('7ac07e7c89e2aebf75a5e6e021724600678cd2b2054b0dcf6f9e8ae894e1ed670a714ed35c3f94c1', 7, 1, 'AppName', '[]', 1, '2021-05-07 23:32:30', '2021-05-07 23:32:30', '2022-05-08 00:32:30'),
('7aee9e079d7e0f52d737071878c4a3cc12b37c68f6394901657a719820f297c08f8e559ad106b767', 7, 1, 'AppName', '[]', 0, '2021-04-30 13:15:24', '2021-04-30 13:15:24', '2022-04-30 14:15:24'),
('7c118a52815710aff1325cf203cb3cdfea240c45f80dd37b00b195ccb903cbd3dc5801cf9ab149dc', 7, 1, 'AppName', '[]', 0, '2021-05-07 23:32:23', '2021-05-07 23:32:23', '2022-05-08 00:32:23'),
('7c4d48c68ea0e9d41af6450eee920204785df40575147c86726e7e821915a58861480b0b294b3777', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:09:54', '2021-04-30 16:09:54', '2022-04-30 17:09:54'),
('7c686c07aa93673fdbe286ab51070756fc427d4eb8ff6b24f5e3760628a4914c510f6c38ca9fd445', 5, 1, 'AppName', '[]', 1, '2021-04-28 00:20:06', '2021-04-28 00:20:06', '2022-04-28 01:20:06'),
('7d55d0f9f8f93d0c52841938a244be6bb4d5d2adae8a62e8f5c4c2c94e35f1d83662f1b492305941', 5, 1, 'AppName', '[]', 0, '2021-04-28 05:41:52', '2021-04-28 05:41:52', '2022-04-28 06:41:52'),
('7dcb003a05cadbeb186ab2becea016ad0d57710d810ca00c7d4199a0bcc651b5cf262f8146fc7bcd', 12, 1, 'AppName', '[]', 0, '2021-05-27 13:37:31', '2021-05-27 13:37:31', '2022-05-27 14:37:31'),
('7f38fb083bcc375a087b4c8a919df81bffb9e9984b38835d228811b6062e8383612abb1d0d4cd163', 7, 1, 'AppName', '[]', 1, '2021-05-01 22:01:06', '2021-05-01 22:01:06', '2022-05-01 23:01:06'),
('7ffc6d49503214bdac830e0a39b1cdde5c85c53733bcb7254b434698614f664bcb4ed6f777ab8658', 12, 1, 'AppName', '[]', 0, '2021-05-27 13:27:52', '2021-05-27 13:27:52', '2022-05-27 14:27:52'),
('800346aff0bd068dc77fff611555f1e86469c89748b9bb950ac35ab347cfbb37db2712f35c89da54', 5, 1, 'AppName', '[]', 1, '2021-04-28 00:59:20', '2021-04-28 00:59:20', '2022-04-28 01:59:20'),
('8016f676b73afbf0c1ed1e64b261e795b5d41ce1686ae605c419ee7a194872f66184738224ff1cf3', 5, 1, 'AppName', '[]', 1, '2021-04-28 01:19:22', '2021-04-28 01:19:22', '2022-04-28 02:19:22'),
('802083483dd8fdf0916cea4ea2551168cdc988374243988ade82711bad4c1b0362c54e4b3f2f1aee', 11, 1, 'AppName', '[]', 1, '2021-05-22 13:51:31', '2021-05-22 13:51:31', '2022-05-22 14:51:31'),
('802c6d7a7b5d4b02ba02dd717be3554b5d2c565c8fc58a2715b388816ee723b0e6180dd1dc45a0df', 7, 1, 'AppName', '[]', 1, '2021-05-01 22:51:59', '2021-05-01 22:51:59', '2022-05-01 23:51:59'),
('8037953fd661d4362895cc1f95bbaafa315d580c32ceb66a87b896cfdf28f144b3e28e653ccc035e', 7, 1, 'AppName', '[]', 0, '2021-04-30 15:37:22', '2021-04-30 15:37:22', '2022-04-30 16:37:22'),
('80c4016614c0eb1b306813637d366507545c7b83c9edf147a816b71354731648caf66cf7453cb6d2', 7, 1, 'AppName', '[]', 0, '2021-05-01 21:34:38', '2021-05-01 21:34:38', '2022-05-01 22:34:38'),
('81283acdd8d73709630f1631c1bc162ec70512a4790410a70844a36680adb6faa9afee9839d8c731', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:09:57', '2021-04-30 16:09:57', '2022-04-30 17:09:57'),
('81884e3a3a75c97e182a0bbf5350aaa638f4c6f62b1251fa4716f93a0de84d74388d705261b434ab', 7, 1, 'AppName', '[]', 0, '2021-04-28 05:51:57', '2021-04-28 05:51:57', '2022-04-28 06:51:57'),
('8231d9cd40439128cfcaad3732519e6c89b47011ab78152b637907a499aba127fea1c316b5452d5a', 7, 1, 'AppName', '[]', 1, '2021-05-02 16:44:55', '2021-05-02 16:44:55', '2022-05-02 17:44:55'),
('823e85f8b517a999930310a97f3e68b6e6dfbb7431d79c1761850c619c91af03ea4508ac25fbbedc', 7, 1, 'AppName', '[]', 1, '2021-05-02 22:25:33', '2021-05-02 22:25:33', '2022-05-02 23:25:33'),
('828975279f66211c8d70a9af22a732e531bd6ebd5a6f16a987095f6f7e6eed90a2b0603c4f54d26b', 5, 1, 'AppName', '[]', 0, '2021-04-28 01:52:40', '2021-04-28 01:52:40', '2022-04-28 02:52:40'),
('84515f1473b34ab65e0f1b1de8ead149a963cb48261d489e2d930c26a5e918986ad4ed41312fd1a8', 7, 1, 'AppName', '[]', 1, '2021-04-30 19:34:36', '2021-04-30 19:34:36', '2022-04-30 20:34:36'),
('846aec8360ffad2bb198b49c5d72f3b48dd41822f027fe78a585e3c39844ce317a77bc0edead1ca0', 7, 1, 'AppName', '[]', 1, '2021-04-30 23:59:02', '2021-04-30 23:59:02', '2022-05-01 00:59:02'),
('84af5fe36188dd9514afe2132a067a169fa459bb760e541e05f381553b722c0817ec184917759b45', 11, 1, 'AppName', '[]', 1, '2021-05-27 14:12:38', '2021-05-27 14:12:38', '2022-05-27 15:12:38'),
('84e0dbe94811233138a49c25cb17be0e11b35d0e33fcac6a14314b664260fcc4e69cb1bf43f1f5d3', 7, 1, 'AppName', '[]', 0, '2021-04-30 14:38:20', '2021-04-30 14:38:20', '2022-04-30 15:38:20'),
('85ea8544201eef63f869ccf171437f5f2719bb9c751289eb1107c80e4126d0dde29b2256e2fc5fc3', 7, 1, 'AppName', '[]', 0, '2021-04-30 21:27:49', '2021-04-30 21:27:49', '2022-04-30 22:27:49'),
('86d49175d0b72a0cdeb5fe2682bde8098e823e9cd5d39c3aeb2e07ee8132b43b8df8d4ef3f130f17', 7, 1, 'AppName', '[]', 1, '2021-05-01 23:19:22', '2021-05-01 23:19:22', '2022-05-02 00:19:22'),
('87353a7a3e91022230c646834127b66797a1a52d529f58b1c45a617ee1cff52477936b89dc5c2112', 7, 1, 'AppName', '[]', 0, '2021-05-02 22:24:35', '2021-05-02 22:24:35', '2022-05-02 23:24:35'),
('87521addfcd8d07ef403eb8ec07051b868123ae2a0e835fa4765f9343e689aac4a066f8d3337770b', 11, 1, 'AppName', '[]', 1, '2021-06-25 20:03:03', '2021-06-25 20:03:03', '2022-06-25 21:03:03'),
('883bfd17294ba42eb4069becb57eec8af06e0469a3be399b2716dfc152522069c13dcfeaeabd131d', 15, 1, 'AppName', '[]', 0, '2021-05-27 13:59:50', '2021-05-27 13:59:50', '2022-05-27 14:59:50'),
('888c82ef3e6586b072ccfe8dcb084f220a2f7cb68850baef589ab6cb375c72d8a93d63929fb50760', 7, 1, 'AppName', '[]', 1, '2021-04-29 17:54:21', '2021-04-29 17:54:21', '2022-04-29 18:54:21'),
('8951b6a66eab9db1c4864f5227e3adfd064a171c57bc21934354caa4ea71208dbc9a422490fe2434', 11, 1, 'AppName', '[]', 0, '2021-05-25 16:50:20', '2021-05-25 16:50:20', '2022-05-25 17:50:20'),
('89f6437c05181cfe26c4bc24dcd342645c4a1669c3141fc618bcb72688e0c5a89836d332cfef7008', 7, 1, 'AppName', '[]', 0, '2021-04-30 15:36:29', '2021-04-30 15:36:29', '2022-04-30 16:36:29'),
('89fa547e3e8901f29079eac2b94c15ab981f50a0174ea925bce720bcafe15377653fe1eff4c4ac0f', 11, 1, 'AppName', '[]', 0, '2021-05-18 16:11:12', '2021-05-18 16:11:12', '2022-05-18 17:11:12'),
('8a6f529bd3a2f3bc346a5f739d71741ea11269d35bf0221245321a7910a137e7265196368683d881', 7, 1, 'AppName', '[]', 0, '2021-04-28 06:05:06', '2021-04-28 06:05:06', '2022-04-28 07:05:06'),
('8a83e0a08edeae1c1b921e76479babfbd0fe179461d71a5fc877f2aebfa7998fd94c73b7ab1607ff', 4, 1, 'AppName', '[]', 0, '2021-04-27 04:22:01', '2021-04-27 04:22:01', '2022-04-27 05:22:01'),
('8ac8ad1a6ed3f6f30dc71f7a6da6ee261cf597da257d7653c43055babfb626a9780dbea9619d13ed', 7, 1, 'AppName', '[]', 0, '2021-04-30 13:47:22', '2021-04-30 13:47:22', '2022-04-30 14:47:22'),
('8b1b441c93a2e315545502df6dc2397d9cf997ad446cfda802c60cbe722d387c3701f8a5fa427535', 11, 1, 'AppName', '[]', 0, '2021-05-13 18:41:44', '2021-05-13 18:41:44', '2022-05-13 19:41:44'),
('8c4cdc6f1768bb078e5845cd4c5f6eb7c255d3b0d9352389945ac472c412896cc201ba8c36c7b806', 7, 1, 'AppName', '[]', 0, '2021-05-07 06:08:10', '2021-05-07 06:08:10', '2022-05-07 07:08:10'),
('8c893a523d73455ef4d76f7dd8b54cb5e270b43d59c11dbe1b9b6a79648574e1801e379416bf4a67', 11, 1, 'AppName', '[]', 0, '2021-06-04 18:42:57', '2021-06-04 18:42:57', '2022-06-04 19:42:57'),
('8d547b41ba06b32466133c3df1f94c2992f76fa5435764e37c3cb2576e14321f1d240c7a911b120a', 11, 1, 'AppName', '[]', 0, '2021-05-15 08:37:34', '2021-05-15 08:37:34', '2022-05-15 09:37:34'),
('8d7499b5c7915d1d83e0dc61540d05e472a36b254f811cc8c5ed748c8cf3adfe6440dbe72cd5419f', 14, 1, 'AppName', '[]', 1, '2021-06-29 20:35:05', '2021-06-29 20:35:05', '2022-06-29 21:35:05'),
('8dfafd2388adb658d96ce0fb1b26f99535dcd047bb13d0953defcf7151604d5d5cd82dcbcda34f4a', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:30:30', '2021-04-30 16:30:30', '2022-04-30 17:30:30'),
('8e070bdc93d7f674e0e67054771e410323c44e38967b3dcb3ca6737bc3feaead10fab20f640b90c5', 7, 1, 'AppName', '[]', 0, '2021-04-30 14:20:57', '2021-04-30 14:20:57', '2022-04-30 15:20:57'),
('8e4845db551068bde9b940c116931ecad2ccedd666fdb59877da356aeddf7bee6a67dbf0c14b8273', 11, 1, 'AppName', '[]', 1, '2021-06-02 00:34:48', '2021-06-02 00:34:48', '2022-06-02 01:34:48'),
('8f0f3e59774dca8028f0ba7e78606f2ac99b6e03a54736fcc915a80232e1415b5a098188e04df953', 7, 1, 'AppName', '[]', 0, '2021-05-05 13:59:17', '2021-05-05 13:59:17', '2022-05-05 14:59:17'),
('901edbd2cdbcaaff85a384031cb96e39ceb42f6e581255d38f6bda0982988b73b444a634d1bcba60', 7, 1, 'AppName', '[]', 0, '2021-05-02 20:08:22', '2021-05-02 20:08:22', '2022-05-02 21:08:22'),
('913d752bce55706856980df76c74e01f112aa75e05e302e3d880bd143df392e5f756a354bd185c06', 7, 1, 'AppName', '[]', 0, '2021-04-28 06:37:16', '2021-04-28 06:37:16', '2022-04-28 07:37:16'),
('91742c220a5096c1474810f8f44fa9130d7bbbe1a73f1cad231d0b361954b80014f2d13cf379b939', 7, 1, 'AppName', '[]', 0, '2021-05-01 22:20:48', '2021-05-01 22:20:48', '2022-05-01 23:20:48'),
('91b35300e4ab7a616b4a68811e4a74769a9ffb5c60e5384d0acfdaf947c88cfba8924480573a16a2', 7, 1, 'AppName', '[]', 0, '2021-05-01 00:01:57', '2021-05-01 00:01:57', '2022-05-01 01:01:57'),
('92796e259c4b8b9e54bb91a43c8ff4d4210c445323564fc89ca98a51e981debe9515fd9e6174cfcc', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:27:21', '2021-04-30 16:27:21', '2022-04-30 17:27:21'),
('9364d0a6618faf2b1da41d861e4b9b615e35779b74c15942ffb6d55e1639cd2c040c5ff683924b37', 7, 1, 'AppName', '[]', 1, '2021-05-02 01:30:05', '2021-05-02 01:30:05', '2022-05-02 02:30:05'),
('9376b899e4d63d05bc523b6f37e88a0accb0a9e603b8e2fb1546f927a1a750210cacfc6d28e105db', 7, 1, 'AppName', '[]', 1, '2021-05-02 01:29:41', '2021-05-02 01:29:41', '2022-05-02 02:29:41'),
('93db35bda8f9d6f300f2b439a5a15cb130aeb4d4d9294d5286174d3bc05303b7e5e179e81ba8e8cf', 5, 1, 'AppName', '[]', 0, '2021-04-27 19:03:01', '2021-04-27 19:03:01', '2022-04-27 20:03:01'),
('9411ac8a7411e695b464aa6a126f231b77891b7a1702d404f2d10f1447cf488905749855a1c17cea', 11, 1, 'AppName', '[]', 1, '2021-06-29 22:10:17', '2021-06-29 22:10:17', '2022-06-29 23:10:17'),
('94a8f1b1450fa236ec49c26e613ef7cbd9c7d59a8b2d2c7692180938bc334e460da933eddeaea8ac', 11, 1, 'AppName', '[]', 0, '2021-06-01 17:45:11', '2021-06-01 17:45:11', '2022-06-01 18:45:11'),
('94b7535c0cf0de4799d750d1d6185a104a41176f3cb0362c9d5a67760a7c6a4d44225a0329c6ac5b', 7, 1, 'AppName', '[]', 0, '2021-05-02 22:24:39', '2021-05-02 22:24:39', '2022-05-02 23:24:39'),
('956b3a24bb7d55ed0da022fb376aeb0702282451e9fccb4a77786e39fbfadde19caeb630e569692e', 3, 1, 'AppName', '[]', 0, '2021-04-27 04:20:24', '2021-04-27 04:20:24', '2022-04-27 05:20:24'),
('95d1033eb266af946d6fd9d808813c49f3708d3217ca7b12ebf47941427c8e0fe161b04ac7153eae', 10, 1, 'AppName', '[]', 0, '2021-05-12 09:06:28', '2021-05-12 09:06:28', '2022-05-12 10:06:28'),
('9661d536be765bb88480b8951b15cd1fd5edc1046af347a70ce8128814a2b520f647140d8fe21f34', 7, 1, 'AppName', '[]', 1, '2021-05-01 04:00:40', '2021-05-01 04:00:40', '2022-05-01 05:00:40'),
('96f9e12120704e0cab7688ea83ccac158942139485528511706aa32fd5db303433f8ed775936b2d2', 7, 1, 'AppName', '[]', 0, '2021-04-29 21:49:15', '2021-04-29 21:49:15', '2022-04-29 22:49:15'),
('974094758b939099922bbb78c108e37f4c010edacdea2527c158d36cf4e028ac669d070663e53d65', 7, 1, 'AppName', '[]', 1, '2021-05-01 03:56:34', '2021-05-01 03:56:34', '2022-05-01 04:56:34'),
('974998cd426cd8b8518eb9f17ca57b43ace217fc67301283a00ac163efa1da244b22f4e4d3ba48c5', 5, 1, 'AppName', '[]', 0, '2021-04-27 17:44:30', '2021-04-27 17:44:30', '2022-04-27 18:44:30'),
('974a6ba09acaca0ed51b2f387c809f79ecc6dc63bdd9154cf7c03ba983decaec5186f543074db9f6', 7, 1, 'AppName', '[]', 1, '2021-05-02 20:50:16', '2021-05-02 20:50:16', '2022-05-02 21:50:16'),
('97557c8e2d4743c8b34a0d00893684b520ff8e8a5ee95f5574556473020aa0209a4a73cf7106049b', 7, 1, 'AppName', '[]', 0, '2021-05-01 21:14:02', '2021-05-01 21:14:02', '2022-05-01 22:14:02'),
('978caa8e6338e9f65c23d626820deefe33f91522f4dc40a682635ca696e70b2152f70dd6c029727e', 7, 1, 'AppName', '[]', 1, '2021-05-02 23:42:47', '2021-05-02 23:42:47', '2022-05-03 00:42:47'),
('97aac45c6bb2f8fa64425af00c24bbb8a4f2caaa95560146dafb3cf2df3c7ccf2236aa9d94f31f45', 4, 1, 'AppName', '[]', 0, '2021-04-27 04:23:59', '2021-04-27 04:23:59', '2022-04-27 05:23:59'),
('97f238c153c132c71388ef9a22821343b52e05f63917d92549598b2ae1eeb6eb07f8137e6ade40eb', 7, 1, 'AppName', '[]', 0, '2021-05-01 00:19:06', '2021-05-01 00:19:06', '2022-05-01 01:19:06'),
('982b96aba462b6c698a840a7a1622f360b87bb2143fa15169809224782e061a24f1999bd118963c6', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:25:42', '2021-04-30 16:25:42', '2022-04-30 17:25:42'),
('9882a3e47cd59f4533737e6d2ca5831ebe0f06640685f8df41ef9b235f70916389f2c221ca9bea8d', 11, 1, 'AppName', '[]', 0, '2021-05-22 19:41:04', '2021-05-22 19:41:04', '2022-05-22 20:41:04'),
('9a3a387879b9de1cb48e897aa659dcfe665ec2c51e1c8ccad22e5ba2007d1fbb085423bd51b7ef4c', 11, 1, 'AppName', '[]', 0, '2021-06-23 21:10:17', '2021-06-23 21:10:17', '2022-06-23 22:10:17'),
('9a8f813448e5f14142cd408d0f6e2b8a87dba2904cdcf2e4e42dbe9ed43065b3dea8d568408fb127', 5, 1, 'AppName', '[]', 0, '2021-04-27 07:43:30', '2021-04-27 07:43:30', '2022-04-27 08:43:30'),
('9a96876177f90369474b3aeae3c70deb77aa1b9144720921a6befe104da9fe70bcc43379a0a23373', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:09:59', '2021-04-30 16:09:59', '2022-04-30 17:09:59'),
('9b54653179a5c7ea8aa89a9a0bd52375cf673597120aa38c79886a4ba9a8c4d1b40dd9a728f3f5fb', 11, 1, 'AppName', '[]', 0, '2021-05-16 09:45:31', '2021-05-16 09:45:31', '2022-05-16 10:45:31'),
('9bfe81f50cfbe7f8e7bd0267432822d8545479a07d4655d930b8dcecdef4914b00c79a8147ce13e6', 7, 1, 'AppName', '[]', 1, '2021-04-29 18:01:05', '2021-04-29 18:01:05', '2022-04-29 19:01:05'),
('9c26af3156de106f39fd94295293b0bb3ae305805f6c234985ede2497eccaecbf95bbface0d1d6e7', 7, 1, 'AppName', '[]', 0, '2021-04-29 19:31:49', '2021-04-29 19:31:49', '2022-04-29 20:31:49'),
('9c860e25fea1603b01bd45850b626f9cf1e4846d1672251c05775c37659d9d753f887ed155e989b3', 7, 1, 'AppName', '[]', 0, '2021-04-30 10:43:07', '2021-04-30 10:43:07', '2022-04-30 11:43:07'),
('9e69792aa9fa2d916bd53f5db0008a03d520ce56cd44fae9c7ea5ea90c879cc912645f4031098213', 7, 1, 'AppName', '[]', 0, '2021-04-29 18:47:39', '2021-04-29 18:47:39', '2022-04-29 19:47:39'),
('9f53a5174f08de2e40d41b98d4b47281161f7c0089a8773ab596f0aac99214c2c74ad4b80de4ced2', 5, 1, 'AppName', '[]', 0, '2021-04-27 07:29:09', '2021-04-27 07:29:09', '2022-04-27 08:29:09'),
('9f722bb70734d5728f914e560c6cab868629d8c39e96dff456a7cf6551a228bd3bc9d969e51f920c', 12, 1, 'AppName', '[]', 0, '2021-05-27 13:27:51', '2021-05-27 13:27:51', '2022-05-27 14:27:51'),
('9f9426b8da68b3ce5f855254fccd4c10431dbc793251dfa6e8bb854dab3f8288cd3172e6274cb848', 12, 1, 'AppName', '[]', 0, '2021-05-27 12:59:36', '2021-05-27 12:59:36', '2022-05-27 13:59:36'),
('9fce9c2239cd63ba944f09bfdaf65a9ec4e71af54f9d31483eb6e03c37b702e4207db9d0486002ec', 11, 1, 'AppName', '[]', 0, '2021-05-25 16:50:21', '2021-05-25 16:50:21', '2022-05-25 17:50:21'),
('a00030b1ff0b643b57f04f428d909f153fa14468119b7ebc15404500f96b6182fd31ce4d9c607b27', 7, 1, 'AppName', '[]', 0, '2021-05-02 01:26:16', '2021-05-02 01:26:16', '2022-05-02 02:26:16'),
('a10a87362f88772570688b414d0aa8ee2e37c370f2e6c1e595b4d6e00bca3dee5d596dba6aee3bf9', 7, 1, 'AppName', '[]', 1, '2021-04-30 19:01:01', '2021-04-30 19:01:01', '2022-04-30 20:01:01'),
('a124b54118b4683771b92a10f2ac9e8c0525042ab1966f8533d5e478226b9514fedc9b8fe8801e97', 11, 1, 'AppName', '[]', 0, '2021-05-18 16:11:09', '2021-05-18 16:11:09', '2022-05-18 17:11:09'),
('a1d996b6655f0792d5b742309a8a433ad40f09fd118ec52dabdd53fb54af22ae052991a16a68bfed', 11, 1, 'AppName', '[]', 0, '2021-06-23 20:29:11', '2021-06-23 20:29:11', '2022-06-23 21:29:11'),
('a23924d31b654667227b84eda2776241910385e18099742eb5816de53b095ba1975095680a96a2e1', 11, 1, 'AppName', '[]', 0, '2021-05-16 09:45:24', '2021-05-16 09:45:24', '2022-05-16 10:45:24'),
('a32aa97d4b68bad4f9085210d480bd1c32ad132b532b4c9f2c1b2833aefd7fdaf4567abbc79e64ea', 7, 1, 'AppName', '[]', 0, '2021-04-30 13:48:01', '2021-04-30 13:48:01', '2022-04-30 14:48:01'),
('a378a91f431c2627017dcbf65a5c1e22fb86215a883e97d1bdffcca2d4f7011eda0834d18382e779', 7, 1, 'AppName', '[]', 0, '2021-04-30 23:33:28', '2021-04-30 23:33:28', '2022-05-01 00:33:28'),
('a39e99a97e614d32ae7a8aeea2390192aed0ed66c579b208530d427f8a8ca6a252aa62af952bbd2e', 5, 1, 'AppName', '[]', 0, '2021-04-28 01:36:45', '2021-04-28 01:36:45', '2022-04-28 02:36:45'),
('a3e11eb8e1cde87c4402f41d741816d8b61ab02006ac5e6dd3b5e1351c74c1464014e4ea361782c3', 11, 1, 'AppName', '[]', 0, '2021-05-31 18:36:05', '2021-05-31 18:36:05', '2022-05-31 19:36:05'),
('a44c7c0b58affc78f547d2e2fbb09e9f98642331fbca067153e7788303ddcf29e0cadbec9e04ec27', 11, 1, 'AppName', '[]', 0, '2021-05-18 13:17:56', '2021-05-18 13:17:56', '2022-05-18 14:17:56'),
('a4f3efb9f99a4d9241334ef972c91afa4c41e45a603f224098235255f827eaaa63447a7f3ddcd313', 11, 1, 'AppName', '[]', 0, '2021-06-09 19:02:05', '2021-06-09 19:02:05', '2022-06-09 20:02:05'),
('a50f24549d869ca01b288b4166418a0e1c07c2a4ff2f26ff740fab762500356b6d1c7077b3bbbe3e', 7, 1, 'AppName', '[]', 0, '2021-05-02 23:34:54', '2021-05-02 23:34:54', '2022-05-03 00:34:54'),
('a640a5a1f2abb7f25ee3fce402dfd683cdb30f28a484af14e5380c757bf316bcf2f5bc5b2d8cbe74', 12, 1, 'AppName', '[]', 1, '2021-05-27 13:36:34', '2021-05-27 13:36:34', '2022-05-27 14:36:34'),
('a6910091c17364db78a6cccb20a7956c823011206c90930743c6600fca2d367f0eab6d04f27659e2', 7, 1, 'AppName', '[]', 1, '2021-04-29 20:20:04', '2021-04-29 20:20:04', '2022-04-29 21:20:04'),
('a69721f39fc2f4ea76e5c63ba06302a158efd9b1d5c412daba4180a3e30020bc51a5038b2f8eaa33', 11, 1, 'AppName', '[]', 0, '2021-05-18 13:17:52', '2021-05-18 13:17:52', '2022-05-18 14:17:52'),
('a79cf359260587c43b1b9d8da66d533bc6520616308d29a0ddb8e2620f8a0852842101bdc428e474', 11, 1, 'AppName', '[]', 0, '2021-06-29 22:02:48', '2021-06-29 22:02:48', '2022-06-29 23:02:48'),
('a7aed6bf120972577cf659b75e435830e57f96999d494c18265b3ee700a542bc0e75e2444441975f', 5, 1, 'AppName', '[]', 0, '2021-04-28 01:41:58', '2021-04-28 01:41:58', '2022-04-28 02:41:58'),
('a90c1a168e282ef73f154be4d6156347761102bb42169478ad7b926cf6a4b27da3cc6478a0963b2a', 7, 1, 'AppName', '[]', 1, '2021-05-01 22:10:14', '2021-05-01 22:10:14', '2022-05-01 23:10:14'),
('a97eef6d1901fbdce47a309a7da4fc1db6b71dbcc0d899bc904d124206e430bcebf47368b2eefe96', 5, 1, 'AppName', '[]', 0, '2021-04-28 03:09:58', '2021-04-28 03:09:58', '2022-04-28 04:09:58'),
('a98dd6b18148734d512e96861608e669baabbeed1745c94a61b8d8e971c6d3e8252e3b34992055ca', 7, 1, 'AppName', '[]', 0, '2021-04-28 06:19:17', '2021-04-28 06:19:17', '2022-04-28 07:19:17'),
('a9be2d0517afeea3a22bf73c584b573485e57cba84cfe45bbc85bbe5f2d5cb2cd7dc360607f987c6', 11, 1, 'AppName', '[]', 1, '2021-06-09 22:57:31', '2021-06-09 22:57:31', '2022-06-09 23:57:31'),
('aa01c1e389f557d5ed4e0627db304b4229923c195adba8836250599b0d9e7a85c7a7899815eb4ad9', 7, 1, 'AppName', '[]', 1, '2021-04-29 19:33:39', '2021-04-29 19:33:39', '2022-04-29 20:33:39'),
('ab4eb35386bf218c4a18e134cf63e9130dc7a1a165de60e5c28fb904ba9ab5d70d8fe8c8f592ea89', 7, 1, 'AppName', '[]', 0, '2021-05-01 00:52:44', '2021-05-01 00:52:44', '2022-05-01 01:52:44'),
('ab88835d6153c4551dc086475e7652fa821f9a7a7f98c439bc09cef11d9792b70b5248ce6a0e8b54', 11, 1, 'AppName', '[]', 0, '2021-05-31 12:56:05', '2021-05-31 12:56:05', '2022-05-31 13:56:05'),
('abffdd05f99745ad672800cd9ecaa8c34cad3ef0ffafbfc027c11ecdfb364c6e1ecaf86e79c8fb2d', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:13:57', '2021-04-30 16:13:57', '2022-04-30 17:13:57'),
('ac049ed74e7599f71bce419987e6e0a17144f5c9981db3ed8cf02012d8a2df6a5cb71437ee4b5ce8', 11, 1, 'AppName', '[]', 0, '2021-06-09 14:32:28', '2021-06-09 14:32:28', '2022-06-09 15:32:27'),
('ac091c05ca01883adacc0e33e3e65331f1a66b566ba0d5f3043830bd2a5c65dc8977b4f82dee07e6', 7, 1, 'AppName', '[]', 1, '2021-05-01 23:00:54', '2021-05-01 23:00:54', '2022-05-02 00:00:54'),
('ac2c5f7d648ea9bdda78a6203833eb9adb755f539760b0a4879ccebfda40ee7187250d6a0f72659e', 12, 1, 'AppName', '[]', 0, '2021-05-27 13:34:12', '2021-05-27 13:34:12', '2022-05-27 14:34:12'),
('ac932596fb816bc148233e7b43591e4c48616f7157a04364306e3805bc8335e75f4d34044e1d7d57', 7, 1, 'AppName', '[]', 1, '2021-05-01 23:49:04', '2021-05-01 23:49:04', '2022-05-02 00:49:04'),
('ad733292b44791b6233b0a56be826df9d262dacf019394a5a52d6e802afea88b98fb30f4bda37326', 11, 1, 'AppName', '[]', 1, '2021-06-09 22:44:55', '2021-06-09 22:44:55', '2022-06-09 23:44:55'),
('ad940fa9654ef45203734784af14ba0411a85e2a390370b8a0c4d7e2bf8b9e7023bce77623194484', 2, 1, 'AppName', '[]', 0, '2021-04-27 04:12:56', '2021-04-27 04:12:56', '2022-04-27 05:12:56'),
('ade4ca84c84daf31be43ca779a8b8fda7914568de56428cabd25e296e1d37b3001bde071bd0f48ac', 7, 1, 'AppName', '[]', 0, '2021-04-30 23:28:34', '2021-04-30 23:28:34', '2022-05-01 00:28:34'),
('ae0786e2b1a4f15e5ebb76d17e607ca5476ff7b6f3c7459035b71c9c4f2ed4011516af206aff57d2', 7, 1, 'AppName', '[]', 0, '2021-04-30 17:08:47', '2021-04-30 17:08:47', '2022-04-30 18:08:47'),
('ae9e17faa2a8ce8a48a558df81a41a3d02562fe98e30bd9b273316b6efbb9d63c677cd01e6dc6e6f', 7, 1, 'AppName', '[]', 0, '2021-05-01 22:49:55', '2021-05-01 22:49:55', '2022-05-01 23:49:55'),
('af11f63b191d27d6cfba6bed521cfb268ac619892a5d04a1c58d28abaa11a93596e0ff839f0d8fef', 7, 1, 'AppName', '[]', 1, '2021-05-04 01:46:27', '2021-05-04 01:46:27', '2022-05-04 02:46:27'),
('af4046ceaf9f70d5a34e2bfc9eca38dc75196ca4ca821b4be5935788b7125deb4ec91f84efe2f238', 7, 1, 'AppName', '[]', 1, '2021-04-30 10:45:42', '2021-04-30 10:45:42', '2022-04-30 11:45:42'),
('afb7077bb092e671cfd3fe6086af714710d04df42e377549e41dc5cff3ed76f9cb1e0c25e2c94452', 7, 1, 'AppName', '[]', 0, '2021-04-30 14:05:29', '2021-04-30 14:05:29', '2022-04-30 15:05:29'),
('b00ce100a05d39465900ece3ec2ee06a563e3a10e76ee1d72055faa25c241ca2d5f05a60e5c1e82d', 7, 1, 'AppName', '[]', 0, '2021-04-30 13:01:32', '2021-04-30 13:01:32', '2022-04-30 14:01:32'),
('b01d3a2f03a7f9f9a97cd09413dd24b579a77329d9df9e67f9364aadd3dac46634d48bf6e010bd9e', 7, 1, 'AppName', '[]', 0, '2021-04-30 14:34:41', '2021-04-30 14:34:41', '2022-04-30 15:34:41'),
('b0292faba44bdcf50a9e419286b078a21210c407170742083e247a80bfafb9934c7c3515a0540e46', 5, 1, 'AppName', '[]', 0, '2021-04-28 00:37:48', '2021-04-28 00:37:48', '2022-04-28 01:37:48'),
('b11ef9f8d9c1156d2b44e2594c3034930b71e7435d6706268863afd7d1a480c41506ad935f445812', 7, 1, 'AppName', '[]', 0, '2021-04-29 19:31:46', '2021-04-29 19:31:46', '2022-04-29 20:31:46'),
('b16f9c1288b93f072ecd4007de3b7d1e5801269c6d0a77c44f4fcc0b07a62da435574a3f2d7e71d0', 7, 1, 'AppName', '[]', 0, '2021-04-30 13:23:23', '2021-04-30 13:23:23', '2022-04-30 14:23:23'),
('b20ac65327dd88784b2e45236ec7dfcd834e2a682a140ba1ad9095467b78716057f054e85469707b', 7, 1, 'AppName', '[]', 0, '2021-04-30 18:13:05', '2021-04-30 18:13:05', '2022-04-30 19:13:05'),
('b22407eb40068e7986faaaac6edc366ba71f688e7c4edd54f4a607ed28750396f7475797f15536b1', 7, 1, 'AppName', '[]', 0, '2021-04-29 21:28:45', '2021-04-29 21:28:45', '2022-04-29 22:28:45'),
('b281cf549f96ccb240faca4b6fde3b03c64e2d2d8833e1368267a9622c44cd6fe2d6420e00b0c447', 7, 1, 'AppName', '[]', 0, '2021-04-30 15:52:12', '2021-04-30 15:52:12', '2022-04-30 16:52:12'),
('b29acf1b7c6192447b33604df7a8da98008db8cf4f6cfe586f91657176fd0ae1ed0294e49312c865', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:22:54', '2021-04-30 16:22:54', '2022-04-30 17:22:54'),
('b2a6ecd1389ac4cb7d9d6a4423777950c6741d2ff0892a92d999b7753eb64a13d2257ff4bc5b1137', 11, 1, 'AppName', '[]', 1, '2021-05-27 13:03:40', '2021-05-27 13:03:40', '2022-05-27 14:03:40'),
('b2a98527156605f725f87d77cdb720abdb009dd029efcf4bb3d247a29d86a7349de916d8bfd750ec', 11, 1, 'AppName', '[]', 0, '2021-06-03 15:54:20', '2021-06-03 15:54:20', '2022-06-03 16:54:20'),
('b2ab25cbd7744bb357cb22402102154a86703a7b07a1f7a7156fdf1b6ba8a44229f33d0e7569362e', 7, 1, 'AppName', '[]', 0, '2021-04-30 21:27:53', '2021-04-30 21:27:53', '2022-04-30 22:27:53'),
('b4eaef16a1914e152d95e8c3989571e4577971bd7ebfad3481ac931350ca8c8ebbe2aab1ade97218', 12, 1, 'AppName', '[]', 0, '2021-05-27 12:56:34', '2021-05-27 12:56:34', '2022-05-27 13:56:34'),
('b5956a8edaa80fdbc295cf66ea1b3483ab446b5a7e713fd379db7932ba344f5832e3191433a0e05a', 7, 1, 'AppName', '[]', 0, '2021-05-01 00:01:29', '2021-05-01 00:01:29', '2022-05-01 01:01:29'),
('b595d63ebe2f27fa886a95ed23c49ae7145e2e56fda25136d297ba53e0ae83799a2e3bad0d6d153e', 7, 1, 'AppName', '[]', 0, '2021-04-29 19:32:47', '2021-04-29 19:32:47', '2022-04-29 20:32:47'),
('b5bd41f056121e05d7a5136d8c96b3dec42ca453eb3a31480655cc582f982b9aac3f63794e826c21', 7, 1, 'AppName', '[]', 0, '2021-05-04 02:37:59', '2021-05-04 02:37:59', '2022-05-04 03:37:59'),
('b60fccfd7c4b954d4f578f2e6d8b007f95f2e063a6731cda56764576f2e2ae967106533b2d6392fe', 7, 1, 'AppName', '[]', 1, '2021-05-02 18:33:02', '2021-05-02 18:33:02', '2022-05-02 19:33:02'),
('b6a3521d595abbe670b1609c42cb1ad3221fe305952dbf3e9414ee1a6b90451aadd5d186e40497cd', 5, 1, 'AppName', '[]', 0, '2021-04-27 23:54:50', '2021-04-27 23:54:50', '2022-04-28 00:54:50'),
('b6ff0b7cb4b17edf5e3096fdc87583335adac7399d33253199c268c6fd44073d023cf18af321b47f', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:27:35', '2021-04-30 16:27:35', '2022-04-30 17:27:35'),
('b7e6d0628cef3da674dac76399d924d4c5f186aeedf04625bb50f8a40cbf5c9465d00c4bc07208ad', 5, 1, 'AppName', '[]', 0, '2021-04-28 03:09:27', '2021-04-28 03:09:27', '2022-04-28 04:09:27'),
('b8b85e08f75b3a8d06030d13b59eb68fc84a52f2ddb328e2fd30ee932b15979463427b53caac1e00', 11, 1, 'AppName', '[]', 1, '2021-06-29 22:12:41', '2021-06-29 22:12:41', '2022-06-29 23:12:41'),
('b95e42de6468565b86d0190786f0fc61fcb6c93a1058c2ec708a52f5afe07587fdc574e8bf887f5e', 7, 1, 'AppName', '[]', 0, '2021-05-01 22:05:01', '2021-05-01 22:05:01', '2022-05-01 23:05:01'),
('b96ae6d945a517c80d929b8bde3b4fe192dacaa0ae7d15835495f59517274378886ce950c2bdbf55', 11, 1, 'AppName', '[]', 0, '2021-06-29 20:36:10', '2021-06-29 20:36:10', '2022-06-29 21:36:10'),
('b99686a6aea28ed78c4c81854984a95384ef9699fe81408a90a4f3f93c850a4af17b03a226e4e1f6', 14, 1, 'AppName', '[]', 0, '2021-06-29 20:48:58', '2021-06-29 20:48:58', '2022-06-29 21:48:58'),
('b9dbc1a854de569205cb76d230e1d26c92bd5ffd18fba737ad7e5448d6ad28b8490dbd9fec2c143e', 7, 1, 'AppName', '[]', 0, '2021-04-30 14:26:40', '2021-04-30 14:26:40', '2022-04-30 15:26:40'),
('bb4085823644daa2a6f64d1fcb844803d7cc05e115a7a28b7c3d886fa1230eada2ae663b3c0cb3dd', 7, 1, 'AppName', '[]', 1, '2021-05-02 23:35:46', '2021-05-02 23:35:46', '2022-05-03 00:35:46'),
('bbf7f7dd010f0a27cc888789ddfb0583d0659c25ce037a0f6a5f31e48b9f361fb05a2fe5e5221536', 7, 1, 'AppName', '[]', 1, '2021-05-01 23:54:39', '2021-05-01 23:54:39', '2022-05-02 00:54:39'),
('bc03b29ee1d74b0e38a978afbaf7fa8128b39fba6bdb6e803219b7328e5d37feb2ef372aaeed3a29', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:09:55', '2021-04-30 16:09:55', '2022-04-30 17:09:55'),
('bc19a15b864111db9ea58579d1282bb1416441d9eb31d5ace6907bb1946b69f75560789aadbc0b23', 7, 1, 'AppName', '[]', 0, '2021-04-29 18:17:45', '2021-04-29 18:17:45', '2022-04-29 19:17:45'),
('bcda63a6b2f96e59f602efb9bd4deb2c389144854d8bf814fc52613cf0ca4b2c91ff67dbda5b457c', 7, 1, 'AppName', '[]', 1, '2021-05-04 02:36:35', '2021-05-04 02:36:35', '2022-05-04 03:36:35'),
('bd397b2af9b752e6e11bdf0bbc479493e3ae8119c18e657e3fff1463aae5d0f3733c68567b37b021', 11, 1, 'AppName', '[]', 0, '2021-05-16 13:34:18', '2021-05-16 13:34:18', '2022-05-16 14:34:18'),
('bd424b4024b2a0a37f4874ddff995718ae478915ddcad718eb684cbad05d361c569ad99f941e599b', 3, 1, 'AppName', '[]', 0, '2021-04-27 04:19:49', '2021-04-27 04:19:49', '2022-04-27 05:19:49'),
('bd912acfc8a2d65564ed1f813dc550c1dcc890e4905cee191ebae98d077fd445dd5bd3a95f87246c', 7, 1, 'AppName', '[]', 1, '2021-04-29 17:58:53', '2021-04-29 17:58:53', '2022-04-29 18:58:53'),
('bdaf8c0a73ea916f8aa24853a75c1dc55b0e72f90aed39ebb40ec37f88d74434ae19a3244914b629', 11, 1, 'AppName', '[]', 1, '2021-06-04 14:58:06', '2021-06-04 14:58:06', '2022-06-04 15:58:06'),
('bde22b0eafab3bc4298152e0f6b49ba9f164da71b88a9141844189c535509e4a9dd9d20ebf21b8ed', 7, 1, 'AppName', '[]', 0, '2021-04-30 15:48:28', '2021-04-30 15:48:28', '2022-04-30 16:48:28'),
('be7749ab45a01b81398421ae4fd9d7f177666581d13952c539edb60dc67c78b8ddf1d33e6820fb07', 7, 1, 'AppName', '[]', 0, '2021-05-03 19:15:11', '2021-05-03 19:15:11', '2022-05-03 20:15:11'),
('becb2e43dee03cfea6b3086603a43a1297cc2e1af7591901560494b59163ca7b54f5057b6195e19a', 7, 1, 'AppName', '[]', 1, '2021-05-05 15:20:30', '2021-05-05 15:20:30', '2022-05-05 16:20:30'),
('bfe56743c09a06624b4bdb35395aa4c678e553186b8677983c53753124cbccc45b5f8cb06bb1ecdc', 5, 1, 'AppName', '[]', 0, '2021-04-27 17:44:28', '2021-04-27 17:44:28', '2022-04-27 18:44:28'),
('c0df52f86286474ec24eaaf50b2afe08ef62ec58eca3b2b4a92a5230a8193735f8a9d26d616d616c', 7, 1, 'AppName', '[]', 1, '2021-05-02 16:50:59', '2021-05-02 16:50:59', '2022-05-02 17:50:59'),
('c236e119ba6cd354d49193d34d73b101b1d3cd122372c432df5a4b6bed9a3591c7337a76e718b027', 11, 1, 'AppName', '[]', 1, '2021-05-23 12:08:10', '2021-05-23 12:08:10', '2022-05-23 13:08:10'),
('c279e7c0a9b1de982fd71004c84c327031d54e69c4744ddbdae5a353b6047267dfe4b9616e3fbea1', 7, 1, 'AppName', '[]', 0, '2021-04-29 19:41:30', '2021-04-29 19:41:30', '2022-04-29 20:41:30'),
('c2a2406ce16f660bddb20d1c9f84b90337f499a15431d9bb75aab6563b0045d288e3ad00795f79a4', 7, 1, 'AppName', '[]', 0, '2021-05-01 22:17:39', '2021-05-01 22:17:39', '2022-05-01 23:17:39'),
('c2d7e9caa8c6be992093da8d773c4cc4da0cadb5c27efc953592df66b85b92d4b1ab359e07e89526', 7, 1, 'AppName', '[]', 0, '2021-04-30 15:36:27', '2021-04-30 15:36:27', '2022-04-30 16:36:27'),
('c3150c48a751eb102b3bfaf30ffffb7b3c3189ca8ab5a04c2219ce35a45fa92f70fec997bae45b53', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:31:19', '2021-04-30 16:31:19', '2022-04-30 17:31:19'),
('c3e3ca27ae3a33117111eacc111cf70c2063145ca76eb45bcd4b19d43eb68184ed4bed229eac35da', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:22:07', '2021-04-30 16:22:07', '2022-04-30 17:22:07'),
('c4ab99b7d58974c374603d8821b8dfddedd898121cb3827281be0721e1cde2e6315c7f727e2dfe3f', 7, 1, 'AppName', '[]', 0, '2021-04-29 18:06:11', '2021-04-29 18:06:11', '2022-04-29 19:06:11'),
('c4b834e35211a52701741394734bd815230d1695ae39e06f1ef9320c53b0d9c5ebaf36f44c1823c9', 11, 1, 'AppName', '[]', 1, '2021-06-04 15:35:46', '2021-06-04 15:35:46', '2022-06-04 16:35:46'),
('c4bb03649b467623b32ba47b55b2edac1bf9a8e2ebbce3a93f1344fb04703e6902a49c21e2271731', 7, 1, 'AppName', '[]', 0, '2021-04-30 13:25:36', '2021-04-30 13:25:36', '2022-04-30 14:25:36'),
('c54b9cd84e033b48cad3ef0a04476e7905ccc7b52caf056ea86132d47851ea2d6f7b01d50c9d032e', 8, 1, 'AppName', '[]', 0, '2021-05-04 01:52:39', '2021-05-04 01:52:39', '2022-05-04 02:52:39'),
('c63c7cdb7b4ecdba12e7a735d841e44d8636ea5586336c5291229d5dc8525df0043e4a0d6cd8bd0a', 11, 1, 'AppName', '[]', 0, '2021-05-18 13:35:18', '2021-05-18 13:35:18', '2022-05-18 14:35:18'),
('c651be1c70a635fd622232fdb80045c5ab5c89f4ab38f1569909ba30b414630945dbfbf4ef4d0074', 7, 1, 'AppName', '[]', 1, '2021-04-30 21:27:54', '2021-04-30 21:27:54', '2022-04-30 22:27:54'),
('c6e4fee95e854b924fd34ccce6c949a67ac648977d0cefecc83ff68e8b382e8757402806b6c88458', 7, 1, 'AppName', '[]', 0, '2021-04-28 05:56:21', '2021-04-28 05:56:21', '2022-04-28 06:56:21'),
('c6ea77e22976385094d32ed88006030c4f2986fba7c7905be65b3bba1719a7d5dd6340643a42688d', 15, 1, 'AppName', '[]', 1, '2021-05-27 14:02:36', '2021-05-27 14:02:36', '2022-05-27 15:02:36'),
('c7a6630c850db2edc08c38ea69251ba45ea4180f4145102408897411f0333807620f78097d45b052', 11, 1, 'AppName', '[]', 1, '2021-06-09 22:54:06', '2021-06-09 22:54:06', '2022-06-09 23:54:06'),
('c7d473ac42688dcf8ca99e599f05183592abde204b1a2e12733093902ebe364a11cb1032ca72f986', 7, 1, 'AppName', '[]', 0, '2021-04-30 14:02:28', '2021-04-30 14:02:28', '2022-04-30 15:02:28'),
('c86c360b1f674a02d213fd7c78eb3fbe9db3b5d934bbeb26a23cf69472123ea54c21cba4adb33708', 7, 1, 'AppName', '[]', 0, '2021-04-30 13:28:53', '2021-04-30 13:28:53', '2022-04-30 14:28:53'),
('c8818dddbd1398c55711882eafe5618564e789e4ff6709410a864282f59fa8c57bff49dc7350a8f7', 7, 1, 'AppName', '[]', 1, '2021-05-05 12:36:44', '2021-05-05 12:36:44', '2022-05-05 13:36:44'),
('c8d575f21aab6a2b99fef6275424df08b5f88f241c5fdcb1505e593f2891b98072bf473ea61b55d7', 7, 1, 'AppName', '[]', 0, '2021-04-30 11:31:16', '2021-04-30 11:31:16', '2022-04-30 12:31:16'),
('c93ef3b2b352f4fe6b3eb89a43086f8aa86c23ada51d151a69eff65d4dec71059b89874f5b8f85bf', 7, 1, 'AppName', '[]', 0, '2021-04-30 13:03:13', '2021-04-30 13:03:13', '2022-04-30 14:03:13'),
('c9d6b4c65760456c5833b94ef37d0250f7e65d99a2c58ca23fa7527dcdba8cbbdc34962f5944cbe1', 11, 1, 'AppName', '[]', 1, '2021-06-23 21:50:20', '2021-06-23 21:50:20', '2022-06-23 22:50:20'),
('caa0317872a9a5e6d000fa7c702fb0274d01932c7dfd65f42663115e4b33c5f08263651765d164ad', 7, 1, 'AppName', '[]', 0, '2021-05-01 23:20:31', '2021-05-01 23:20:31', '2022-05-02 00:20:31'),
('cae0040d6a5a5dd51f5826666b7f9302ab96f55b5be8c24a254187b02b235fdfd4c744114e950fab', 7, 1, 'AppName', '[]', 0, '2021-04-28 06:41:04', '2021-04-28 06:41:04', '2022-04-28 07:41:04'),
('cb52302ab6b74e5b78ade1b4a1376fb0f3af6cca5a77f899a84621e7faeeb29daaba6907af6cc96d', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:10:03', '2021-04-30 16:10:03', '2022-04-30 17:10:03'),
('cb532ebd8c98c7da0583b06fa7ba258f6656e0ce8c673a63de97a6ec012c38b06ddbf66e826c5c19', 7, 1, 'AppName', '[]', 0, '2021-04-29 21:51:06', '2021-04-29 21:51:06', '2022-04-29 22:51:06'),
('ccbea472112298f1cdc2705b2c299534116217a5a82884cb88620fec6c8fbec3c51336a9b3e4183a', 11, 1, 'AppName', '[]', 0, '2021-06-05 01:32:40', '2021-06-05 01:32:40', '2022-06-05 02:32:40'),
('cd0314d61698b01aa21318004e88bbbf1e7e5d950b060f41ff5d67c136e8b80517e0b939877cd8bf', 11, 1, 'AppName', '[]', 0, '2021-05-13 23:29:22', '2021-05-13 23:29:22', '2022-05-14 00:29:22'),
('cd05501120cb54f0fa9548a470235d53b2cd8b3fbf696fd4be1ed0f116ce8d42320d283c0e32a8e1', 7, 1, 'AppName', '[]', 0, '2021-04-30 13:13:37', '2021-04-30 13:13:37', '2022-04-30 14:13:37'),
('cd39e32f3924b34bfcb3119cb0157c9516c63a5ca86e81b739222111cd9d94c4b61b0dd00e66099d', 7, 1, 'AppName', '[]', 0, '2021-04-30 23:28:33', '2021-04-30 23:28:33', '2022-05-01 00:28:33'),
('cd464dfb3b72254a78cfad2a6785fac40ba62542da54b64e3dd758c76d5c4241ecc85c6f68f72103', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:09:41', '2021-04-30 16:09:41', '2022-04-30 17:09:41'),
('cd6d681526873153028732132ffae0b8adb16da00f964005b7f653d8c00a0f08014e8ee3de860aaa', 7, 1, 'AppName', '[]', 1, '2021-04-30 19:21:30', '2021-04-30 19:21:30', '2022-04-30 20:21:30'),
('cdb7323b0c3f47bdba3ccc749017d2ab3c5b20bdaba7ad5c9cbb0f2348b36ec1a3fce13e5ac936a2', 7, 1, 'AppName', '[]', 1, '2021-05-01 03:43:50', '2021-05-01 03:43:50', '2022-05-01 04:43:50'),
('ce838e263bd2d9d65f86405b23c7c38658c4b0041223ae722dba98c59848c0a8b77882e9e79380a8', 7, 1, 'AppName', '[]', 1, '2021-05-02 23:43:33', '2021-05-02 23:43:33', '2022-05-03 00:43:33'),
('cfb923e9c172e862d0e76edadc5db604e25fabbdb52b1781d7b8af1c8e19fd495c5adbfcc6f79fc4', 7, 1, 'AppName', '[]', 0, '2021-04-30 18:29:22', '2021-04-30 18:29:22', '2022-04-30 19:29:22'),
('cfce01e9de05523fb6faf3f99d719edb093deb5f7ee20079d88f1fac0976d36d9cc5c60277e04adb', 7, 1, 'AppName', '[]', 1, '2021-04-28 06:44:45', '2021-04-28 06:44:45', '2022-04-28 07:44:45'),
('d089ef0506fcce51a323df965cd923e1e1a3a026eca707e25a0bb77953373899fd5ef3d3db245330', 7, 1, 'AppName', '[]', 1, '2021-05-02 20:12:31', '2021-05-02 20:12:31', '2022-05-02 21:12:31'),
('d0aac6359e57ead19a2d9fbb43c2b8a0745c9b7195fe1882833d137c7b92ca90c966d0b535615020', 5, 1, 'AppName', '[]', 1, '2021-04-28 01:24:15', '2021-04-28 01:24:15', '2022-04-28 02:24:15'),
('d0c239c57c1998a75c7fc8f06bc2c91da750d0e5676e849951097e46b681da10c3a9a01aea623ce3', 7, 1, 'AppName', '[]', 1, '2021-04-28 07:11:56', '2021-04-28 07:11:56', '2022-04-28 08:11:56'),
('d0e94ea2c62ec607e75cdb0f010fb14aa3c312bd732b4cdcac718646eb4f906bae82af0d56cd5829', 5, 1, 'AppName', '[]', 0, '2021-04-27 07:29:06', '2021-04-27 07:29:06', '2022-04-27 08:29:06'),
('d186af29c1efd667a087ccb402f3372292a26926dfb03db95a8c195c7184d782434fe4bcff1dbe19', 7, 1, 'AppName', '[]', 0, '2021-04-29 17:59:30', '2021-04-29 17:59:30', '2022-04-29 18:59:30'),
('d1cbe6eb41aa7bb2897c8e81c0efb1c623389dd20e005b42430361f1d29dbd03548abc415f93ba94', 7, 1, 'AppName', '[]', 1, '2021-04-30 17:16:23', '2021-04-30 17:16:23', '2022-04-30 18:16:23'),
('d1fff922942192dac212c22e1344a12b5b0d242df3bd5bd9b6182a150871ff21f132f617b26dcac6', 7, 1, 'AppName', '[]', 1, '2021-04-30 17:17:59', '2021-04-30 17:17:59', '2022-04-30 18:17:59'),
('d278baf8403313e1dd473ffda60310d87bd9b989cccf1e8779466d5b8b2729f1de300d33de72f160', 5, 1, 'AppName', '[]', 0, '2021-04-28 01:37:56', '2021-04-28 01:37:56', '2022-04-28 02:37:56'),
('d33627538d210e5b81dbc28a76f9414a4a2c860bd95e4d635d0a5580c4ea6398b8d35254802a54b9', 7, 1, 'AppName', '[]', 0, '2021-04-29 20:15:57', '2021-04-29 20:15:57', '2022-04-29 21:15:57'),
('d35c6fd0cc8fbfb34d9a6cc8007ed0dec3c39ac1fed14e07ec8c17c9b08c7afdab15e118292af3aa', 7, 1, 'AppName', '[]', 1, '2021-05-06 23:03:15', '2021-05-06 23:03:15', '2022-05-07 00:03:15'),
('d399be717d28ca3e2f9953729fa19ef0852a65c9c27281d484ce8209c99a47192d21606ec2418555', 7, 1, 'AppName', '[]', 0, '2021-04-28 06:37:17', '2021-04-28 06:37:17', '2022-04-28 07:37:17'),
('d415c5a5e56e6f576126e036fd6a977673b1d75da723811ed1cc6ccbe82b85956c58359c1264f339', 11, 1, 'AppName', '[]', 0, '2021-05-16 09:45:14', '2021-05-16 09:45:14', '2022-05-16 10:45:14'),
('d532c5cea25d8170c911a624916d4769ee3253890a295f2d7405ed34c2759d0bbd300fcd5e04ead2', 10, 1, 'AppName', '[]', 0, '2021-05-10 16:13:33', '2021-05-10 16:13:33', '2022-05-10 17:13:33'),
('d59f73d2beaa5f156ee7a5f236168896318d43508fc0cbad32d2742ad910317fb169fec2eacb8374', 7, 1, 'AppName', '[]', 0, '2021-04-29 20:23:27', '2021-04-29 20:23:27', '2022-04-29 21:23:27'),
('d5bad51b43b9f07815943394e4f66c515a982855b3161fdd0a521a3cf278789a413154afa7cb7d97', 11, 1, 'AppName', '[]', 1, '2021-05-18 13:18:00', '2021-05-18 13:18:00', '2022-05-18 14:18:00'),
('d5e5e42470b27768edd938635dc8d3cc2664d66274adba757a9de16f3febdcf1345d8b6ea49aefa5', 18, 1, 'AppName', '[]', 0, '2021-06-09 16:59:25', '2021-06-09 16:59:25', '2022-06-09 17:59:25'),
('d627e2ab16bd6944c2a7d089e67513e2ea6d6e97baf4eb980fc18ea373cbe987a7cf8a0dc7fd7781', 7, 1, 'AppName', '[]', 1, '2021-05-02 16:39:29', '2021-05-02 16:39:29', '2022-05-02 17:39:29'),
('d63fa8cadbd2a7bea27b3f782a66d9470f73030d018babb4a8d5f3a5b08ed8787a6da60e354f5327', 7, 1, 'AppName', '[]', 1, '2021-05-02 05:39:57', '2021-05-02 05:39:57', '2022-05-02 06:39:57'),
('d6f14762cc1444bc8eb408c95cd67c8b893387a9d581d81870adea33ce8dc738aed064a838934728', 11, 1, 'AppName', '[]', 1, '2021-05-27 13:56:15', '2021-05-27 13:56:15', '2022-05-27 14:56:15'),
('d7526993d08363ed1cb98f84bab64ae2a4e2e5182fc0879644cb0a488f3172925bd0f366e9dc377c', 7, 1, 'AppName', '[]', 0, '2021-05-01 21:32:20', '2021-05-01 21:32:20', '2022-05-01 22:32:20'),
('d8379dab4bb1868e6c39aa3df75b6f948b2cbf5b2443ff0bf6001912dba6299e1cc0cfa62eacde3d', 7, 1, 'AppName', '[]', 0, '2021-05-07 17:15:07', '2021-05-07 17:15:07', '2022-05-07 18:15:07'),
('d8a848b597988430db09b53217dcea8edc78363b100d3a4a7c974a3b8c928f57043f79ba73922288', 7, 1, 'AppName', '[]', 0, '2021-04-30 15:57:16', '2021-04-30 15:57:16', '2022-04-30 16:57:16'),
('d8b275836c9bb8e03f8ebd5aaf94e424ad2adc4e353a4694c554e4f215cb168241fa56f625e83c48', 4, 1, 'AppName', '[]', 0, '2021-04-27 04:22:40', '2021-04-27 04:22:40', '2022-04-27 05:22:40'),
('d8ce3fa15ca623c0aa3efe43a82bac0d7a7eefb6cf34b2510ec18a9fe24d12109b7f02886b6b6e85', 7, 1, 'AppName', '[]', 1, '2021-05-02 18:38:30', '2021-05-02 18:38:30', '2022-05-02 19:38:30'),
('d8ecaabe1cc8adb00c3e488787047f61ccc72d6be2e59b5cdbebc42551d96b0cf84a38e33c1a7a38', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:09:55', '2021-04-30 16:09:55', '2022-04-30 17:09:55'),
('d90aae96bdc53ae8fa07ae63506950821ec08d4ca3cf0d6d201e9c648e1caa775ced5dbb63d42b48', 5, 1, 'AppName', '[]', 1, '2021-04-28 01:10:11', '2021-04-28 01:10:11', '2022-04-28 02:10:11'),
('d93cfee824b3791eadbc8e17322c8b76aca43ee9da30c499915e683d62cd8f89d648d28fda26e518', 11, 1, 'AppName', '[]', 1, '2021-06-25 15:36:23', '2021-06-25 15:36:23', '2022-06-25 16:36:23'),
('d9599fabad222d65c304eb3f5eac613d62a9f233cb2f39e84c0e240b181c2af21758957b9111bd38', 11, 1, 'AppName', '[]', 1, '2021-05-22 19:24:59', '2021-05-22 19:24:59', '2022-05-22 20:24:59'),
('d9d0f6eb796935a33b541f1dd61fffaf1fc4477a1dc2284abfd77a8cc41b59c804d2fc11e4b83740', 11, 1, 'AppName', '[]', 0, '2021-05-23 12:33:59', '2021-05-23 12:33:59', '2022-05-23 13:33:59'),
('da4eb7555aff0c6db8179b0dc640298263712c170bc25b0c20e6863b8753930bb2c2340d921cc843', 7, 1, 'AppName', '[]', 0, '2021-05-02 22:24:40', '2021-05-02 22:24:40', '2022-05-02 23:24:40'),
('db8c7d5f98fd56a38105aea64667264c3f7c15180ecfe2d27e7e67c962c55db8943675dda23da64c', 7, 1, 'AppName', '[]', 0, '2021-05-01 00:53:13', '2021-05-01 00:53:13', '2022-05-01 01:53:13'),
('dc5c8cc3e658548ea946c4eac3440829f212de8f11368659848416a38c13f7efee7ff54307f562be', 7, 1, 'AppName', '[]', 0, '2021-05-01 22:26:17', '2021-05-01 22:26:17', '2022-05-01 23:26:17'),
('dc686580c244f7fff17a57d703cb02db4873229fe4047acbe394f089886869501683ef78e2ad9d25', 7, 1, 'AppName', '[]', 0, '2021-04-29 18:43:22', '2021-04-29 18:43:22', '2022-04-29 19:43:22'),
('dc74dc83e93dde9f5b461ef30df491c7b0417fc4aaa3031d14ba0426e748fcaf1e083358d8b3a3c8', 7, 1, 'AppName', '[]', 1, '2021-04-28 06:40:19', '2021-04-28 06:40:19', '2022-04-28 07:40:19'),
('dc9c264f8675b5cdb0fea844fd60869a01a78b136dcb0bf5faddb21b258f38f21f8c01bec5c8b0e0', 11, 1, 'AppName', '[]', 1, '2021-05-30 08:04:26', '2021-05-30 08:04:26', '2022-05-30 09:04:26'),
('dcc80bc5613ab5a4706fc60b062e8195b83eb3d0e10372b96e6e5d31671c1ceb003dcdf9a17e79d1', 7, 1, 'AppName', '[]', 0, '2021-05-01 00:36:56', '2021-05-01 00:36:56', '2022-05-01 01:36:56'),
('dd43c43d4720d0157ebbdca34d50afca1f0b3ca5dab5329fc9de70c03f918cc19cb9addffd948139', 5, 1, 'AppName', '[]', 0, '2021-04-28 03:05:24', '2021-04-28 03:05:24', '2022-04-28 04:05:24'),
('dd8f07906035b6057a8e67dd6fc584dc8f7a602777134ce1720652e0d934543f5ba56dbbf53b0fcc', 7, 1, 'AppName', '[]', 1, '2021-04-30 23:19:18', '2021-04-30 23:19:18', '2022-05-01 00:19:18'),
('ddbc59689bdb020c5dba222251255d4bbd1336b6cf4cb6c2c7c79382fa4f618a59c3c4a409781252', 11, 1, 'AppName', '[]', 0, '2021-05-16 09:45:33', '2021-05-16 09:45:33', '2022-05-16 10:45:33'),
('de452b9ab65e0aa8e814fdd349dd18ead43f3645c395cd25f6f524f34cddb81e5fec6e11632051b1', 7, 1, 'AppName', '[]', 1, '2021-04-30 18:18:19', '2021-04-30 18:18:19', '2022-04-30 19:18:19'),
('de5d2716c77e381086b141784812b347dece66b2ddd9dd69abcbdde2d7b3ddb6e4b69491e2227d1c', 7, 1, 'AppName', '[]', 1, '2021-05-01 22:56:47', '2021-05-01 22:56:47', '2022-05-01 23:56:47'),
('de7cf0eeac83a1e26ad558b1ce8cfb2d9c59fd3e269b5ad14f6dc5d9fbfe07b44151193a0180e558', 7, 1, 'AppName', '[]', 0, '2021-04-29 22:02:41', '2021-04-29 22:02:41', '2022-04-29 23:02:41'),
('de94b4e3bc4e5c254a0016f2c113b6a0c22f3811c7b9f50cf385088be9e0f10ce20d13551ff5a715', 18, 1, 'AppName', '[]', 0, '2021-06-08 12:56:12', '2021-06-08 12:56:12', '2022-06-08 13:56:12'),
('de9f0a45d9d85f6eca817b27504e84f9c7700c1156f387af8b29cdb9f7143459a19b76ac92f00bd3', 11, 1, 'AppName', '[]', 0, '2021-05-15 04:22:04', '2021-05-15 04:22:04', '2022-05-15 05:22:04'),
('dee36a43ddb863799d6fda8e6a0971fa871cbf8d93ccb8791c43c289128e033ec10f2b02b3139ac4', 10, 1, 'AppName', '[]', 0, '2021-05-08 04:01:06', '2021-05-08 04:01:06', '2022-05-08 05:01:06'),
('dee3e0612694b469a929d632bd0c07f2df5c07d00368f6b0de1417e23da2985d4f73bceba728c8f3', 7, 1, 'AppName', '[]', 1, '2021-05-02 18:26:03', '2021-05-02 18:26:03', '2022-05-02 19:26:03'),
('df56b476873ca39672c8e64fb339770c4e03de02d0c164725066bd7b5d425cc31c1c7c365563833b', 11, 1, 'AppName', '[]', 1, '2021-06-08 17:29:42', '2021-06-08 17:29:42', '2022-06-08 18:29:42'),
('df74768215b14acb394652f04c5efe7d5aac96c8abd52f6c261b17f5c9e276fc8c46ff6709f8ae4f', 7, 1, 'AppName', '[]', 0, '2021-04-30 13:01:30', '2021-04-30 13:01:30', '2022-04-30 14:01:30'),
('e0451bd3c8180c5e7797c669e9e9c0d1945d20f89a0d08560476f7d13a4a8fecae3a9a3182d883ea', 11, 1, 'AppName', '[]', 0, '2021-05-21 14:33:09', '2021-05-21 14:33:09', '2022-05-21 15:33:09'),
('e0add7c147d3fe927085aec391ccff12cf30d9a24144b9aff29894640ce5e2776b1d1e19cf0774e9', 5, 1, 'AppName', '[]', 0, '2021-04-28 01:46:28', '2021-04-28 01:46:28', '2022-04-28 02:46:28'),
('e135bd7a185bcbabdd4ce0b8885795c7032b2fe3ea15bb2464fa68198b8d3d4e9083511144cf2bf8', 7, 1, 'AppName', '[]', 1, '2021-05-02 22:24:51', '2021-05-02 22:24:51', '2022-05-02 23:24:51'),
('e162f1e92d091384722520e011245c191f3e9f6366077d855ef68cd1039b57af99409d2b2500d538', 18, 1, 'AppName', '[]', 0, '2021-06-08 17:38:22', '2021-06-08 17:38:22', '2022-06-08 18:38:22'),
('e17a1daadfa1f5c3e9771067d9e9c78e21613e63caacbbe048d41916d15243b3dd00d0de792d0ae4', 17, 1, 'AppName', '[]', 1, '2021-06-04 14:23:17', '2021-06-04 14:23:17', '2022-06-04 15:23:17'),
('e1b045a4ca5bba1aca29898b0adf61e0b5f8777ccab64b2f530a57698150a09ab8d813382e02ea3a', 5, 1, 'AppName', '[]', 0, '2021-04-27 06:38:20', '2021-04-27 06:38:20', '2022-04-27 07:38:20'),
('e22361e2bf3117f306aa942d356b1946468a7a88e29202773c7acad3f992c5e7375ccf0b33265db9', 11, 1, 'AppName', '[]', 1, '2021-06-04 15:01:15', '2021-06-04 15:01:15', '2022-06-04 16:01:15'),
('e320d1e2b01bc477f62c7c726e3b84cd5e71ca99da82498f32ef3c71db7a392a270b0a2592e7b6bc', 11, 1, 'AppName', '[]', 0, '2021-06-28 17:05:17', '2021-06-28 17:05:17', '2022-06-28 18:05:17'),
('e360caa1ddc339d49e2125804c250915b75ef73c0aed0e65c099f26b9fa494a51cac0a750e2950cf', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:10:00', '2021-04-30 16:10:00', '2022-04-30 17:10:00'),
('e38466f24d944c02f6ca7602e08f38ea1da1ccd52a8ebcc00caa5a996e910905692168927056538c', 11, 1, 'AppName', '[]', 1, '2021-06-29 19:28:45', '2021-06-29 19:28:45', '2022-06-29 20:28:44'),
('e385a81e4ca1a5d8a9dbb319e206b4a4856eca1a8f45c25400209f9139c7eca0c008dfbf6e6eb60f', 7, 1, 'AppName', '[]', 0, '2021-04-30 13:01:50', '2021-04-30 13:01:50', '2022-04-30 14:01:50'),
('e38e9df67af127a266172fa5489f672add8c72613e5c1b5bfb266e2cb8043ec65902b4bd0b7faf9d', 7, 1, 'AppName', '[]', 0, '2021-04-30 11:30:33', '2021-04-30 11:30:33', '2022-04-30 12:30:33'),
('e3cd896b67dd67312d3037623af64b051a50d8ba14a060bcee64548788512b2bb4a3fc779e68c060', 11, 1, 'AppName', '[]', 0, '2021-05-17 10:25:00', '2021-05-17 10:25:00', '2022-05-17 11:25:00'),
('e3d960c8ccee5afb63f07419e42f2d9a4ebaa1a14e82d589677c1852ca0f408e4017e71f5ce95a1c', 7, 1, 'AppName', '[]', 0, '2021-04-30 23:28:31', '2021-04-30 23:28:31', '2022-05-01 00:28:31'),
('e3f396ecd717dcbe9f2b727faad2034257b93252d20ae8014e439fcc0e896d915780f912494cce8f', 7, 1, 'AppName', '[]', 1, '2021-04-30 19:33:49', '2021-04-30 19:33:49', '2022-04-30 20:33:49'),
('e440ae18a85a78f75f724692b6002ab4c88c10d9eba1707d912f58e574a296fb3758fb0c25f94aa5', 7, 1, 'AppName', '[]', 0, '2021-04-30 13:01:31', '2021-04-30 13:01:31', '2022-04-30 14:01:31'),
('e4646927d311cd75709b0555215405f577c89e8dd4cd29896c690015a2ed3298dffd95b65c8b944e', 7, 1, 'AppName', '[]', 1, '2021-04-30 18:21:00', '2021-04-30 18:21:00', '2022-04-30 19:21:00'),
('e4881c3d36a3c70735e2565b3e838e094b6879597a202a26ea2a6b5ba474aea826c6c856820255e0', 12, 1, 'AppName', '[]', 0, '2021-05-27 12:59:35', '2021-05-27 12:59:35', '2022-05-27 13:59:35'),
('e48db4ce0b8d3c16dee9e038f335567d0c59e46c97c10df91d9d918a025bf4b708163523e039f4e4', 7, 1, 'AppName', '[]', 0, '2021-04-29 18:01:58', '2021-04-29 18:01:58', '2022-04-29 19:01:58'),
('e4a150500421ceafde8c2a32ab0c30b57eb81d0277c9373d3f74d9c2733d9a08dd443b862a0a8161', 11, 1, 'AppName', '[]', 1, '2021-05-31 12:56:07', '2021-05-31 12:56:07', '2022-05-31 13:56:07');
INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('e4fcdce80d2b5de79cf1fce1258474fae09f6cd37a11155277a70eeee5090265056353522d998799', 7, 1, 'AppName', '[]', 0, '2021-04-30 13:42:34', '2021-04-30 13:42:34', '2022-04-30 14:42:34'),
('e50c7a6fd8a26a8e2f3ce12efe0d83fe064f36aaf18c6911c6d2f015c5e0f99226095802ef01fea6', 10, 1, 'AppName', '[]', 1, '2021-05-08 05:22:51', '2021-05-08 05:22:51', '2022-05-08 06:22:51'),
('e56db80a4a601bb43488b7a110538a0c761fc66cb59b94ec5eeda8e20d290d1af7d5c6b50bde3f44', 7, 1, 'AppName', '[]', 0, '2021-04-30 21:27:52', '2021-04-30 21:27:52', '2022-04-30 22:27:52'),
('e5fea0f50da44df15bfb1a48516a47602182bf548b3eacdaec8a3a9e8dd4393ea81a873fc88c5d23', 11, 1, 'AppName', '[]', 0, '2021-06-10 19:28:37', '2021-06-10 19:28:37', '2022-06-10 20:28:37'),
('e61855b1c22860429c830916eb426c75d5cdc970e8db886d1ea0592c76fb3bee88d23c5e83bb0751', 9, 1, 'AppName', '[]', 1, '2021-05-04 11:02:03', '2021-05-04 11:02:03', '2022-05-04 12:02:03'),
('e6338eede07ffa74ca6a8ebdd2f2fb56df57de1eaeb2ef4f2ee8f7d74db13868f434217436e648fa', 7, 1, 'AppName', '[]', 1, '2021-04-30 18:19:17', '2021-04-30 18:19:17', '2022-04-30 19:19:17'),
('e68107096c82ffce1ccbff40dbe310dea4a8eb997a0fe76e74c378a7a413a30534dd589fd50b7aad', 7, 1, 'AppName', '[]', 1, '2021-05-05 10:22:49', '2021-05-05 10:22:49', '2022-05-05 11:22:49'),
('e72420213a562e7b8021fdcb6598685aea4d3344f564fc4ce32728f9e66da1c64012f44e0f10085a', 1, 1, 'AppName', '[]', 0, '2021-04-27 03:00:05', '2021-04-27 03:00:05', '2022-04-27 04:00:05'),
('e770cd72c0f23244d41256163ec837370f7f22530f9de13de0558eaacd48baba1f2d6a3678b0b36a', 7, 1, 'AppName', '[]', 0, '2021-05-01 21:32:01', '2021-05-01 21:32:01', '2022-05-01 22:32:01'),
('e7f6bb5f58baca0e4f0c581a284eb4cfe2ad5aff89e1a318e8d70601932b970de3286a845b8e3781', 7, 1, 'AppName', '[]', 1, '2021-04-30 17:13:48', '2021-04-30 17:13:48', '2022-04-30 18:13:48'),
('e7fbca4540ebeb3ec138afc5a35f203769dbc6d85d2e7d86e76ae74f4073cf928d7ec8fff46acb3e', 11, 1, 'AppName', '[]', 0, '2021-06-09 19:04:05', '2021-06-09 19:04:05', '2022-06-09 20:04:05'),
('e8204dafeb869fd0cd702df788a103b99b99c374a75bb355b7400725115457ada77bb01d0dfbcdae', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:54:23', '2021-04-30 16:54:23', '2022-04-30 17:54:23'),
('e83aea1583ab0aa6f5576e0724e67f27298d26241e8ca1ce13d55788a82793640c6db517a10a3335', 7, 1, 'AppName', '[]', 1, '2021-05-01 23:54:25', '2021-05-01 23:54:25', '2022-05-02 00:54:25'),
('e8badd2c4ef69f20a8023d8c04517d8d1c3545eed596f092b811fa0e6ff3d88de8c5c249e5ee6882', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:04:37', '2021-04-30 16:04:37', '2022-04-30 17:04:37'),
('e905104666245f5e8faccba9a84013b0c8f70b0f84a254fc0e6dc1b9893d80655356cd925b8323ba', 11, 1, 'AppName', '[]', 0, '2021-06-23 22:57:47', '2021-06-23 22:57:47', '2022-06-23 23:57:47'),
('e9153ff72705d3d930b86536700fd521786fac5d540141326ac4e45298a571fccdc75d44d474d073', 7, 1, 'AppName', '[]', 0, '2021-04-29 17:20:05', '2021-04-29 17:20:05', '2022-04-29 18:20:05'),
('e9685f965ad54936a4b69e6ed8ccd27b53fc7dbb8a305631950352c27b954a401991aaae87faec2c', 7, 1, 'AppName', '[]', 0, '2021-04-30 13:49:19', '2021-04-30 13:49:19', '2022-04-30 14:49:19'),
('ea348e9a0ff5454cbede2cf2dd605c9e09fcd07bf26e34658c7c13427214a40740a4ff82a6f1a12b', 7, 1, 'AppName', '[]', 0, '2021-04-30 13:56:23', '2021-04-30 13:56:23', '2022-04-30 14:56:23'),
('ea77df5a2eede03f017940426802ed88fd1acc2930ffc20d8557a5bd66666d4d5d877a3978006a0d', 7, 1, 'AppName', '[]', 0, '2021-05-03 23:53:13', '2021-05-03 23:53:13', '2022-05-04 00:53:13'),
('eaee4f8a49cf958019a50e387aba95b3e8fa1e1f61690dd75a17a8a05d07d7b940820699083de696', 7, 1, 'AppName', '[]', 1, '2021-05-06 18:00:02', '2021-05-06 18:00:02', '2022-05-06 19:00:02'),
('ebaed26ba28741fb37b5c3affed303808f902362c45fd5e6a226e6023775ef5a19e2f8090fe3ff61', 11, 1, 'AppName', '[]', 0, '2021-05-15 08:37:30', '2021-05-15 08:37:30', '2022-05-15 09:37:30'),
('ebb78a27156c95b8f02cf13fd4c7f018a6cff74a08bfec5d960adbd13824b69ebd47c5efd824c0ba', 7, 1, 'AppName', '[]', 0, '2021-04-30 13:12:42', '2021-04-30 13:12:42', '2022-04-30 14:12:42'),
('ebc73369a1a9802d5018694afa1ee3996a5a827e723418e30a2bcaee0a8d336d25777a1bcd904cd5', 7, 1, 'AppName', '[]', 1, '2021-05-02 16:37:08', '2021-05-02 16:37:08', '2022-05-02 17:37:08'),
('ec781d0629d575c24ef79475c5bf8ca62dda691123c07a6bedd93a0d34d05acdf48bf4c3f27f9ff8', 10, 1, 'AppName', '[]', 0, '2021-05-12 09:06:26', '2021-05-12 09:06:26', '2022-05-12 10:06:26'),
('ed080b1bc3844a8cf3caf088ac005c2a0d149ba1693b6a111eee74e96561e45d6da9ee184adf7f78', 11, 1, 'AppName', '[]', 1, '2021-06-09 22:50:20', '2021-06-09 22:50:20', '2022-06-09 23:50:20'),
('ed6a019f94adaed9ad39b6b23ff1b482cf416fd2242fab1d4d18ee3faa99288a4e5bcc1cc68b0a93', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:10:07', '2021-04-30 16:10:07', '2022-04-30 17:10:07'),
('ed6b843c205845586b0a934992db2a992efe836f8f49422ed6a8e10774beb8b9f3bf9810b6ffc70d', 14, 1, 'AppName', '[]', 1, '2021-06-29 22:13:38', '2021-06-29 22:13:38', '2022-06-29 23:13:38'),
('ed97adb7adb14d7b83457b04c9486f36a462d3f38d1f5b5b2e7cca1dfd508684e86cd002d011db5a', 5, 1, 'AppName', '[]', 0, '2021-04-28 05:35:47', '2021-04-28 05:35:47', '2022-04-28 06:35:47'),
('edccad33e7fee81715e670f9d0acc0ea6f4c830080930d1e475b266a2cf170796ce9de76df2b9d0d', 11, 1, 'AppName', '[]', 0, '2021-06-09 20:38:19', '2021-06-09 20:38:19', '2022-06-09 21:38:19'),
('ee6a5fb3a8923e4730fe6eef6b9f640deffd97f4e00c80cbf408cc95cf8f56a88478a6231b365d0a', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:12:52', '2021-04-30 16:12:52', '2022-04-30 17:12:52'),
('ef3b099e96d0cb272916aa0e63bfb9c3d1809b6b9215060eb1b49a3666be4a92d5628a3bfe1ad31f', 7, 1, 'AppName', '[]', 1, '2021-05-01 23:51:12', '2021-05-01 23:51:12', '2022-05-02 00:51:12'),
('efca8596a37ca6a986ba8fe74dce59bb9549c6fca3175219fa2d36047663bfd3d07e83683f2fd251', 7, 1, 'AppName', '[]', 1, '2021-05-02 18:26:38', '2021-05-02 18:26:38', '2022-05-02 19:26:38'),
('f0f4d4da737ddecc32f1051e5b9a2dfdf1a98097c67b540f94f7afd67c5c2e524c4da412b4159bcd', 7, 1, 'AppName', '[]', 0, '2021-04-28 06:00:26', '2021-04-28 06:00:26', '2022-04-28 07:00:26'),
('f168c857977ae113a1ca8984c57723389a396dc49b8ec8f4b97513e5bcd75df434a1320ffb6d5ff7', 7, 1, 'AppName', '[]', 1, '2021-04-28 07:04:20', '2021-04-28 07:04:20', '2022-04-28 08:04:20'),
('f262f9bde491959754d57c97bf65124cefca88eaaff987c0268e6ef3a41eaa2c30f3e845d4737520', 11, 1, 'AppName', '[]', 0, '2021-06-05 01:32:42', '2021-06-05 01:32:42', '2022-06-05 02:32:42'),
('f2d3cb419dad36ca6adc823e240f37c0d5f072f42159870b4e1aaefb2251a12228c9386c5fe31b31', 7, 1, 'AppName', '[]', 0, '2021-05-05 15:30:55', '2021-05-05 15:30:55', '2022-05-05 16:30:55'),
('f2fa1adfd0e326440476a4b1157e00b60ee50676d77447d51797a918393016ce4c0297db9338e5ef', 11, 1, 'AppName', '[]', 1, '2021-05-18 13:33:18', '2021-05-18 13:33:18', '2022-05-18 14:33:18'),
('f31c32baa779e9e779a46f9f33b42183bcdfca2c4856ec024a93e808af7fa43dee7ed3707e4be8d8', 11, 1, 'AppName', '[]', 0, '2021-06-25 22:23:21', '2021-06-25 22:23:21', '2022-06-25 23:23:21'),
('f36a2fc7c856e973fa6613d6b4113f37d66adcb0fb44747cd05e8b0376be7e9d3a6e6904278e0e70', 11, 1, 'AppName', '[]', 1, '2021-06-04 14:48:33', '2021-06-04 14:48:33', '2022-06-04 15:48:33'),
('f39d5df39d5b56d5ca0d5a6d2ad7a3246638e5cfcb34f20156553dd25bd9f892b8eae4a147dc476f', 7, 1, 'AppName', '[]', 0, '2021-04-30 13:43:46', '2021-04-30 13:43:46', '2022-04-30 14:43:46'),
('f3b86ddc8db89bfb2e5aefc6993fbcbcdd644a3427f48dcda3de21d7e0a68530f2e3050de0ecc3fd', 7, 1, 'AppName', '[]', 1, '2021-04-30 21:28:24', '2021-04-30 21:28:24', '2022-04-30 22:28:24'),
('f449fef64855307e33396d6615ea1a03dc6baa2c6c51e4e679151da9f09a15e00b5578b60a0d805e', 18, 1, 'AppName', '[]', 0, '2021-06-08 12:53:27', '2021-06-08 12:53:27', '2022-06-08 13:53:27'),
('f4966c34efac94570b9e3b5af36b4fab314b8cade2c7ae705934afa57d08159ef951d30ed3f70cd4', 7, 1, 'AppName', '[]', 0, '2021-04-30 13:53:43', '2021-04-30 13:53:43', '2022-04-30 14:53:43'),
('f508419f4f42de548e0c3eaa749f555e68355d161d852e6b06d6418b601ba8f83b3fe6fc21cb402e', 11, 1, 'AppName', '[]', 1, '2021-06-09 19:02:10', '2021-06-09 19:02:10', '2022-06-09 20:02:10'),
('f5287e9a7733373768f815da7353d67d1e904d0c595e599be5ebe6b58817a13021fee3e15cced078', 5, 1, 'AppName', '[]', 0, '2021-04-28 02:57:17', '2021-04-28 02:57:17', '2022-04-28 03:57:17'),
('f53ee73691fc93e6dd8484a387ad4b389235d59e60b780f122fa7959140a3d7867f6bc62fa170b13', 7, 1, 'AppName', '[]', 1, '2021-05-07 05:47:02', '2021-05-07 05:47:02', '2022-05-07 06:47:02'),
('f597bcb576c77001f98f9171de4edb9ee5f3e27f29e888f4f0b5a8e3e27f1668dce772a3c0423567', 7, 1, 'AppName', '[]', 0, '2021-04-30 11:20:30', '2021-04-30 11:20:30', '2022-04-30 12:20:30'),
('f5e00c87c988db47aca3c0ab305605952ceb14d40061306b06da3678a3400b1df695bea1028245eb', 11, 1, 'AppName', '[]', 0, '2021-06-28 13:42:47', '2021-06-28 13:42:47', '2022-06-28 14:42:47'),
('f5e903c9d968c3193f50e9199e41ce0ddf40260c0f277b0bbd8f30715d3915315cb32f3c9b4cd457', 10, 1, 'AppName', '[]', 1, '2021-05-13 17:42:14', '2021-05-13 17:42:14', '2022-05-13 18:42:14'),
('f6727d5decbaccf8c514d155377795ede07781f40a449459ec04c23a42e09557f19aef5d01189ae0', 10, 1, 'AppName', '[]', 0, '2021-05-13 16:35:30', '2021-05-13 16:35:30', '2022-05-13 17:35:30'),
('f6d6137bd7b6c14498d5a67fb3e0f0727fd792882fe824c789921331f20ce851c6fb6ffbb7517dd3', 7, 1, 'AppName', '[]', 0, '2021-04-29 18:19:22', '2021-04-29 18:19:22', '2022-04-29 19:19:22'),
('f6ff08d23c29eb4043bdf5563d6b978817a8597b8e2fb5b2894087bc006399026d7c939b1054c2cc', 7, 1, 'AppName', '[]', 1, '2021-05-02 22:34:25', '2021-05-02 22:34:25', '2022-05-02 23:34:25'),
('f702abd2cadaaeb070cd09b7ad663eee0dafdfa90300c1204acc3ef44d38fca4bb74ef76312e5b2d', 7, 1, 'AppName', '[]', 0, '2021-04-30 19:40:17', '2021-04-30 19:40:17', '2022-04-30 20:40:17'),
('f70b61fe8346f3216e1bf443f385d79dfa3b46ea009fe2e53e3e2b0950a1696fd3d05c1c8aded57b', 5, 1, 'AppName', '[]', 1, '2021-04-28 01:21:52', '2021-04-28 01:21:52', '2022-04-28 02:21:52'),
('f7623ecf2fec6a7cbe0b2147c1da72ca47d3c73e17f706116135a2538448b6dff41fc3caefa8383f', 7, 1, 'AppName', '[]', 0, '2021-04-29 19:44:21', '2021-04-29 19:44:21', '2022-04-29 20:44:21'),
('f828d7628cb1ed0a8998da9f935926699b3364316e582824938edd600eb7b97f48ec3993beb729e7', 7, 1, 'AppName', '[]', 0, '2021-04-29 18:43:25', '2021-04-29 18:43:25', '2022-04-29 19:43:25'),
('f8ce2ef254ecc9b9a46368bd37591de54710d0646d512229aa0b5207942a5cdb31aaf833354f0a95', 7, 1, 'AppName', '[]', 0, '2021-05-07 18:31:35', '2021-05-07 18:31:35', '2022-05-07 19:31:35'),
('f8fede489f5fc83b225c1f0f03f44b6c8ebbc9a2fdf4bf68e7dee2dc3e82b8975e6f7fbbdaff6758', 7, 1, 'AppName', '[]', 0, '2021-04-28 05:55:28', '2021-04-28 05:55:28', '2022-04-28 06:55:28'),
('f92ee900f6bca0f52a8c456bd24f47a7741f9bf407a4b0f6a6dd2e018a49f4415a6d12dc3f4f2c82', 7, 1, 'AppName', '[]', 1, '2021-05-08 00:01:16', '2021-05-08 00:01:16', '2022-05-08 01:01:16'),
('f96410ead31a37a2581c6bc5f25b553d1f686000cdd118aa0e953da2d750325ff7aa6a88f1f2e5a6', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:09:59', '2021-04-30 16:09:59', '2022-04-30 17:09:59'),
('fa129d9645fd9005ef0f9fe8ade50b271bff7be1fac7891146ac5f6c71c5e0e35622b410bdcbdbb0', 11, 1, 'AppName', '[]', 1, '2021-05-30 03:34:23', '2021-05-30 03:34:23', '2022-05-30 04:34:23'),
('fa263b15e188bf7e4f00bc5b7d81149e5d9dc52484a090b92ab86311d9e9818e2997f59892c119a2', 11, 1, 'AppName', '[]', 1, '2021-06-09 22:51:31', '2021-06-09 22:51:31', '2022-06-09 23:51:31'),
('fa5382a05822b1ddc5e4d8c12bdc1440c05e5428a26b4c2691413a79664ad96afea250a6577eed6e', 7, 1, 'AppName', '[]', 0, '2021-04-30 13:24:52', '2021-04-30 13:24:52', '2022-04-30 14:24:52'),
('fa5bc02ee7d607291fa5a406ddfbf38a61f3c558b98676b0e47dbaa2e041d4954ba4e4e5d84b0741', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:59:29', '2021-04-30 16:59:29', '2022-04-30 17:59:29'),
('fabd3a8ac17563f304f9670c727b2735a0fb99c6481a7b2d047cd828e0198d96e9a20cfd6aeb987e', 11, 1, 'AppName', '[]', 0, '2021-05-21 13:09:54', '2021-05-21 13:09:54', '2022-05-21 14:09:54'),
('fb24b0c55b04efbee7fa352dff6e81f805175a690f8c4e95136e3691d00f81dfdf1fd99406930db2', 7, 1, 'AppName', '[]', 0, '2021-05-01 00:04:03', '2021-05-01 00:04:03', '2022-05-01 01:04:03'),
('fbf7ba274ac1a5dbd281ca6a52a784fa3ce37b9e5a87015bde7eaa2f0e21b241f4cc052e3a55bf4a', 7, 1, 'AppName', '[]', 0, '2021-05-01 04:02:12', '2021-05-01 04:02:12', '2022-05-01 05:02:12'),
('fc3f50ccefa9eba306434ebe9bfc2e9c008418f7f713d3571e8f608a22c23f64f8c4b549e35b53f4', 5, 1, 'AppName', '[]', 0, '2021-04-27 22:21:10', '2021-04-27 22:21:10', '2022-04-27 23:21:10'),
('fc59cd75d5482a586b45039e1d40286191210b50607e65efeb53b000a66af6a41c05128af7089724', 11, 1, 'AppName', '[]', 0, '2021-06-24 00:55:28', '2021-06-24 00:55:28', '2022-06-24 01:55:28'),
('fc75a8d15bbe25259ae1cfff1f83ccf1460c7e1b50c07a0f03377e762cbbe27c31ddfbed10baa5c4', 7, 1, 'AppName', '[]', 0, '2021-04-30 12:52:40', '2021-04-30 12:52:40', '2022-04-30 13:52:40'),
('fc9c8ff5fb10511393b1604db9bd36210dcead108db0f364408585823282e7c23a12fab0d5eb1de1', 11, 1, 'AppName', '[]', 0, '2021-05-15 08:37:32', '2021-05-15 08:37:32', '2022-05-15 09:37:32'),
('fc9dc76d14950ed59802eeef21f287415fac536bebf10fded74189afe727537fa431bc0cbac6dd5b', 7, 1, 'AppName', '[]', 0, '2021-04-30 13:47:35', '2021-04-30 13:47:35', '2022-04-30 14:47:35'),
('fca6ac71482c5a283e42e5210356e7d4a84d6ba6e8adea04a448b97576e23e8d0f1938fd34917464', 7, 1, 'AppName', '[]', 0, '2021-04-29 17:25:15', '2021-04-29 17:25:15', '2022-04-29 18:25:15'),
('fcadf99b8944403ab8cf81cd66ee8ffff8ec14ec80981fe51d8f6c552f77d349d69599be3b8783c6', 7, 1, 'AppName', '[]', 0, '2021-04-29 19:41:29', '2021-04-29 19:41:29', '2022-04-29 20:41:29'),
('fd2c3bf99e40dbcc57c7dbccf6fb2d9583b672b34ef71b4a2c8f2a11a19cd7b041f3c9fb9d575b94', 7, 1, 'AppName', '[]', 0, '2021-04-29 22:08:07', '2021-04-29 22:08:07', '2022-04-29 23:08:07'),
('fd303738e4407d84f66752c7a627814dd511134c297fa2edc1b26abc4b7794086ff75b69fa09cd43', 7, 1, 'AppName', '[]', 0, '2021-04-30 16:10:01', '2021-04-30 16:10:01', '2022-04-30 17:10:01'),
('fe0189c6da79d962ca2362d13a5b09d2c74d0c6f3a9c956b3ad2ea268b489bffdbd2c6aff760569a', 7, 1, 'AppName', '[]', 0, '2021-04-29 18:07:36', '2021-04-29 18:07:36', '2022-04-29 19:07:36'),
('fe1d6b0477e517a354df3f606978d6163d28bfede8cc9f962cab2595a48a7728028e6bb456de303a', 11, 1, 'AppName', '[]', 0, '2021-06-09 09:39:21', '2021-06-09 09:39:21', '2022-06-09 10:39:21'),
('fe5dcd03b3f21436e025cfc903144c9d56d5ed6d0031ad09af8a9b1e31ff78c38a2331ac4c495b2b', 11, 1, 'AppName', '[]', 1, '2021-05-15 06:45:19', '2021-05-15 06:45:19', '2022-05-15 07:45:19'),
('feb77f638144f075bbcae4c137ea0c2f11781fd6375465276bcc7d410a57febcea684581559688d3', 11, 1, 'AppName', '[]', 0, '2021-06-04 15:01:13', '2021-06-04 15:01:13', '2022-06-04 16:01:13'),
('fecc32115435fcc519b52ee256bad9e63e4f853c831e926ff777d8be2c6bdcc1010018862b1149c8', 7, 1, 'AppName', '[]', 0, '2021-05-02 22:24:39', '2021-05-02 22:24:39', '2022-05-02 23:24:39'),
('fef89fd1df6936a822b9e499325baf789e3e1a420c607c5d8dfb8b51b586867cf31e498ec74cb13d', 14, 1, 'AppName', '[]', 0, '2021-05-27 13:57:55', '2021-05-27 13:57:55', '2022-05-27 14:57:55'),
('ff2fb14a13542883c5b410a48d32ecadee8e44913f7aa76b9af0cf368af0b8e3e981f12893dc1f12', 7, 1, 'AppName', '[]', 1, '2021-04-30 22:18:38', '2021-04-30 22:18:38', '2022-04-30 23:18:38'),
('ff474ccd89e0b55af6b2bec17872951ee7f18bea8a72f0af808cdac88fbf75ae1508ad4b1e48de34', 11, 1, 'AppName', '[]', 1, '2021-05-27 13:39:50', '2021-05-27 13:39:50', '2022-05-27 14:39:50'),
('ff653a70f40263bebbb031206cd0ffbbc8316b7fb1fe3d30d9e503301ad8225f68bb463db94055c4', 11, 1, 'AppName', '[]', 1, '2021-05-15 04:01:58', '2021-05-15 04:01:58', '2022-05-15 05:01:58');

-- --------------------------------------------------------

--
-- Structure de la table `oauth_auth_codes`
--

DROP TABLE IF EXISTS `oauth_auth_codes`;
CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `oauth_clients`
--

DROP TABLE IF EXISTS `oauth_clients`;
CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', 's1j5LiY3beQVArH7Ifte5sgcYJujp6tW9ttq9oFc', NULL, 'http://localhost', 1, 0, 0, '2021-04-27 02:05:25', '2021-04-27 02:05:25'),
(2, NULL, 'Laravel Password Grant Client', 'TeLgYRQgdrbecQdYGWN7IBIPGJkA80DAE9uXjfu2', 'users', 'http://localhost', 0, 1, 0, '2021-04-27 02:05:25', '2021-04-27 02:05:25');

-- --------------------------------------------------------

--
-- Structure de la table `oauth_personal_access_clients`
--

DROP TABLE IF EXISTS `oauth_personal_access_clients`;
CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2021-04-27 02:05:25', '2021-04-27 02:05:25');

-- --------------------------------------------------------

--
-- Structure de la table `oauth_refresh_tokens`
--

DROP TABLE IF EXISTS `oauth_refresh_tokens`;
CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `projets`
--

DROP TABLE IF EXISTS `projets`;
CREATE TABLE `projets` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `nom_projet` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Ncompte` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Url_vedio_youtube` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `images` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Résumé` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_fin_projet` date NOT NULL,
  `prix_total` double(16,2) NOT NULL,
  `Prix_payes` double(16,2) NOT NULL DEFAULT 0.00,
  `Prix_rest` double(16,2) NOT NULL,
  `Catégorie` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description2` varchar(400) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description1` varchar(400) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pays` varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date_lance_projet` date DEFAULT NULL,
  `titre1` varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `titre2` varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `titre3` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description3` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `accepte` enum('oui','non','en attand') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'en attand',
  `Success` enum('oui','non','en attand') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'en attand',
  `nombre_vote` int(11) DEFAULT 0,
  `nombre_inv` int(11) DEFAULT 0,
  `nombre_jour` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `projets`
--

INSERT INTO `projets` (`id`, `user_id`, `nom_projet`, `Ncompte`, `Url_vedio_youtube`, `images`, `Résumé`, `date_fin_projet`, `prix_total`, `Prix_payes`, `Prix_rest`, `Catégorie`, `description2`, `description1`, `pays`, `date_lance_projet`, `titre1`, `titre2`, `titre3`, `description3`, `accepte`, `Success`, `nombre_vote`, `nombre_inv`, `nombre_jour`) VALUES
(110, 11, 'klnklndfln', NULL, 'undefined', 'assets/projets/1624987100.png', 'kln klnklnkln nllk', '2021-09-21', 50000.00, 0.00, 50000.00, 'social', NULL, NULL, 'Azerbaijan', '2021-07-03', NULL, NULL, NULL, NULL, 'oui', 'en attand', 0, 0, 80),
(111, 11, 'Eiusmod vel voluptat', NULL, 'undefined', 'assets/projets/1625001586.png', 'Mollitia ullam velit', '2021-09-22', 1.00, 0.00, 1.00, 'Culture et art', NULL, NULL, 'Korea (Republic of)', '2021-07-04', NULL, NULL, NULL, NULL, 'oui', 'en attand', 0, 0, 80),
(112, 11, 'Voluptates quia eos', NULL, 'undefined', 'assets/projets/1625001852.png', 'Nihil illum expedit', '2021-09-11', 10.00, 0.00, 10.00, 'social', NULL, NULL, 'Gambia', '2021-07-03', NULL, NULL, NULL, NULL, 'non', 'en attand', 0, 0, 70),
(113, 14, 'Voluptates doloremqu', NULL, 'undefined', 'assets/projets/1625002580.png', 'Quidem ea rerum mole', '2021-09-21', 8.00, 0.00, 8.00, 'Jeunesse et éducation', NULL, NULL, 'United Arab Emirates', '2021-07-03', NULL, NULL, NULL, NULL, 'oui', 'en attand', 0, 0, 80),
(114, 14, 'Eveniet Nam illum', NULL, 'undefined', 'assets/projets/1625002706.png', 'Sapiente deleniti of', '2021-09-21', 81.00, 0.00, 81.00, 'Culture et art', NULL, NULL, 'Thailand', '2021-07-03', NULL, NULL, NULL, NULL, 'oui', 'en attand', 0, 0, 80),
(115, 14, 'Rem itaque nostrud e', NULL, 'undefined', 'assets/projets/1625003518.png', 'Sint debitis ipsum q', '2021-09-11', 40.00, 0.00, 40.00, 'Financement privé', NULL, NULL, 'Canada', '2021-07-03', NULL, NULL, NULL, NULL, 'oui', 'en attand', 0, 0, 70);

--
-- Déclencheurs `projets`
--
DROP TRIGGER IF EXISTS `nombreprojetuser`;
DELIMITER $$
CREATE TRIGGER `nombreprojetuser` AFTER INSERT ON `projets` FOR EACH ROW UPDATE users SET nembre_projet_lancer=nembre_projet_lancer+1 WHERE id=NEW.user_id
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `questions`
--

DROP TABLE IF EXISTS `questions`;
CREATE TABLE `questions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Qustion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `reponde` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `accepte` enum('oui','non') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'non',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `questions`
--

INSERT INTO `questions` (`id`, `Qustion`, `user_id`, `reponde`, `accepte`, `created_at`, `updated_at`) VALUES
(78, 'jjjjjjj', 11, 'ddddddddd', 'oui', '2021-05-14 04:08:29', '2021-05-14 04:08:29'),
(79, 'jjdjkdkdkkqqmqmdkkkkeeddkkkqkd', 11, 'oussama2018', 'oui', '2021-05-15 05:16:59', '2021-05-15 05:16:59'),
(80, 'ndndndnndndnnd', 11, 'oussama2018', 'oui', '2021-05-17 11:17:09', '2021-05-17 11:17:09'),
(82, 'FFFFFFFFFFFFF', 11, 'dfs,cfvsd,', 'oui', '2021-05-30 09:05:46', '2021-05-30 09:05:46'),
(83, 'DDDDDDD', 11, 'dnajkbndjkzbnefdnzfnzern', 'oui', '2021-06-03 17:11:20', '2021-06-03 17:11:20'),
(84, 'gbb;bvvvvv', 11, 'fvfjdvcidlcodjc,dscvldfnvklfdnsklcv,vcsd,klncfrndvncfkdcvk', 'oui', '2021-06-04 19:47:45', '2021-06-04 19:47:45'),
(85, 'hello oussama', 11, 'dnajkbndjkzbnefdnzfnzern', 'oui', '2021-06-24 05:55:41', '2021-06-24 05:55:41'),

-- --------------------------------------------------------

--
-- Structure de la table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payload` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `nom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prenom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_naissance` date NOT NULL,
  `pays` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Ncompte` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Type` enum('user','Admin') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'images/user.png',
  `nembre_projet_invi` int(11) NOT NULL DEFAULT 0,
  `nembre_projet_lancer` int(11) NOT NULL DEFAULT 0,
  `prixTotal_dinvi` double(8,2) NOT NULL DEFAULT 0.00,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `ActiveCompte` enum('oui','non') COLLATE utf8mb4_unicode_ci DEFAULT 'non',
  `code_pass` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `nom`, `prenom`, `user_name`, `email`, `email_verified_at`, `password`, `date_naissance`, `pays`, `Ncompte`, `Type`, `photo`, `nembre_projet_invi`, `nembre_projet_lancer`, `prixTotal_dinvi`, `remember_token`, `created_at`, `updated_at`, `ActiveCompte`, `code_pass`) VALUES
(11, 'jamil', 'oussama', 'oussama jamil', 'oussamajamil01@gmail.com', NULL, '$2y$10$G6RR7k2faRIhnuupo8R0/.7eioYRQyF/PcxT0ibTylFjku6cYQSmC', '2021-05-28', 'American Samoa', NULL, 'Admin', 'assets/users/1624985627users.png', 0, 7, 0.00, NULL, '2021-05-13 17:52:40', '2021-05-13 17:52:40', 'oui', NULL),
(12, 'abdelmoughit', 'Ayoub', 'ayoub el moughit', 'ayoubabdelmoughit8@gmail.com', NULL, '$2y$10$//WJNIJKdmGBKv6admoMhuyjf9fq67P28hI0yvFkf/64U7afmXOfq', '1995-07-10', 'Morocco', NULL, 'user', 'images/user.png', 0, 0, 0.00, NULL, '2021-05-27 12:56:29', '2021-05-27 12:56:29', 'oui', '12274522'),
(13, 'oussama', 'jamil', 'OUSSAM', 'ojamil1999@gmail.com', NULL, '$2y$10$bGfMzuAS0cBljFYeSFjPWOsXOVl2W4uqufWzOxLxkGNYNA1v3ay0e', '2021-06-11', 'Åland Islands', NULL, 'user', 'images/user.png', 0, 0, 0.00, NULL, '2021-05-27 13:43:25', '2021-05-27 13:43:25', 'oui', NULL),
(14, 'fedwa', 'elchaaba', 'fedwa123', 'Fdw1997@outlook.fr', NULL, '$2y$10$f5e4..7S2Ypr5dm6c4iva.ZWmnYbffN58nLbqP0tMp56SmNQTSybq', '2021-06-04', 'Argentina', NULL, 'user', 'images/user.png', 0, 3, 0.00, NULL, '2021-05-27 13:57:55', '2021-05-27 13:57:55', 'oui', NULL),
(15, 'ayoub', 'aypub', 'aaaaa', 'ayoubabdelmoughit75@gmail.com', NULL, '$2y$10$3w71EsMCs0TguIhkpi.I9.gGcYySnEjgYHf8kRBy2a65re58wtOiC', '2021-06-11', 'Armenia', NULL, 'user', 'images/user.png', 0, 0, 0.00, NULL, '2021-05-27 13:59:50', '2021-05-27 13:59:50', 'oui', NULL),
(16, 'skaita', 'amine', 'amine skaita', 'mameknassi@gmail.com', NULL, '$2y$10$sDGwzc91qRPeRpWSzBaQG.dPAbwq7Ry18dWFAgagzVhGJmQKZHg52', '2021-05-09', 'El Salvador', NULL, 'user', 'images/user.png', 0, 0, 0.00, NULL, '2021-05-30 08:11:55', '2021-05-30 08:11:55', 'oui', NULL),
(17, 'garouache', 'mohcin', 'mohcin_Fr', 'mohcingarouache321@gmail.com', NULL, 'oussama2018', '1997-03-07', 'Mali', NULL, 'user', 'images/user.png', 0, 0, 0.00, NULL, '2021-06-04 14:20:00', '2021-06-04 14:20:00', 'oui', NULL),
(18, 'elezizi', 'abdessamad', 'elezizi_abdessamad', 'abdessamad.elezizi18@gmail.com', NULL, '$2y$10$ABPhO9xdpWWXOe4HB5txC.7.NrvZvptb8Fc2PEUk30IPLtWMUX8P6', '2001-12-18', 'Morocco', NULL, 'user', 'assets/users/1623263077users.png', 0, 0, 0.00, NULL, '2021-06-08 12:53:27', '2021-06-08 12:53:27', 'oui', NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `cadeauxes`
--
ALTER TABLE `cadeauxes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cadeauxes_projet_id_foreign` (`projet_id`);

--
-- Index pour la table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comments_user_id_foreign` (`user_id`),
  ADD KEY `comments_id_projet_foreign` (`id_projet`);

--
-- Index pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Index pour la table `investissements`
--
ALTER TABLE `investissements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `investissements_user_id_foreign` (`user_id`),
  ADD KEY `investissements_id_projet_foreign` (`id_projet`);

--
-- Index pour la table `like_projets`
--
ALTER TABLE `like_projets`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `like_projets_user_id_unique` (`user_id`),
  ADD UNIQUE KEY `like_projets_id_projet_unique` (`id_projet`);

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notifications_user_id_foreign` (`user_id`);

--
-- Index pour la table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Index pour la table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Index pour la table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Index pour la table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Index pour la table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Index pour la table `projets`
--
ALTER TABLE `projets`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `projets_nom_projet_unique` (`nom_projet`),
  ADD KEY `projets_user_id_foreign` (`user_id`);

--
-- Index pour la table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `questions_user_id_foreign` (`user_id`);

--
-- Index pour la table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_user_name_unique` (`user_name`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `cadeauxes`
--
ALTER TABLE `cadeauxes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT pour la table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `investissements`
--
ALTER TABLE `investissements`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `like_projets`
--
ALTER TABLE `like_projets`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT pour la table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `projets`
--
ALTER TABLE `projets`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;

--
-- AUTO_INCREMENT pour la table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `cadeauxes`
--
ALTER TABLE `cadeauxes`
  ADD CONSTRAINT `cadeauxes_projet_id_foreign` FOREIGN KEY (`projet_id`) REFERENCES `projets` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_id_projet_foreign` FOREIGN KEY (`id_projet`) REFERENCES `projets` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `investissements`
--
ALTER TABLE `investissements`
  ADD CONSTRAINT `investissements_id_projet_foreign` FOREIGN KEY (`id_projet`) REFERENCES `projets` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `investissements_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `like_projets`
--
ALTER TABLE `like_projets`
  ADD CONSTRAINT `like_projets_id_projet_foreign` FOREIGN KEY (`id_projet`) REFERENCES `projets` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `like_projets_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `projets`
--
ALTER TABLE `projets`
  ADD CONSTRAINT `projets_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `questions_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
