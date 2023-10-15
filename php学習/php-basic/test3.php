<!-- ・条件分岐において、IFとswitchの両方を利用してみる。 -->
<!-- if文 -->
<?php
  $num = 6;
  if($num > 5){
    echo "5より大きい";
  }else{
    echo "5より小さい";
  }
?>

<br>
<!-- swich文 -->
<?php
  $name = "wada";
  switch($name){
    case "wada":
      echo "和田さんですね";
      break;
    case "suzuki":
      echo "鈴木さんですね";
      break;
    case "isida":
      echo "石田さんですね";
  }
?>