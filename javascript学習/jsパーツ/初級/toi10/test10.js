// 問題10：クラスのつけ剥がしをしよう

// クリックしたら文字を赤色→黒色にスイッチしよう。・・この言葉とクラスのつけ剥がしが
// 当初繋がらなかったが、文字色のデフォルトは黒と気づき、意味が繋がった。

// クリックしたらクラスが付いたり、剝がれたりして、それが文字色のスイッチになるようなのを
// 描けばいいはず。

// https://qiita.com/praz1/items/01604c368ac002dbc8fe
// https://eclair.blog/javascript-classlist-methods/

  const elem = document.querySelector('p');
// <p>クリックしたら文字を赤色→黒色にスイッチしよう。</p>　というｐ要素

elem.classList.toggle("is-active");
// p要素にis-activeクラスがついて、cssが適用するようになった。その結果文字色が変わった。toggle　1回目

elem.classList.toggle("is-active");
// p要素のis-activeクラスが消えて、文字色がもとに戻った。　toggle　2回目

// toggleメソッド　クラスを切り替える（トグルする）（あれば削除、なければ追加する）

elem.addEventListener('click', function () {
  elem.classList.toggle("is-active");
})

// elemに対して、イベントリスナー（ここではクリック時に行う処理）を設定
// 処理内容　elemに対してクラスが「あれば削除、なければ追加する」　elemはその後のメソッドを掛ける対象として
// 中も外も記述されてると思う。

// 処理としてはelem:<p>クリックしたら文字を赤色→黒色にスイッチしよう。</p>をクリックするのがトリガーみたいになって//
// classList.toggleの処理を行う。トグルが1回目、2回目で文字色が変わっているのはクラスが付いたり外れたり
// 同じことがクリック毎に起こってるんではないか（クラスのつけ剥がし）