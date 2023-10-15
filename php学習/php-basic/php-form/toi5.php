<!-- ・フォームを利用してデータを送信し、別のページ（同じページでもOK）
に送信したデータを表示してみる。 -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
<body>
  <h3>フォームデータの送信POST</h3>

  <form action="index.php" method="POST">
    <label>任天堂と言えば？</label>
    <br>
    <input type="text" name="message">
    <input type="submit" value="送信">
  </form>

</body>
</html>