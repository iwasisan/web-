<!-- PHPでfor foreach -->

<?php
  $nums = [1,2,3];
  foreach($nums as $num){
    echo $num;
    echo "<br>";
  }
?>

<br>

<?php
$names = ["isida","koume","hosoki"];
for($i = 0;$i < count($names);$i++){
  echo $names[$i];
  echo "<br>";
}
?>

