<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>phpサイト</title>
  </head>
  <body>

    <main>
      <section>
        <h1>本文記事</h1>
        <p>
          テキストテキストテキストテキスト
        </p>
        <p><a href="#">リンク</a></p>
      </section>
    </main>
    <p>ランダムにバナーリンクを表示</p>
    <!-- phpでバナー表示部分のファイルを差し込んで -->
    <!-- cssで位置を変える為に -->
    <!-- htmlでクラスを付ける。 -->
    <div class="banner">
      <?php
        include "banner.php";
      ?>
    </div>

  </body>
</html>