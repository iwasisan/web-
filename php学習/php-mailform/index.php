<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="description" content="メールフォームのスタートページです。"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
  </head>
<body>
<form action="comfirm.php" method="post">
  <h2>お問い合わせメールフォーム</h2>
  <!-- 名前 -->
  <nav>
    <label class="title">
      お名前&nbsp;<span>必須</span>
    </label>
    <div>
      <input type="text" placeholder="山田" name="name_first" id="name_first">&nbsp;姓
      <span class="name_count"></span>
      <br>
      <input class="text_second" type="text" placeholder="太郎" name="name_second">&nbsp;名
      <span class="name_count2"></span>
    </div>
  </nav>
  <!-- フリガナ -->
  <nav>
    <label class="title">
      フリガナ
    </label>
    <div>
    <input type="text" placeholder="ヤマダ" name="name_first_rubi">&nbsp;セイ
    <input type="text" placeholder="タロウ" name="name_second_rubi">&nbsp;メイ
    </div>
  </nav>
  <!-- メールアドレス -->
  <nav>
    <label class="title">
      メールアドレス&nbsp;<span>必須</span>
    </label>
    <div class="email">
    <input type="email" placeholder="メールアドレスを入力してください" name="adress" id="adress">
    <span class="email_count"></span>
    </div>
  </nav>
  <!-- 確認用メールアドレス -->
  <nav>
    <label class="title">
      確認用メールアドレス&nbsp;<span>必須</span>
    </label>
    <div class="email">
    <input type="email" placeholder="もう一度メールアドレスを入力してください" name="adress_check" id="adress_check">
    <span class="email_count2"></span>
    </div>
  </nav>
    <!-- 電話番号 -->
  <nav>
    <label class="title">
      電話番号&nbsp;<span>必須</span>
    </label>
    <div class="tel">
    <input type=tel id=tel name="phone" placeholder="電話番号を入力してください"
    pattern="\d{2,4}-?\d{2,4}-?\d{3,4}">
    <span class="tel_count"></span>
    </div>
  </nav>
  <!--ご住所 -->
  <nav>
    <label class="title">
      住所
    </label>
    <div class="post_value">
      <p>郵便番号</p>
      <input type=text name="郵便番号" placeholder="郵便番号を入力してください"
      pattern="\d{3}-?\d{4}" onKeyUp="AjaxZip3.zip2addr(this,'','都道府県','住所');">
      <p>都道府県</p>
      <input type=text name="都道府県" placeholder="都道府県を入力してください">
      <p>市区町村以下</p>
      <input type=text name="住所" placeholder="市区町村を入力してください">
    </div>
  </nav>
  <!-- 相談項目 -->
  <nav>
    <label class="title">
      相談項目&nbsp;<span>必須</span>
    </label>
    <div class="consul">
    <input type=checkbox name="consultation[]" value="お見積り">お見積りについて
    <input type=checkbox name="consultation[]" value="ご依頼">ご依頼について
    <input type=checkbox name="consultation[]" value="その他">その他
    </div>
    <span class="consul_count"></span>
  </nav>
  <!-- 相談項目の内容 -->
  <nav>
    <label class="title">
      相談項目の内容&nbsp;<span>必須</span>
    </label>
    <br>
    <textarea class="area" name="consultation_area"></textarea>
  </nav>
  <!-- ご希望の返答方法 -->
  <nav>
    <label class="title">
      ご希望の返答方法&nbsp;<span>必須</span>
    </label>
    <div class="reply">
      <input type="radio" name="reply" value="電話">電話
      <input type="radio" name="reply" value="メール">メール
      <input type="radio" name="reply" value="どちらでもいい">どちらでもいい
    </div>
  </nav>
  <!-- 個人情報の取り扱いについて -->
  <nav>
    <label class="title">
      個人情報の取り扱いについて&nbsp;<span>必須</span>
    </label>
    <div class="privacy">
      <input type=checkbox name="privacy" value="consent">プライバシーポリシーに同意
    </div>
  </nav>
  <input class="subm" type="submit" value="送信">
</form>
<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<script type="text/javascript" src="./js/jquery.autoKana.js"></script>
<script src="https://ajaxzip3.github.io/ajaxzip3.js" charset="UTF-8"></script>
<script src="js/form.js"></script>
</body>
</html>
