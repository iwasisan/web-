//ヘッダーアニメーション

let navi_contents = document.querySelector(".navi-contents");

let main_title1 = document.querySelector(".main-title");


window.addEventListener("scroll", function () {

  let scroll_y = window.scrollY;
  let main_titletop1 = main_title1.getBoundingClientRect().top;

  if (main_titletop1 - scroll_y < 0) {

    navi_contents.classList.remove("UpMove");
    navi_contents.classList.add("DownMove");

  } else if (main_titletop1 - scroll_y > 50) {

    navi_contents.classList.remove("UpMove");
    navi_contents.classList.add("DownMove");
    
  } else {
    navi_contents.classList.remove("DownMove");
    navi_contents.classList.add("UpMove");
  }
})



// スライダーアニメーション
// AIQデジタルマーケティングソリューション取引の近く

const slide = document.querySelector(".slider");

slide.classList.add("marquee-inner");

// ボタンの色の濃さアニメーション
// 製品の詳細カタログ無料でダウンロード

const btn1 = document.querySelector(".title-btn");

btn1.animate(
  [
    { opacity: 1 },
    { opacity: 0.5 },
    { opacity: 1 }
  ],
  {
    duration: 1700,
    iterations: Infinity
  }
);

// ふわっと表示されるアニメーション(サイト読み込み時)
// トップページ　6か月で有料利用企業数～

const titleleft = document.querySelector(".title-left");

const titleright = document.querySelector(".title-right");

window.addEventListener("DOMContentLoaded", function () {
  titleleft.animate([{ opacity: "0" }, { opacity: "1" }], 1200);
})

titleright.classList.toggle("opci");



window.addEventListener("DOMContentLoaded", function () {

  titleright.animate(
    [
      { opacity: "0" }, { opacity: "1" }
    ],
    {
      duration: 900,
      delay:700
    }
  );
});

setTimeout(function () {
  titleright.classList.toggle("opci");
}, 1100);

// ふわっと表示されるアニメーション(サイトスクロール時)

// AIQデジタルマーケティングソリューション取引

const slidetitle = document.querySelector("#slide-title");


window.addEventListener("scroll", function () {
  const slidetitletop = slidetitle.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (slidetitletop - windowheight <= 0) {
    slidetitle.classList.add("animated2")
  }
})

// 一般的なInstagram分析ツールと違い

const toolanime1 = document.querySelector(".toolanime1");

window.addEventListener("scroll", function () {
  const toolanime1top = toolanime1.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (toolanime1top - windowheight <= 0) {
    toolanime1.classList.add("animated2");
  }
});

// Moribus Naviができること

const toolanime2 = document.querySelector(".toolanime2");

window.addEventListener("scroll", function () {
  const toolanime2top = toolanime2.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (toolanime2top - windowheight <= 0) {
    toolanime2.classList.add("animated2");
  }
});

// 3つの軸で見える化　タイトル部分

const poi1_ani1 = document.querySelector(".poi1_ani1");

const poi1_ani2 = document.querySelector(".poi1_ani2");


window.addEventListener("scroll", function () {
  const poi1_ani1top = poi1_ani1.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (poi1_ani1top - windowheight <= 0) {
    poi1_ani1.classList.add("animated1");
  }
});


window.addEventListener("scroll", function () {
  const poi1_ani2top = poi1_ani2.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (poi1_ani2top - windowheight <= 0) {
    poi1_ani2.classList.add("animated3");
    poi1_ani2.classList.add("isActive");
  }
});

// 3つの軸で見える化　写真部分

const exp_1 = document.querySelector(".exp-1");

const exp_2 = document.querySelector(".exp-2");

const exp_3 = document.querySelector(".exp-3");

window.addEventListener("scroll", function () {
  const exp_1top = exp_1.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (exp_1top - windowheight <= 0) {
    exp_1.classList.add("animated4");
  }
});

exp_2.classList.toggle("opci");

window.addEventListener("scroll", function () {
  const exp_2top = exp_2.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (exp_2top - windowheight <= 0) {

    setTimeout(function () {
      exp_2.classList.add("animated4");
      exp_2.classList.toggle("opci");
    }, 700);
  }
});


exp_3.classList.toggle("opci");


window.addEventListener("scroll", function () {
  const exp_3top = exp_3.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (exp_3top - windowheight <= 0) {
    setTimeout(function () {
      exp_3.classList.add("animated4");
      exp_3.classList.toggle("opci");
    }, 1000);
  }
});


// AIが上位表示されやすい タイトル部分

const poi2_ani1 = document.querySelector(".poi2_ani1");

const poi2_ani2 = document.querySelector(".poi2_ani2");


window.addEventListener("scroll", function () {
  const poi2_ani1top = poi2_ani1.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (poi2_ani1top - windowheight <= 0) {
    poi2_ani1.classList.add("animated1");
  }
});

window.addEventListener("scroll", function () {
  const poi2_ani2top = poi2_ani2.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (poi2_ani2top - windowheight <= 0) {
    poi2_ani2.classList.add("animated3");
    poi2_ani2.classList.add("isActive");
  }
});


// AIが上位表示されやすい 画像部分

const feat_1 = document.querySelector(".feat-1");

const feat_2 = document.querySelector(".feat-2");

const feat_3 = document.querySelector(".feat-3");


window.addEventListener("scroll", function () {
  const feat_1top = feat_1.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (feat_1top - windowheight <= 0) {
    feat_1.classList.add("animated4");
  }
});


feat_2.classList.toggle("opci");

window.addEventListener("scroll", function () {
  const feat_2top = feat_2.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (feat_2top - windowheight <= 0) {
    setTimeout(function () {
      feat_2.classList.add("animated4");
      feat_2.classList.toggle("opci");
    }, 700);
  }
});


feat_3.classList.toggle("opci");

window.addEventListener("scroll", function () {
  const feat_3top = feat_3.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (feat_3top - windowheight <= 0) {
    setTimeout(function () {
      feat_3.classList.add("animated4");
      feat_3.classList.toggle("opci");
    }, 1000);
  }
});


// さらに！見える化 部分

const feat2_1 = document.querySelector(".feat2_1");

const feat2_2 = document.querySelector(".feat2_2");

const triangle3 = document.querySelector(".triangle3");




window.addEventListener("scroll", function () {
  const feat2_1top = feat2_1.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (feat2_1top - windowheight <= 0) {
    feat2_1.classList.add("animated2");
  }
});


feat2_2.classList.toggle("opci");

window.addEventListener("scroll", function () {
  const feat2_1top = feat2_1.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (feat2_1top - windowheight <= 0) {
    setTimeout(function () {
      feat2_2.classList.add("animated2");
      feat2_2.classList.toggle("opci");
    }, 300);
  }
});


triangle3.classList.toggle("opci");


window.addEventListener("scroll", function () {
  const feat2_1top = feat2_1.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (feat2_1top - windowheight <= 0) {
    setTimeout(function () {
      triangle3.classList.add("animated5");
      triangle3.classList.toggle("opci");
    }, 600);
  }
});


// 参考にできる、業界 タイトル部分


const sup1_ani1 = document.querySelector(".sup1_ani1");

const sup1_ani2 = document.querySelector(".sup1_ani2");



window.addEventListener("scroll", function () {
  const sup1_ani1top = sup1_ani1.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (sup1_ani1top - windowheight <= 0) {
    sup1_ani1.classList.add("animated1");
  }
});


window.addEventListener("scroll", function () {
  const sup1_ani2top = sup1_ani2.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (sup1_ani2top - windowheight <= 0) {
    sup1_ani2.classList.add("animated3");
    sup1_ani2.classList.add("isActive");
  }
});


// 参考にできる、業界 画像部分

const sup_1 = document.querySelector(".sup-1");

const sup_2 = document.querySelector(".sup-2");

const sup_3 = document.querySelector(".sup-3");


window.addEventListener("scroll", function () {
  const sup_1top = sup_1.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (sup_1top - windowheight <= 0) {
    sup_1.classList.add("animated4");
  }
});


sup_2.classList.toggle("opci");

window.addEventListener("scroll", function () {
  const sup_2top = sup_2.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (sup_2top - windowheight <= 0) {
    setTimeout(function () {
      sup_2.classList.add("animated4");
      sup_2.classList.toggle("opci");
    }, 700);
  }
});


sup_3.classList.toggle("opci");

window.addEventListener("scroll", function () {
  const sup_3top = sup_3.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (sup_3top - windowheight <= 0) {
    setTimeout(function () {
      sup_3.classList.add("animated4");
      sup_3.classList.toggle("opci");
    }, 1000);
  }
});


// リッチなサマリー タイトル部分


const sup2_ani1 = document.querySelector(".sup2_ani1");

const sup2_ani2 = document.querySelector(".sup2_ani2");


window.addEventListener("scroll", function () {
  const sup2_ani1top = sup2_ani1.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (sup2_ani1top - windowheight <= 0) {
    sup2_ani1.classList.add("animated1");
  }
});


window.addEventListener("scroll", function () {
  const sup2_ani2top = sup2_ani2.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (sup2_ani2top - windowheight <= 0) {
    sup2_ani2.classList.add("animated3");
    sup2_ani2.classList.add("isActive");
  }
});


// リッチなサマリー 画像部分

const sup_li2_1 = document.querySelector(".sup_li2_1");

const sup_li2_2 = document.querySelector(".sup_li2_2");


window.addEventListener("scroll", function () {
  const sup_li2_1top = sup_li2_1.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (sup_li2_1top - windowheight <= 0) {
    sup_li2_1.classList.add("animated2");
  }
});


window.addEventListener("scroll", function () {
  const sup_li2_2top = sup_li2_2.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (sup_li2_2top - windowheight <= 0) {
    sup_li2_2.classList.add("animated3");
  }
});


// 社内で運用していくため タイトル部分


const sup3_ani1 = document.querySelector(".sup3_ani1");

const sup3_ani2 = document.querySelector(".sup3_ani2");


window.addEventListener("scroll", function () {
  const sup3_ani1top = sup3_ani1.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (sup3_ani1top - windowheight <= 0) {
    sup3_ani1.classList.add("animated1");
  }
});


window.addEventListener("scroll", function () {
  const sup3_ani2top = sup3_ani2.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (sup3_ani2top - windowheight <= 0) {
    sup3_ani2.classList.add("animated3");
    sup3_ani2.classList.add("isActive");
  }
});


// 社内で運用していくため 画像部分

const sup_li3_1 = document.querySelector(".sup_li3_1");

const sup_li3_2 = document.querySelector(".sup_li3_2");


window.addEventListener("scroll", function () {
  const sup_li3_1top = sup_li3_1.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (sup_li3_1top - windowheight <= 0) {
    sup_li3_1.classList.add("animated1");
  }
});


window.addEventListener("scroll", function () {
  const sup_li3_2top = sup_li3_2.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (sup_li3_2top - windowheight <= 0) {
    sup_li3_2.classList.add("animated3");
  }
});


// 効果を最大化させるための工夫 部分

const que_li1_1 = document.querySelector(".que_li1_1");

const que_li1_2 = document.querySelector(".que_li1_2");


window.addEventListener("scroll", function () {
  const que_li1_1top = que_li1_1.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (que_li1_1top - windowheight <= 0) {
    que_li1_1.classList.add("animated1");
  }
});


window.addEventListener("scroll", function () {
  const que_li1_2top = que_li1_2.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (que_li1_2top - windowheight <= 0) {
    que_li1_2.classList.add("animated3");
  }
});


// “なんとなく”の運用では成果 部分

const que_li2_1 = document.querySelector(".que_li2_1");

const que_li2_2 = document.querySelector(".que_li2_2");

const que_li2_3 = document.querySelector(".que_li2_3");


window.addEventListener("scroll", function () {
  const que_li2_1top = que_li2_1.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (que_li2_1top - windowheight <= 0) {
    que_li2_1.classList.add("animated6");
  }
});


window.addEventListener("scroll", function () {
  const que_li2_2top = que_li2_2.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (que_li2_2top - windowheight <= 0) {
    que_li2_2.classList.add("animated6");
  }
});


window.addEventListener("scroll", function () {
  const que_li2_3top = que_li2_3.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (que_li2_3top - windowheight <= 0) {
    que_li2_3.classList.add("animated6");
  }
});


// お任せください！ 部分

const ans_ani1 = document.querySelector(".ans_ani1");

const ans_ani2 = document.querySelector(".ans_ani2");

const ans_ani3 = document.querySelector(".ans_ani3");


window.addEventListener("scroll", function () {
  const ans_ani1top = ans_ani1.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (ans_ani1top - windowheight <= 0) {
    ans_ani1.classList.add("animated7");
  }
});


window.addEventListener("scroll", function () {
  const ans_ani2top = ans_ani2.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (ans_ani2top - windowheight <= 0) {
    ans_ani2.classList.add("animated6");
  }
});


window.addEventListener("scroll", function () {
  const ans_ani3top = ans_ani3.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (ans_ani3top - windowheight <= 0) {
    ans_ani3.classList.add("animated7");
  }
});

// Moribus Naviを支える 部分

const patent_1 = document.querySelector(".patent-1");

const patent_2 = document.querySelector(".patent-2");


window.addEventListener("scroll", function () {
  const patent_1top = patent_1.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (patent_1top - windowheight <= 0) {
    patent_1.classList.add("animated1");
  }
});


window.addEventListener("scroll", function () {
  const patent_2top = patent_2.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (patent_2top - windowheight <= 0) {
    patent_2.classList.add("animated3");
  }
});


// ハンバーガーメニュー

window.onload = function () {
  let nav = document.getElementById("nav-wrapper");
  let hamburger = document.getElementById("js-hamburger");
  let blackBg = document.getElementById("js-black-bg");

  hamburger.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
  blackBg.addEventListener("click", function () {
    nav.classList.remove("open");
  });
};


/*ハンバーガーメニューを押したら背景色を透明に */

let rogo = document.querySelector(".rogo");

let hamburger = document.querySelector(".hamburger");


hamburger.addEventListener("click", function () {
  rogo.classList.toggle("open");
});

hamburger.addEventListener("click", function () {
  navi_contents.classList.toggle("open");
});


/*830px~555pxの間、スクロール,したら適用する。　*/


window.addEventListener("scroll", function () {
  main_title1.classList.add("que");
})