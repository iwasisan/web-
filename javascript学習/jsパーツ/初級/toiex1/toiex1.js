// データ属性を活用できるようにしよう

const div = document.querySelector("div")

console.log(div.dataset.name)
// foo

div.dataset.age = "20"
// data属性の設定 htmlで該当のタグに追加される

div.dataset.name = "bar"
// data-name="foo"がdata-name="bar"に変更

const color = document.getElementsByClassName("item__name");

color[0]("data-color");