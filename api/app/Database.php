<?php

namespace App;
use \PDO;

/**
 * 
 */
class Database
{
	private $host = 'localhost';
	private $dbname = 'planing_taches';
	private $username = 'user';
	private $password = 'password'; 
	public $conn;


	public function connect() { 

		$conn = null;

		try { 

		$conn = new PDO('mysql:host=localhost;dbname=site_lac', 'user', 'password');

		} catch(PDOException $e) {
			echo " Connection error: ".$e->getMessage();
		} 
		return $conn;
	}

}