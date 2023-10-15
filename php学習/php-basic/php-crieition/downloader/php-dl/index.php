<?php
  $image_path = "https://beasttamer.jp/assets/top/t2/vis.webp?v2";

  $file_name = "title.jpg";

  $image = file_get_contents($image_path);

  file_put_contents("./download/".$file_name,$image);
?>
<!-- 画像をダウンロード、一つだけ、file nameも被るので上書きされる。 -->