function modifyUser(user, target, value) {
    const newUser = {
        ...user, // = 스프레드 : user에 있는 객체들을 전부 카피
        [target]: value // 타겟을 벨류로 덮어쓰기
    };
    return newUser;
}

function main() {
    let user = {
        username: "admin",
        password: "1234"
    }

     delete user.password;


    console.log(user);

    const newUser = modifyUser(user, "username", "test-user");
    console.log(newUser);

    const newUser2 = modifyUser(newUser, "password", "1111");
    console.log(newUser2);

        // 스프레드 -> 깊은 복사
    const userList = [ user, newUser ];     // 100번 주소
    const newUserList = [ ...userList, newUser2 ];    // 200번 주소

    const userList2 = userList; // 얕은 복사

    const [a, b, c ] = newUserList;

    const { username, password} = newUserList[0];
}

main();