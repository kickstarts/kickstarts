<?php

/**
 * Newsletter using Mailchimp Integration.
 */
add_action('wp_ajax_send_email', 'theme_newsletter');
add_action('wp_ajax_nopriv_send_email', 'theme_newsletter');
function theme_newsletter() {

    $name  = trim($_POST['nome']);
    $email = trim($_POST['email']);

    $parts      = explode(" ", $name);
    $first_name  = array_shift($parts);
    $last_name   = implode(" ", $parts);

    $submit_url = "https://us10.api.mailchimp.com/2.0/?method=";

    $data = array(
        'apikey'            => MAILCHIMP_API_KEY,
        'id'                => MAILCHIMP_LIST_ID,
        'email_address'     => $email,
        'double_optin'      => false,
        'send_welcome'      => true,
        'email_type'        => 'html',
        'merge_vars'        => array('FNAME'=>$first_name, 'LNAME'=>$last_name)
    );

    $payload = json_encode($data);

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $submit_url + MAILCHIMP_METHOD);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, urlencode($payload));
    $result = curl_exec($ch);
    curl_close ($ch);

    $data = json_decode($result);

    if ($data->error) {
        $msg = $data->error;
    } else {
        $msg = "Seu cadastro foi efetivado com sucesso!";
    }

    echo $msg;

    exit();
}
