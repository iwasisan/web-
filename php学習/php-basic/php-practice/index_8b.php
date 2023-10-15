<!-- ダブルアロー関数 -->
<?php
  $fluit_price = [
    "Apple" => 100,
    "Orenge" => 200,
    "Grape" => 300,
  ];

  echo $fluit_price["Apple"]."<br />";
?>

<!-- foreachで連想配列を扱う -->
<?php
  foreach($fluit_price as $name => $price){
    echo $name.":".$price."円<br />";
  }
?>
