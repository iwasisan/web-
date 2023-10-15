<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>画像リサイズ</title>
</head>
<body>
<form action="catch.php" method="post" enctype="multipart/form-data">
    <input type="file" name="upload_image">
    <label>横幅</label>
    <input type="text" name="Xlength" required placeholder="100以上">
    <label>縦幅</label>
    <input type="text" name="Ylength" required placeholder="100以上">
    <input type="submit" value="送信">
</form>
<!--選んだ画像を好きなサイズで出力したい。送るデータ、画像、サイズ指定の為の数字  -->

</body>
</html>