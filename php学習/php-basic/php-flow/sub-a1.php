<?php
    $value = $_GET['toi1'];
    if ($value) {
        echo $value;
    }
?>

<?php
  if($value == "火災です"){ ?>
  <h4>向かう住所はどこですか</h4>
  <form action="sub-a2.php" method="get">
    <input type="text" name="address">
    <input type="submit">
  </form>

<?php } ?>


<?php
  if($value == "救急です"){ ?>
  <h4>どうしましたか</h4>
  <form action="sub-b2.php" method="get">
    <input type="radio" name="toi2" value="自分">自分が怪我をした。
    <br>
    <input type="radio" name="toi2" value="他の人">怪我人を発見した。
    <br>
    <input type="submit">
  </form>
<?php } ?>