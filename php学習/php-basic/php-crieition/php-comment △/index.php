<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
  </head>
<body>
  <p>メモファイルを作る</p>
  <form action="memo.php" method="get">
    <input type="text" name="memo1" size="50" value="" />タイトル
    <br />
  <br />
  <textarea name="memo2" cols="40" rows="20"></textarea>内容
  <br />
  <input type="submit" value="記録する" />
  </form>
</body>
</html>