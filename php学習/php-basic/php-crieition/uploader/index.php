<?php
  if(!empty($_FILES)){
    $filename = $_FILES["upload_image"]["name"];

    $uploader_path = "images_after".$filename;
    $result = move_uploaded_file($_FILES["upload_image"]["tmp_name"],$uploader_path);

    if($result){
      $MSG ="アップロード成功！ファイル名:".$filename;
      $img_path = $uploader_path;
    }else{
      $MSG = "アップロード失敗！エラーコード:".$_FILES["upload_image"]["error"];
    }

  }else{
    $MSG = "画像を選択して下さい。";
  }
  
?>


<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>$_FILESの基本</title>
</head>
<body>
  <main>
  <section class="form-container">

  <p><?php if(!empty($MSG))echo $MSG; ?></p>

  <?php if(!empty($img_path)){; ?>
    <img src="<?php echo $img_path;?>" alt="">  

  <?php
  } 
  ?>

  <form action="" method="post" enctype="multipart/form-data">
    <input type="file" name="upload_image">
    <input type="submit" class="btn_submit" value="送信">
  </form>

  </section>
  <section class="img-area">
    <?php
    if(!empty($img_path)){ ?>
      <img src="echo <?php $img_path; ?>" alt="">
    <?php
    }
    ?>
  </section>
  </main>
</body>
</html>