<!-- ・フォームを利用してデータを送信し、
別のページ（同じページでもOK）に送信したデータを表示してみる。 -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
<body>
  <h3>フォームデータの送信POST</h3>

  <form action="toi5_a.php" method="GET">
    <label>スクエニと言えば？</label>
    <br>
    <input type="text" name="message2">
    <input type="submit" value="送信">
  </form>

  <?php
  echo $_GET["message2"].'です。';
  ?>
</body>
</html>