<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
<body>
  <h3>フォームデータの送信POST</h3>

  <!-- フォームを扱う事の実験、catch.phpに「テスト」を送る -->
  <!-- pタグでは出来なかった。 -->
  <form action="catch.php" method="POST">
    <!-- <p name="test" value="">テスト</p> -->
    <input type="submit" value="送信する" />
  </form>

  <!-- 選んで表示にはならない。すでに表示されてるしエラーでてる。 -->
  <!-- <ul>
    <li><a href="./index.php?select=about">about</a></li>
    <li><img src="./img/stand_15.jpg?select=test"></li>
  </ul> -->

<!--うーん。  urlに書かれてなくても表示されてるし、データ扱ってどうこうって感じじゃない。  -->
<?php
  $test = $_GET["select"];
  if($test = "about"){
    include "catch.php";
  }
  if($test = "test"){
    echo "何のキャラでしょう";
  }
?> 


</body>
</html>

