<?php
  if(isset($_POST["username"]) == true){
    $yourname = htmlspecialchars($_POST["username"],ENT_QUOTES);
  }else{
    $yourname = "あれ、わかんない";
  }
?>

<html>
<body>

<?php
print $yourname . "さん，こんにちは<br>";
?>

</body>
</html>