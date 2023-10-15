
<link rel="stylesheet" href="style.css">

<!-- 縦幅、横幅、画像データを受け取る -->

<!-- 数字データ -->
<?php
$Xvalue = $_POST["Xlength"];
$Yvalue = $_POST["Ylength"];
?>

<!-- 画像データ -->
<!-- ファイル名を変数にいれる。 -->
<!-- アップロード後のファイル名には images_afterを付ける。-->
<?php
  $filename = $_FILES["upload_image"]["name"];
  $uploaded_path ="images_after".$filename;
?>

<!-- アップロードしたファイルをローカルに移している。？ -->
<?php
$result = move_uploaded_file($_FILES['upload_image']['tmp_name'],$uploaded_path);
?>
<!-- ローカルに移してたら・・・という条件があると$img_pathが使えそう。 -->
<?php
if($result){
  $img_path = $uploaded_path;
}
?>

<!-- 画像を表示、横幅、縦幅は入力したもの -->
<!-- 表示出来たけど、画像が伸びる。 -->
<!--index.phpに読み込ませてcssを適用しようとしたが出来ず、このファイル自体にcssを適用すると出来た。  -->
<img class="img" src="<?php echo $img_path;?>" alt="" width="<?php echo $Xvalue; ?>"
height="<?php echo $Yvalue; ?>">


