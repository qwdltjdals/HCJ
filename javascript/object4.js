// 비구조 할당, 구조 분해
function main() {
    const user = {
        username: "admin",
        password: "1234",
        name: "김준일",
        email: "aaa@gmail.com"
    }

    const names = [ "박현주", "이성희", "권오광", "권혁진" ];

    const { username, password, email } = user;
    console.log(username);
    console.log(password);
    console.log(email);

    const [ a, b ] = names;
    console.log(a);
    console.log(b);

    const { name, ...rest } = user; // name 을 제외한 나머지 키값들을 가져와서 객체 생성
    console.log(rest);

    console.log(names.slice(1, 2)); // 1 에서부터 2번 index 전까지
}
main();