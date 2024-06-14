const names = [ "김준일", "김준이", "김준삼" ];
console.log(names.join(""));


let userList = [];
let emptyUser = {
    username: "",
    password: ""
};

let user = {
    ...emptyUser
}

function randerTable() {
    const userTableBody = document.querySelector(".user-table-body");
    userTableBody.innerHTML = userList.map(({username,password}, index) =>  {
        return `
            <tr>
            <td>${index + 1}</td>
            <td>${username}</td>
            <td>${password}</td>
            </tr>
        `;
    }).join("");
}

function handleUserInputKeyDown(e) {
    user = {
        ...user,
        [e.target.name]: e.target.value
    }

    console.log(user);

    if(e.keyCode === 13) {
        const usernameInput = document.querySelector(".username-input");
        const passwordInput = document.querySelector(".password-input");
        
        if(e.target.name === "username") {
            
            passwordInput.focus();
        }
        if(e.target.name === "password") {
            userList = [ ...userList, { ...user } ];

            randerTable();

            usernameInput.value = emptyUser.username;
            passwordInput.value = emptyUser.password;

            usernameInput.focus();
        }
    }
}