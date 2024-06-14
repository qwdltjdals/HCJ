function add(x, y) {
    return x + y;
}

const result = add(10, 20);
console.log(result);

function add(x, y, z) {
    console.log(x);
    console.log(y);
    console.log(z);
}

add(40, 50, 60);

/*
    funstion 을 실행했는데 밑에서 재정의가 되어버림 = 자바스크립트는 오버로딩이 없다
*/