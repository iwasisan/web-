<!-- アロー関数その他の例 -->

<?php

$price_list = [100, 110, 1200, 2500, 16000, 30000];

$price_list_tax_1 = array_map(fn($price) => $price * 1.1,$price_list);

for($i = 0;$i<count($price_list);$i++){
  echo $price_list[$i]."円（税込".$price_list_tax_1[$i]."円）<br />";
}
?>

<?php
  $arr = [1,2,3];
  foreach($arr as $key => $value){
    echo $key."-".$value."<br>";
  }
?>