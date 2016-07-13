<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['send'])) {


    // Initial Form Data
    $name_contact       = $_POST['contact_name'];
    $email_contact      = $_POST['contact_email'];
    $subject_contact    = $_POST['contact_subject'];
    $message_contact    = $_POST['contact_message'];

    $subject            = "";
    $to_email           = "";
    $from_email         = "";
    $bcc_email          = "";
    $br                 = "\r\n";


    // Email Header
    $headers            = "MIME-Version: 1.1" . $br;
    $headers           .= "Content-type: text/html; charset=UTF-8" . $br;
    $headers           .= "From: " . $from_email . $br;
    $headers           .= "Bcc: " . $bcc_email . $br;
    $headers           .= "Reply-To: " . $email_contact . $br;


    // Email Body
    $messageHTML        = "<p><strong>Nome:</strong> $name_contact</p>";
    $messageHTML       .= "<p><strong>Email:</strong> $email_contact</p>";
    $messageHTML       .= "<p><strong>Assunto:</strong> $subject_contact</p>";
    $messageHTML       .= "<p><strong>Mensagem:</strong> $message_contact</p>";


    // Send Email
    mail($to_email, $subject, $messageHTML, $headers);
    // header('Location: success.php');

}
