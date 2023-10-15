<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>phpサイト</title>
  </head>
  <body>
<!-- ・ヘッダー、フッターなどの共通パーツを切り出して呼び出してみる -->

  <?php
  include "header.php";
  ?>

    <main>
      <section>
        <h1>本文記事</h1>
        <p>
          テキストテキストテキストテキスト
        </p>
        <p><a href="#">リンク</a></p>
      </section>
    </main>

    <?php
    include "footer.php";
    ?>

  </body>
</html>