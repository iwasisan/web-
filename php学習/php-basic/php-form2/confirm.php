<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <?php
      mb_language("Japanese");
      mb_internal_encoding("UTF-8");
      $to = $_POST['to'];
      $title = $_POST['title'];
      $content = $_POST['content'];
      $header = "From: info@example.com";
      if(mb_send_mail($to, $title, $content, $header)){
        echo "メールを送信しました";
      } else {
        echo "メールの送信に失敗しました";
      };
    ?>
  </body>
</html>

<!-- /http://blog.pionet.co.jp/experience/archives/472
【PHP】 melonを使ったローカル環境でのメール送信テスト -->

<!--　上記を参考にphp.iniを変えると[送信出来た] ただ、受信が確認出来ない。 -->