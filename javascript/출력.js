var num = 10;
var sNum = "10";
console.log(num === sNum);
var num2; // undifind로 선언(값을 배정하지 않음)
console.log(num2); // undifind 는 false로 봄
console.log(!!num2);
/*
    !(not) 연산자를 활용하여 문자, 숫자 등의 자료를 논리데이터로 변환하는 법
    var nunm = 10;
    !!num = true
    num = 0;
    !!num = false

    var str = "test";
    !!str = true
    str = "";
    !!str = false

    var array = [ 1, 2, 3 ];
    !!array = true

    array = [];
    !!array = true
    !!array.length = false
*/
var num = 0;
console.log(!!num);
var str = "";
console.log(!!str);
var array = [];
console.log(!!array.length);
var a;
console.log(!!a);
var b = null;
console.log(!!b); // null도 false
var c = 0 / 0; // 연산 오류 = NaN = false
console.log(c);
console.log(!!c);
var str1 = " ";
console.log(!!str1);

if(!num) {
    var num2 = 20;
    console.log("num은 0 입니다.")
    if(!!num2) {
        console.log("nun2는 값이 있습니다.")
    }
}

if(!str) {
    console.log("빈 문자열 입니다.")
}

if(!b) {
    console.log("null 입니다..")
}