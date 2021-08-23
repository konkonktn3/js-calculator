
//要素を取得
const display = document.getElementById("output");

let output = display.textContent

/* その他ボタン 押されたボタンに対応した数字が追加される
display.textContent = display.textContent + nums.textContent; */
function set(nums) {
    display.textContent += nums.textContent;
}

/* ＝ボタン 数式が計算される
 元々は f = function(){ return display.textContent;}; result = f()だったものが
 関数の中身を文字列にし、計算式を分離、変数fを省略、セミコロン省略をコンパイルされ下記の式になる。
 returnの後ろの空白はreturnに続く文字列がくっついてreturnじゃ無くなってしまわないように必要。*/
function calc() {
    display.textContent = new Function("return " + display.textContent)();
}

/* ACボタン リセットされる
 空の文字列を入れて値をクリアする。*/
function reset() {
    display.textContent = "";
}

