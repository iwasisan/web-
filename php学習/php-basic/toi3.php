<!-- ・配列に値を格納して、呼び出してみる -->

<?php
$lunch = ["rice","caree","soba","tenpura"];
print_r($lunch);

echo "<br>";
echo $lunch[1];

echo "<br>";
$lunch[4] ="udon";
print_r($lunch);

echo "<br>";
echo $lunch[4];
?>