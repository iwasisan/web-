<?php

if ($_POST['message'] == '') {
  exit('error');
}

$message = $_POST['message'];
$now     = date('Y/m/d H:i');

$post_data = "$message ($now)\n";
$read_data = file_get_contents('message.txt');

file_put_contents('message.txt', $post_data . $read_data);

?>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" href="style.css">
<title>一言</title>
</head>
<body>
<h2>応援ありがとうございます!</h2>
  <p><img src="./../../../img/F5dzTtkaIAAO616.jpg"></p>
  <p>以下のメッセージが送信されました。</p>

  <?php
$fp = fopen('message.txt', 'r');
while ($line = fgets($fp)) {
  echo '<p>' . htmlspecialchars($line, ENT_QUOTES) . "</p>\n";
  break;
}
fclose($fp);
?>
<ul>
  <li><a href="index.php">一覧へ戻る</a></li>
</ul>
</body>
</html>