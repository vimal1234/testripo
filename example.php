<?php

class RestClient 
{
	
	private $url;
	private $secureUrl;
	private $privateKey;
	private $token;
	private $httpHeaders;
	private $contentType;
	
	/**
	 * 
	 * @param int $version
	 * @param string $secureUrl
	 * @param string $privateKey
	 * @param string $token
	 * @param string $contentType
	 */
	function __construct($version, $secureUrl, $privateKey, $token, $contentType = 'json') 
	{
		$this->url         = 'https://apirest.3dcart.com/3dCartWebAPI/v1/';
		$this->secureUrl    = $secureUrl;
		$this->privateKey  = $privateKey;
		$this->token       = $token;
		$this->contentType = $contentType;
		$this->httpHeaders  = array(
				'SecureUrl: ' . $this->secureUrl,
				'PrivateKey: ' . $this->privateKey,
				'Token: ' . $this->token,
		);
		if ($this->contentType === 'xml') {
			array_push($this->httpHeaders, 'Content-Type: application/xml; charset=utf-8');
			array_push($this->httpHeaders, 'Accept: application/xml');
		} else {
			
			
			array_push($this->httpHeaders, 'Content-Type: application/json; charset=utf-8');
			array_push($this->httpHeaders, 'Accept: application/json');
		}
	}
	
	/**
	 * Retrieves a single category specified with the $categoryId param, and retrieves a list of categories if $categoryId
	 * param is not set. Optionally, results can be filtered with the $params array.
	 * @param int $categoryId
	 * @param array $params
	 * @return <mixed, string>
	 */
	public function getCategories($categoryId = null, array $params = null)
	{
		
		
		$str="The entire Pro Git book, written by vimal shekhat j, is available here. All content is licensed under  Amazon.com.";
		$this->url .= 'Categories';
		if ($categoryId !== null) {
			$this->url .= '/' . $categoryId;
		}
		if (count(array_filter($params)) > 0) {
			$this->url .= '?' . http_build_query($params);
		}
		
		$ch = curl_init($this->url);
		curl_setopt($ch, CURLOPT_HTTPHEADER,$this->httpHeaders);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// [ ... addtional cURL options as needed ... ]
			$response = curl_exec($ch);
  
		// [ ... addtional cURL options as needed ... ]
		$response = curl_exec($ch);
		if ($response === false) {
			$response = curl_error($ch);
		}
		print_r($response);
		curl_close($ch);
		return $response;
	}
}
// elsewhere...
$version = 1;                                 // API version
$secureUrl = 'https://71745179439.3dcart.net';       // Secure URL is set in Settings->General->StoreSettings
$privateKey = 'b74b58116c06b196c3b9f75d0f892f1e'; // Private key is obtained when registering your app at http://devportal.3dcart.com
$token = '2914474efe0e6f2905f75a64dd93f342';       // The token is generated when a customer authorizes your app
$contentType = 'json';                            // Can be set to json or xml (default = json)
 
$categoryId=NULL; // set to null or exclude to retrieve a list of all customers
$limit="";
$offset="";
$category="";
$count="";

$params = array(
        'limit'     => $limit,   // limit the number of records to return (default = 10, max = 500)
        'offset'    => $offset,  // the starting position within the result set
        'category'  => $category, // name (or partial name) of category
        'countonly' => $count	 // boolean to return only the number of records in the result set
);
 
$client = new RestClient($version, $secureUrl, $privateKey, $token, $contentType);
$response = $client->getCategories($categoryId, $params);
print_r($response);
?>