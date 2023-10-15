<!-- selectにaboutが入る -->
<?php
$value = $_GET["select"];
$img = array(
  "./img/4NRQ0TcsLu04QxtJb7ccD7VM7s.jpg",
  "./img/6y0OLRQyD7KpYjdVoM8wuhE1NE.jpg",
  "./img/9e70c12a.jpg"
);
?>
<!-- このadに入ってるのは恐らく画像ではなく画像のパス、これだけだと
表示できなかった getしたものがaboutなら配列0番目のパスを代入-->
<?php
  if($value == "about"){
    $i = 0;
    $ad = $img[$i];
  }
?>
<!-- uploderのコードを一部参考、imgタグのパスの部分に$adをいれて
表示したい画像への道をつくる -->
<img src="<?php echo $ad;?>" alt="">


<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
  </head>
<body>
  <h2>アバウトページです。</h2>
  
</body>
</html>