<!-- 複数の画像をダウンロード -->

<?php
  $img_url = array(
    "https://www.famitsu.com/images/000/317/994/y_650d0cea6566a.webp",
    "https://www.famitsu.com/images/000/317/994/y_650d230fed95d.webp",
    "https://fundo.jp/wp-content/uploads/2023/09/kaerukawaii1_R.jpg",
    "https://isekaiojisan.com/core_sys/images/main/cont/char/ojisanStand1.png",
    "https://getnews.jp/img/archives/2023/09/nexoderg_rev1.jpg",
  );

  foreach($img_url as $value){
    $filename = basename($value);

    $data = file_get_contents($value);
    file_put_contents("./download/".$filename,$data);
  };
?>


<!-- urlの最後の画像部分がjpg,pngそのままでダウンロードできる。 -->
<!-- 以下のようなurlだとエラーになる。 -->
<!-- https://isekaiojisan.com/core_sys/images/contents/00000045/block/00000093/00000128.jpg?1678686936 -->