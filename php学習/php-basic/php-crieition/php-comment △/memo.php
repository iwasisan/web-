<?php
  $value = $_GET["memo1"];
  $value2 = $_GET["memo2"];
?>


<?php
$section = $value."<br/>".$value2."<br/>";

  file_put_contents("sample.txt",$section,FILE_APPEND);
?>