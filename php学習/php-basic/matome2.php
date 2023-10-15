<?php
  $name = $_POST["myname"];
  $Q1 = $_POST["Qus1"];
  $Q2 = $_POST["Qus2"];
  $Q3 = $_POST["Qus3"];
?>

<?php echo $name ?>さん。
<br>
<?php
  $answer1 = $Q1 ;
  switch($answer1){
    case "Option A":
      $count1 = 1;
      break;

    case "Option B":
      $count1 = 2;
      break;

    case "Option C":
      $count1 = 3;
      break;
  }
?>

<?php
  $answer2 = $Q2 ;
  switch($answer2){
    case "Option A2":
      $count2 = 1;
      break;

    case "Option B2":
      $count2 = 2;
      break;

    case "Option C2":
      $count2 = 3;
      break;
  }
?>

<?php
  $answer3 = $Q3 ;
  switch($answer3){
    case "Option A3":
      $count3 = 1;
      break;

    case "Option B3":
      $count3 = 2;
      break;

    case "Option C3":
      $count3 = 3;
      break;
  }
?>

<?php
  function mas_count($count1,$count2,$count3){
    $mastcount = $count1 + $count2 + $count3;
    if($mastcount >= 3 && $mastcount <= 5){
      $masans1 = "あなたは戦士タイプでしょう";
      return $masans1;

    }else if($mastcount >= 6 && $mastcount <= 7){
      $masans2 = "あなたは魔法使いタイプでしょう";
      return $masans2;

    }else if($mastcount >= 8 && $mastcount <= 9){
      $masans3 = "あなたは商人タイプでしょう";
      return $masans3;
    }
    
}
echo mas_count($count1,$count2,$count3);
?>

