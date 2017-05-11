xcczxvxvvxvzxXzx<?php
$host = 'https://apirest.3dcart.com';

$service = 'Orders';
$secureUrl = 'https://71745179439.3dcart.net';   // Secure URL is set in Settings->General->StoreSettings
$privateKey = 'b74b58116c06b196c3b9f75d0f892f1e'; // Private key is obtained when registering your app at http://devportal.3dcart.com
$token = '2914474efe0e6f2905f75a64dd93f342';      // The token is generated when a customer authorizes your app
// initialize cURL session

echo $host . '/3dCartWebAPI/v' . $version . '/' . $service;

$ch = curl_init($host . '/3dCartWebAPI/v' . $version . '/' . $service);
// set headers
$httpHeader = array(
		'Content-Type: application/json;charset=UTF-8',
		'Accept: application/json',
		'SecureUrl: ' . $secureUrl,
		'PrivateKey: ' . $privateKey,
		'Token: ' . $token,
);
curl_setopt($ch, CURLOPT_HTTPHEADER, $httpHeader);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// [ ... addtional cURL options as needed ... ]
$response = curl_exec($ch);
if ($response === false) {
	$response = curl_error($ch);


$f = fopen('output.csv', 'w');
if ($f != false){

	foreach ($jsonToarray as $row) {
		$result = [];
		array_walk_recursive($row, function($item) use (&$result) {
        $result[] = $item;
    });
    fputcsv($f, $result);
}

    fclose($f);
	$str="The entire Pro Git book, written by vimal shekhat j, is available here. All content is licensed under  Amazon.com.";
}






?>