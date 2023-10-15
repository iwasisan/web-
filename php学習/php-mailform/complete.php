<?php
  $result = "";
    if (isset($_POST['add'])) {
        $result = "送信完了しました。";

        $to = 'izayoitenma@yahoo.co.jp';

        $subject = 'テスト送信';

        $message = 'こんにちは。これはテスト送信です。';

        $headers = 'From: norubrantsword2@gmail.com' . "\r\n"; 

        if (mb_send_mail($to, $subject, $message,$headers)) {
          echo '送信成功！';
        } else {
          echo '送信失敗。<br>エラーログを確認してください。 (xampp\sendmail\error.log)';
        }
    }
?>


<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="description" content="メールフォームのスタートページです。"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
  </head>
<body>
<h1>
  <?php echo $result; ?>
</h1>
</body>
</html>
