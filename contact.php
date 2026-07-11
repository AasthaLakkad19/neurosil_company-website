<?php
include "db.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $firstName = trim($_POST["first_name"] ?? "");
    $lastName  = trim($_POST["last_name"] ?? "");
    $email     = trim($_POST["email"] ?? "");
    $message   = trim($_POST["message"] ?? "");

    // Validation
    if (empty($firstName) || empty($lastName) || empty($email) || empty($message)) {
        echo "All fields are required.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address.";
        exit;
    }

    // Insert into database
    $stmt = $conn->prepare(
        "INSERT INTO contacts (first_name, last_name, email, message)
         VALUES (?, ?, ?, ?)"
    );

    $stmt->bind_param("ssss", $firstName, $lastName, $email, $message);

    if ($stmt->execute()) {

        // Email settings
        $to = "aasthalakkad19@gmail.com"; // 🔴 change this
        $subject = "New Contact Message";

        $body = "Name: $firstName $lastName\n";
        $body .= "Email: $email\n\n";
        $body .= "Message:\n$message";

        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";

        echo "success";

    } else {
        echo "Database error. Try again.";
    }

    $stmt->close();
    $conn->close();
}
?>
