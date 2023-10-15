// 問題21：要素から属性を削除しよう
// [data-delete]をclickしたら
// その属性を削除しよう

// https://into-the-program.com/dataset/

const set = document.querySelectorAll("[data-delete]");
// data属性を指定して要素を取得
// NodeList(2) [div, div]

//  https://into-the-program.com/javascript-get-element-custom-data-value/
// https://web-engineer-wiki.com/javascript/data-get-elem-2/
// data属性で指定した要素を取得 idやクラスやタグとは違う要素の取得方法・・・ってことか？

const elem1 = document.querySelector('[data-delete="id"]');
// <div data-delete="id">idを削除</div>

const elem2 = document.querySelector('[data-delete="class"]');
//  <div data-delete="class">classを削除</div>

const elem3 = document.querySelector("[data-delete-target]");
// <div id="red" class="blue" data-delete-target>忍者CODE</div>

set[0];
// elem1と同じ

// https://zukucode.com/2017/12/javascript-query-data.html

elem2.addEventListener("click", function () {
  elem3.classList.remove("blue");
})
// classを削除をクリックしたら、忍者CODEのクラスのblueを指定して消す。

// 要素にclassを追加・削除する【classList】


elem1.addEventListener("click", function () {
  elem3.removeAttribute('id')
})
// idを削除をクリックしたら、忍者CODEのidを消す。removeAttributeでクラスを消すときはclassと入力するらしい。
// 選べないのかな・・

//  removeAttribute メソッドは、対象の要素に設定されている属性を削除
// https://www.javadrive.jp/javascript/dom/index18.html#section1
