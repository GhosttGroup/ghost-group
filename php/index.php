<?php
// Include PHPMailer files
require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Function to handle the request
function handleRequest() {
    // Add CORS headers
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

    // Handle preflight requests
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit();
    }

    // Check if the request method is POST and the URI is /upload_and_send
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_SERVER['REQUEST_URI'] === '/upload_and_send') {
        handlePostRequest();
    } elseif ($_SERVER['REQUEST_METHOD'] === 'GET' && $_SERVER['REQUEST_URI'] === '/users') {
        handleGetUsersRequest();
    } else {
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
    }
}

// Function to handle POST requests
function handlePostRequest() {
    // Get POST parameters
    $fullName = $_POST['full_name'] ?? '';
    $emailAddress = $_POST['emailAddress'] ?? '';
    $services = $_POST['services'] ?? '';
    $phoneNumber = $_POST['phone_number'] ?? '';
    $companyName = $_POST['company_name'] ?? '';
    $additionalInfo = $_POST['message'] ?? '';

    // Initialize variables for file handling
    $cvFile = null;
    $uploadFilePath = null;

    // Check if file is uploaded
    if (isset($_FILES['cvFile']) && $_FILES['cvFile']['error'] == UPLOAD_ERR_OK) {
        $cvFile = $_FILES['cvFile'];

        // Save the uploaded file
        $uploadDir = 'uploads/';
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }

        $uploadFilePath = $uploadDir . basename($cvFile['name']);
        if (!move_uploaded_file($cvFile['tmp_name'], $uploadFilePath)) {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to save file']);
            return;
        }
    }

    // Save email data to MySQL database
    $servername = "mysql";
    $username = "root";
    $password = "root";
    $dbname = "emails_db";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        http_response_code(500);
        echo json_encode(['error' => 'Database connection failed: ' . $conn->connect_error]);
        return;
    }

    // Ensure the emails table exists
    $createTableQuery = "
        CREATE TABLE IF NOT EXISTS emails (
            id INT AUTO_INCREMENT PRIMARY KEY,
            full_name VARCHAR(255) NOT NULL,
            email_address VARCHAR(255) NOT NULL,
            services VARCHAR(255) NOT NULL,
            phone_number VARCHAR(20),
            company_name VARCHAR(255),
            additional_info TEXT
        )
    ";
    if (!$conn->query($createTableQuery)) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to create emails table: ' . $conn->error]);
        return;
    }

    $stmt = $conn->prepare("INSERT INTO emails (full_name, email_address, services, phone_number, company_name, additional_info) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $fullName, $emailAddress, $services, $phoneNumber, $companyName, $additionalInfo);

    if (!$stmt->execute()) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to save email data: ' . $stmt->error]);
        return;
    }

    $stmt->close();
    $conn->close();

    // Send email
    $mail = new PHPMailer(true);
    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Set the SMTP server to send through
        $mail->SMTPAuth = true;
        $mail->Username = 'maxikpetlitskii@gmail.com'; // SMTP username
        $mail->Password = 'tunq pngj ffbn koxn'; // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Recipients
        $mail->setFrom('cool.murz@gmail.com', 'Mailer');
        $mail->addAddress('cool.murz@gmail.com', 'Ghost Group'); // Always send to this email

        // Attachments
        if ($uploadFilePath) {
            $mail->addAttachment($uploadFilePath);
        }

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Service Request';
        $mail->Body    = "Full Name: $fullName<br>Email: $emailAddress<br>Services: $services<br>Phone Number: $phoneNumber<br>Company Name: $companyName<br>Additional Info: $additionalInfo";

        $mail->send();
        echo json_encode(['success' => 'Email has been sent']);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
    }
}

// Function to handle GET /users requests
function handleGetUsersRequest() {
    // Database credentials
    $servername = "mysql";
    $username = "root";
    $password = "root";
    $dbname = "emails_db";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        http_response_code(500);
        echo json_encode(['error' => 'Database connection failed: ' . $conn->connect_error]);
        return;
    }

    $result = $conn->query("SELECT * FROM emails");

    if ($result->num_rows > 0) {
        $emails = [];
        while($row = $result->fetch_assoc()) {
            $emails[] = $row;
        }
        echo json_encode($emails);
    } else {
        echo json_encode([]);
    }

    $conn->close();
}

// Call the function to handle the request
handleRequest();
