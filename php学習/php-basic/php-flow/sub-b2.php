<?php
$value_b = $_GET["toi2"];
?>

<?php
  if($value_b == "自分"){ ?>
  <h4>出来るだけ安静にして下さい。名前は言えますか。</h4>
  <form action="sub-b3.php" method="get">
    <input type="text" name="name">
    <input type="submit">
  </form>
<?php } ?>


<?php
  if($value_b == "他の人"){ ?>
  <h4>無理に動かないで下さい。場所はどこですか。</h4>
  <form action="sub-a2.php" method="get">
    <input type="text" name="address">
    <input type="submit">
  </form>
<?php } ?>