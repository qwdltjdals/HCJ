console.log(a);

var a = 10; // 선언은 먼저 되지만, 대입연산은 호이스팅이 되지 않음

console.log(a);


var b = 10;
console.log(b);

var b = 20;
console.log(b);

// console.log(c); // 호이스팅 불가
let c = 30;
console.log(c);
// let c = 50; = 재선언 불가
c = "40"; // 재할당은 가능
console.log(c);

const d = 50; // const = 상수
console.log(d);
// d = 60 // 재할당 불가