

// フォーム入力時ふりがなを自動入力
$(function () {
  // 姓
  $.fn.autoKana(
    'input[name="name_first"]',
    'input[name="name_first_rubi"]',
    {
      katakana: true,
    });
  // 名
    $.fn.autoKana(
      'input[name="name_second"]',
      'input[name="name_second_rubi"]',
      {
        katakana: true,
      }
    );
});

// 郵便番号入力した際に住所をフォームに自動入力
// htmlの部分に記載

// 電話番号の自動整形（全角で入力された時、自動で半角に変換）

const telInput = document.getElementById("tel");

telInput.addEventListener(
  "blur",
  () => {
    
    let telInputValue = telInput.value;

    
    telInputValue = telInputValue.replace(/[‐－―ー]/g, "-");

    
    const replacedValue = telInputValue.replace(/[０-９]/g, function (str) {
      return String.fromCharCode(str.charCodeAt(0) - 0xfee0);
    });

    
    telInput.value = replacedValue;
  },
  false
);

// フォームの検証（入力チェック・未入力チェック）

// 名前  姓　　name_first.value
let name_first = document.querySelector("#name_first");
// 　　　名 　　text_second.value
let text_second = document.querySelector(".text_second");

let name_count = document.querySelector(".name_count");

let name_count2 = document.querySelector(".name_count2");

let text = "最低2文字以上入力してください";

let text_kara = "";

// 2文字以上入力されているか

name_first.addEventListener("blur", function () {
  if (name_first.value.length == 0) {
    name_count.textContent = text_kara;

  } else if (name_first.value.length < 2) {
    name_count.textContent = text;
  }
})

text_second.addEventListener("blur", function () {
  if (text_second.value.length == 0) {
    name_count2.textContent = text_kara;

  } else if (text_second.value.length < 2) {
    name_count2.textContent = text;
  }
});


// 数字、ハイフンが含まれてないか

let text2 = "無効な値が含まれています";

name_first.addEventListener("blur", function () {
  if (name_first.value.match(/^[0-9\-\０-９]+$/)) {
    name_count.textContent = text2;
  }
});

text_second.addEventListener("blur", function () {
  if (text_second.value.match(/^[0-9\-\０-９]+$/)) {
    name_count2.textContent = text2;
  }
});

// 英字、特定の記号がはいっていないか

let text3 = "アルファベットが含まれています";

name_first.addEventListener("blur", function () {
  if (name_first.value.match(/^[a-zA-Z]+$/)) {
    name_count.textContent = text3;
  }
});


text_second.addEventListener("blur", function () {
  if (text_second.value.match(/^[a-zA-Z]+$/)) {
    name_count2.textContent = text3;
  }
});


// メールアドレスの形式をチェック

let address = document.querySelector("#adress");

let email_count = document.querySelector(".email_count");

let address_oktext = "OK";

let address_errortext = "形式が間違っています。";

// メールアドレスの正規表現のパターン
let pattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;

address.addEventListener("blur", function () {
  
  if (pattern.test(address.value)) {
    
    email_count.textContent = address_oktext;
  } else {
    
    email_count.textContent = address_errortext;
  }
})


// 確認用メールアドレス：メールアドレスと入力値が一致しているかチェック

let adress_check = document.querySelector("#adress_check");

let email_count2 = document.querySelector(".email_count2");

let ad_checkerror = "メールアドレスが一致していません";

adress_check.addEventListener("blur", function () {
  if (address.value !== adress_check.value) {
    email_count2.textContent = ad_checkerror;

  } else {
    email_count2.textContent = address_oktext;
  }
})

// 電話番号の形式チェック

let tel = document.querySelector("#tel");

let tel_count = document.querySelector(".tel_count");

let tel_cou_oktext = "OK";

let tel_cou_errortext = "無効な値です。";


tel.addEventListener("blur", function () {
  if (!(/\d{2,4}-?\d{2,4}-?\d{4}/).test(tel.value)) {
    tel_count.textContent = tel_cou_errortext;

  } else {
    tel_count.textContent = tel_cou_oktext;
  }
})


// 相談項目のチェック　1つ以上チェックしているか

const conboxes = $('[name="consultation[]"]');







