<?php
// Konfigurasi Database
define('DB_HOST', 'localhost'); // Host database
define('DB_USER', 'u554336099_porto'); // Username database
define('DB_PASS', 'Porto056'); // Password database
define('DB_NAME', 'u554336099_porto'); // Nama database

// Fungsi untuk koneksi ke database
function connectDB() {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    // Check koneksi
    if ($conn->connect_error) {
        die("Koneksi database gagal: " . $conn->connect_error);
    }

    return $conn;
}
?>