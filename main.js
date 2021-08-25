
//要素を取得
const display = document.getElementById("output");
const operaters = document.getElementById("operater");

let output = display.textContent

/* その他ボタン 押されたボタンに対応した数字が追加される
if:初めに０が押された時は、次のボタンが押されると0が消え次に押された数字が入る。
else if:初めに.が押された時は、0.が初めに着くようにする。
else:display.textContent = display.textContent + nums.textContent;*/
function set(nums) {
    if(display.textContent === "0"){
       display.textContent = nums.textContent;
    }else if(display.textContent === "."){
       display.textContent = display.textContent.replace(/./,"0.") + nums.textContent;
       // display.textContent = nums.textContent; →0.1を打ちたい時に打てなかった。
    }else{
       display.textContent += nums.textContent;
    } 
}

//演算子と”.”を2回押せないようにする。
function operater(nums) {
    if(display.textContent.slice(-1) === "+"){
       let f = display.textContent.slice(0,-1)
        display.textContent = f + nums.textContent;
    }else if(display.textContent.slice(-1) === '-'){
        let f = display.textContent.slice(0,-1)
        display.textContent = f + nums.textContent;
    }else if(display.textContent.slice(-1) === '*'){
        let f = display.textContent.slice(0,-1)
        display.textContent = f + nums.textContent;
    }else if(display.textContent.slice(-1) === '/'){
        let f = display.textContent.slice(0,-1)
        display.textContent = f + nums.textContent;
    }else if(display.textContent.slice(-1) === '.'){
        let f = display.textContent.slice(0,-1)
        display.textContent = f + nums.textContent;
    }else{
        display.textContent += nums.textContent;
    }
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
