const USERNAME = "admin";
const PASSWORD = "1234"

function login(username, password) {
    if(USERNAME === username && PASSWORD === password) {
        console.log("로그인 성공");
        return;
    }
    console.log("로그인 실패");
}

// 함수를 변수에 집어넣기
const login2 = login;

login2("admin", "1234");

const add2 = function add(x, y) {
    return(x + y);
}

console.log(add2(10, 20));

const sub2 = function (x, y) { // 함수명 지울 수 있음(익명 함수)
    return x - y;
}

console.log(sub2(20, 10));

// 화살표 함수(람다)
let div =  (x, y) => {
    return !x || !y ? 0 : x / y;
}
console.log(div(10, 2))

//화살표함수(명령이 한줄) = 리턴 생략 가능
div = (x, y) => !x || !y ? 0 : x / y;

console.log(div(10, 2))

//화살표 함수(매개변수가 하나면 괄호생략 가능)
const print = data => console.log(data);

print("출력!");

// 함수 안에서 함수 정의 가능
function main() {
    const test = () => { // 함수 안에서 함수를 정의하려면 화살표 함수 사용
        console.log("테스트 함수 호출");
    }

    test();
}

main();

// test() - main함수 안에서 정의되어서 밖에서 사용이 불가