function creatUser(username, password, name, email) {
    return {
        "username": username,
        "password": password,
        "name": name,
        "email":email
    }
}

function creatUser2(username, password, name, email) {
    return {
        ["username"]: username,
        ["password"]: password,
        ["name"]: name,
        ["email"]: email
    }
}

function creatUser3(username, password, name, email) {
    return {
        "username": username,
        "password": password,
        "name": name,
        "email": email
    }
}

function creatUser4(username, password, name, email) {
    return {
        username,
        password,
        name,
        email
    }
}

function main() {
    const userneme = "admin";
    const password = "1234";
    const name = "김준일";
    const email = "aaaa@gmail.com";

    let user = creatUser(userneme, password, name, email)
    let user2 = creatUser2(userneme, password, name, email)
    let user3 = creatUser3(userneme, password, name, email)
    let user4 = creatUser4(userneme, password, name, email)

    console.log(user);
    console.log(user2);
    console.log(user3);
    console.log(user4);
}

main();