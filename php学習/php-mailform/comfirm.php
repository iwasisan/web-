<!-- 入力した値を変数に要れる -->
<?php
  $name_f = $_POST["name_first"];
  $name_s = $_POST["name_second"];

  $name_f_r = $_POST["name_first_rubi"];
  $name_s_r = $_POST["name_second_rubi"];

  $mail = $_POST["adress"];
  $mail_ch = $_POST["adress_check"];

  $tel = $_POST["phone"];

  $po = $_POST["郵便番号"];
  $po_a = $_POST["都道府県"];
  $po_b = $_POST["住所"];

  $area = $_POST["consultation_area"];

?>

<!-- 入力した値があれば変数に要れる -->

<?php
  if(isset( $_POST["reply"])){
    $rep = $_POST["reply"];
  }
?>

<?php
  if(isset( $_POST['consultation'])){
    $consul = $_POST['consultation'];
  }
?>

<?php
  if(isset( $_POST["privacy"])){
    $pri = $_POST["privacy"];
  }
?>

<!-- 入力した値を文字列にする。 -->

<?php
  if (isset($consul) && is_array($consul)) {
    $cons = implode("、", $consul);
  }
?>

<!--  -->


<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./style.css">
<title>入力内容の確認｜メール送信フォーム</title>
</head>
<body>
<form action="complete.php" method="post">
  <h2>入力内容の確認</h2>
  <div>
    <!-- 確認の為の表示用、送信用 -->
    <label class="title">
      〇お名前
    </label>
    <br>
      <?php
        if(empty($name_f)){
          echo "苗字が未入力です";
        }
      ?>
    <br>
      <?php
        if(empty($name_s)){
          echo "名前が未入力です";
        }
      ?>
    <p><?php echo $name_f ?></p>
    <p><?php echo $name_s ?></p>
    <input type="hidden" name="name_first" value="<?php echo $name_f ?>">
    <input type="hidden" name="name_second" value="<?php echo $name_s ?>">
  </div>

  <div>
    <!-- 確認の為の表示用、送信用 -->
    <label class="title">
      〇フリガナ
    </label>
    <p><?php echo $name_f_r ?></p>
    <p><?php echo $name_s_r ?></p>
    <input type="hidden" name="name_first_rubi" value="<?php echo $name_f_r ?>">
    <input type="hidden" name="name_second_rubi" value="<?php echo $name_s_r ?>">
  </div>

  <div>
    <label class="title">
      〇メールアドレス
    </label>
    <br>
      <?php
        if(empty($mail)){
          echo "メールアドレスが未入力です";
        }
      ?>
    <p><?php echo $mail ?></p>
    <input type="hidden" name="adress" value="<?php echo $mail ?>">
  </div>

  <div>
    <label class="title">
      〇確認用メールアドレス
    </label>
    <br>
      <?php
        if(empty($mail_ch)){
          echo "メールアドレスが未入力です";
        }
      ?>
    <p><?php echo $mail_ch ?></p>
    <input type="hidden" name="adress_check" value="<?php echo $mail_ch ?>">
  </div>

  <div>
    <label class="title">
      〇電話番号
    </label>
    <br>
      <?php
        if(empty($tel)){
          echo "電話番号が未入力です";
        }
      ?>
    <p><?php echo $tel ?></p>
    <input type="hidden" name="phone" value="<?php echo $tel ?>">
  </div>

  <div>
    <label class="title">
      〇住所
    </label>
    <p><?php echo $po ?></p>
    <p><?php echo $po_a ?></p>
    <p><?php echo $po_b ?></p>
    <input type="hidden" name="phone" value="<?php echo $po ?>">
    <input type="hidden" name="phone" value="<?php echo $po_a ?>">
    <input type="hidden" name="phone" value="<?php echo $po_b ?>">
  </div>

  <div>
    <label class="title">
      〇相談項目
    </label>
    <br>
      <?php
        if(empty($consul)){
          echo "1つ以上選択して下さい";

        }else{
          echo $cons;
        }
      ?>
    <input type="hidden" name="consultation[]" value="<?php echo $consul[0] ?>">
    <input type="hidden" name="consultation[]" value="<?php echo $consul[1] ?>">
    <input type="hidden" name="consultation[]" value="<?php echo $consul[2] ?>">
  </div>

  <div>
    <label class="title">
      〇相談項目の内容
    </label>
    <br>
      <?php
        if(empty($area)){
          echo "200文字以内で内容の記載をお願いします";
        }
      ?>
    <br>
    <textarea class="area" name="consultation_area"><?php echo $area ?></textarea>
  </div>

  <div>
    <label class="title">
      〇ご希望の返答方法
    </label>
    <br>
    <?php
      if(empty($rep)){
        echo "どれか1つ選択して下さい";

      }else{
        echo $rep;
      }
    ?>
  </div>

  <div>
    <label class="title">
      〇個人情報の取り扱いについて
    </label>
    <br>
      <?php
        if(empty($pri)){
          echo "承諾の場合はチェックお願いします";
        }
      ?>
    <br>
    <?php
      if(isset($pri)){?>
      <input type=checkbox name="privacy" value="consent" checked disabled="disabled">
      プライバシーポリシーに同意
    <?php } ?>
  </div>
  <input type="submit" value="送信" name="add">
</form>
</body>
</html>

