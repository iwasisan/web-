
<?php
  // 空の配列を用意
  $bunner = array();

  // 配列にバナー（画像）を代入
  $bunner[0] =  '<a href="#"><img src="./img/1.png"></a>';
  $bunner[1] =  '<a href="#"><img src="./img/2.png"></a>';
  $bunner[2] =  '<a href="#"><img src="./img/3.png"></a>';

  // 配列0～2番目がランダムに代入される。
  $ran = rand(0,2);

  echo $bunner[$ran];
?>