<?php 
    header('Access-Control-Allow-Origin: http://localhost:3000'); 
    $user = $_POST['name']; 
    $email = $_POST['email']; 
    $message = $_POST['message']; 
    $phone = $_POST['phone']; 
    $to = "charlottegreenaway112@gmail.com";
    $subject = "Website Enquiry";
    $headers = "From: poo@poo.com\r\n"; // Replace with the sender's email address
    $content = "$user,$phone,$email,$message";
    // Send the email
    if (mail($to, $subject, $content, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Email sending failed.";
    }
    //echo ("Hello from server: $user, $email, $message"); 
?> 