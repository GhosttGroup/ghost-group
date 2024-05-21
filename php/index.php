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

    // Check if the request method is POST
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
        return;
    }

    // Get query parameters
    $fullName = $_GET['full_name'] ?? '';
    $emailAddress = $_GET['emailAddress'] ?? '';
    $services = $_GET['services'] ?? '';
    $phoneNumber = $_GET['phone_number'] ?? '';
    $companyName = $_GET['company_name'] ?? '';
    $additionalInfo = $_GET['message'] ?? '';

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
        $mail->addAddress($emailAddress, $fullName);

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

// Call the function to handle the request
handleRequest();
