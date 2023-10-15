<?php
  ob_start();
?>

<?php
  $data = $_POST["moji"]
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>テスト</h1>
    <p><?php echo $data ?></p>
  </body>

  <?php
    include "footer.php";
    ?>

</html>


<?php
file_put_contents("test.html",ob_get_contents());

ob_end_clean();
?>