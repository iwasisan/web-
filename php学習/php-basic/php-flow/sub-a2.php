<?php
  $value = $_GET["address"];
?>

<?php
  if($value){ ?>
<h3>向かいます。</h3>


<?php }else{ ?>
<h3>近くに目印などになるような建物はないですか</h3>
<form action="sub-a3.php" method="get">
    <input type="text" name="cheakpoint">
    <input type="submit">
</form>

<?php } ?>

