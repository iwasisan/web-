<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
  </head>
<body>
  <ul>
		<li><a href="./sub1.php">サブページ</a></li>
		<li><a></a></li>
		<li><a></a></li>
	</ul>
</body>

<?php

$rec = $_SERVER["REQUEST_URI"];
$host = $_SERVER["HTTP_HOST"];

$read_data = file_get_contents('log.txt');

file_put_contents('log.txt',(empty($_SERVER['HTTPS']) ? 'http://' : 'https://') . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']
);

?>
</html>