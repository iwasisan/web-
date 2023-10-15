<?php
$value_c = $_GET["name"];
?>

<?php
echo $value_c."さんですね。";
?>

  <h4>住所を教えて下さい。</h4>
  <form action="sub-a2.php" method="get">
    <input type="text" name="address">
    <input type="submit">
  </form>