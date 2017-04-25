<?php 
$host = 'https://apirest.3dcart.com';
$version = 1;
$service = 'Orders';
$secureUrl = 'https://71745179439.3dcart.net';   // Secure URL is set in Settings->General->StoreSettings
$privateKey = 'b74b58116c06b196c3b9f75d0f892f1e'; // Private key is obtained when registering your app at http://devportal.3dcart.com
   

$httpHeader = array(
		//'Content-Type: application/json;charset=UTF-8',
		//'Accept: application/json',
		'SecureUrl: ' . $secureUrl,
		'PrivateKey: ' . $privateKey,
		'Token: ' . $token,
);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,$URL);
curl_setopt($ch, CURLOPT_TIMEOUT, 30); //timeout after 30 seconds
curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
curl_setopt($ch, CURLOPT_USERPWD, "$username:$password");
$result=curl_exec ($ch);
$status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);   //get status code
curl_close ($ch);
$token = 'vimals shekhatd wdwdgwdgdgasdgajdgsadg '; 
?>