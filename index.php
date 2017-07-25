<?php
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

echo '<response>';
$text=$_GET['text'];
//$text=$_GET['texto'];
// When you have your own client ID and secret, put them down here:
$CLIENT_ID = "igor.bragaia@gmail.com";
$CLIENT_SECRET = "4ec872c8ef234ce5850a57e9a534a743";
// Specify your translation requirements here:
$postData = array(
  'fromLang' => "pt",
  'toLang' => "en",
  'text' => $text
);
$headers = array(
  'Content-Type: application/json',
  'X-WM-CLIENT-ID: '.$CLIENT_ID,
  'X-WM-CLIENT-SECRET: '.$CLIENT_SECRET
);
$url = 'http://api.whatsmate.net/v1/translation/translate';
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postData));
$response = curl_exec($ch);


echo $response;
curl_close($ch);
echo '</response>';
?>
