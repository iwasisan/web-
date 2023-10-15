<!--配列に格納した要素をループして呼び出してみる  -->

<?php

$uma = ["スペシャルウィーク","ミホノブルボン","グラスワンダー"];

foreach($uma as $name){
  echo $name;
  echo "<br>";
}
?>

<!--・ループにおいて、Forとwheel(多分while)の双方を試してみる  -->

<!-- for文 -->
<?php

$fruits = ["apple","orange","melon","banana","pineapple"];

for($i = 0;$i < count($fruits);$i++){
  echo $fruits[$i];
  echo "<br>";
}

?>

<!-- while文 -->
<?php

$nike =["アリス","ノワール","バイパー","モダニア","紅蓮"];

$count = 0;
while($count < count($nike)):
  echo $nike[$count];
  echo "<br>";
  $count++;
endwhile;

?>
