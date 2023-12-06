<?php

namespace App\Service;

use DateTimeImmutable;

class JWTService{
    
    /**
     * 
     * Generate JWT for mails
     * @param array $header
     * @param array $payload
     * @param string $secret
     * @param int $validity
     * @return string
     */
    public function generateToken(array $header, array $payload, string $secret, int $validity = 10800) :string
    {

        if($validity > 0){
            $now = new DateTimeImmutable();
            $exp = $now->getTimestamp() + $validity;
            $payload['iat'] = $now->getTimestamp();
            $payload['exp'] = $exp;
        }

        //base64
        $base64Header = base64_encode(json_encode($header));
        $base64Payload = base64_encode(json_encode($payload));

        //clean the encoded values
        $base64Header = str_replace(['+', '/', '='], ['-', '_', ''], $base64Header);
        $base64Payload = str_replace(['+', '/', '='], ['-', '_', ''], $base64Payload);

        //create signature
        $secret = base64_encode($secret);
        $signature = hash_hmac('sha256', $base64Header . "." . $base64Payload, $secret, true);

        $base64Signature = base64_encode($signature);
        $base64Signature = str_replace(['+', '/', '='], ['-', '_', ''], $base64Signature);

        //create token
        $jwt = $base64Header . '.' . $base64Payload . '.' . $base64Signature;


        return $jwt;
    }

    //check if the token's format is correct
    public function isValid(string $token):bool
    {
        return preg_match(
            '/^[a-zA-Z0-9\-\_\=]+\.[a-zA-Z0-9\-\_\=]+\.[a-zA-Z0-9\-\_\=]+$/',
            $token
        ) ===1;
    }

    //We catch the payload to know if the token expired
    public function getPayload(string $token) : array
    {
        $array = explode('.', $token);

        $payload = json_decode(base64_decode($array[1]), true);
        return $payload;
    }

    //check if the token expired
    public function isExpired(string $token) : bool
    {
        $payload = $this->getPayload($token);
        $now = new DateTimeImmutable();

        return $payload['exp'] < $now->getTimestamp();
    }

    public function getHeader(string $token) : array
    {
        $array = explode('.', $token);

        $header = json_decode(base64_decode($array[0]), true);
        return $header;
    }

    //we check the token's signature
    public function checkSignature(string $token, string $secret)
    {
        //get header and payload
        $header = $this->getHeader($token);
        $payload = $this->getPayload($token);

        $verifToken = $this->generateToken($header, $payload, $secret, 0);

        return $token === $verifToken;
    }

}