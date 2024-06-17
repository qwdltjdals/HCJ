// inputMode = 1 > 추가
// inputMode = 2 > 수정

let inputMode = 1;

let userList = [];
loadUserList();

let emptyUser = {
    id: 0,
    name: "",
    username: "",
    password: ""
};

let user = {
    ...emptyUser
}

function randerTable() {
    const userTableBody = document.querySelector(".user-table-body");
    userTableBody.innerHTML = userList.map(({ id, name, username, password }, index) => {
        return `
            <tr>
            <th><input type="checkbox" onchange="handleUserCheck(event)"></th>
            <td>${index + 1}</td>
            <td>${id}</td>
            <td>${name}</td>
            <td>${username}</td>
            <td>${password}</td>
            <th><button onclick="deleteUser(event)" value="${id}">삭제</button></th>
            </tr>
        `;
    }).join("");
}

function handleUserInputKeyDown(e) {
    user = { // 매번 유저의 주소가 달라진다(입력될 때마다)
        ...user,
        [e.target.name]: e.target.value
    }

    console.log(user);

    if (e.keyCode === 13) { // 13 = 엔터키
        const usernameInput = document.querySelector(".username-input");
        const nameInput = document.querySelector(".name-input");
        const passwordInput = document.querySelector(".password-input");


        if (e.target.name === "username") {

            nameInput.focus();
        }
        if (e.target.name === "name") {

            passwordInput.focus();
        }
        if (e.target.name === "password") {
            userList = [...userList, { ...user, id: getNewId() } ]; // 기존의 유저리스트 정보의 맨 뒤에 새로운 유저를 추가한다.
            saveUserList()
            randerTable();

            usernameInput.value = emptyUser.username;
            nameInput.value = emptyUser.name;
            passwordInput.value = emptyUser.password;

            usernameInput.focus();
        }
    }
}

function saveUserList() {
    localStorage.setItem("userList", JSON.stringify(userList));
}

function loadUserList() {
    const lsuserList = localStorage.getItem("userList");
    userList = !lsuserList ? [] : JSON.parse(lsuserList);   
    randerTable()

}

function deleteUser(e) {
    userList = userList.filter(({id}) => id !== parseInt(e.target.value)); // !==는 문자열 비교는 불가능 = int로 바꿈 parseInt
    saveUserList();
    randerTable();
}

function getNewId() {
    const userIds = userList.map(user => user.id);
    const maxUserId = userIds.length === 0 ? 20240000 : Math.max.apply(null, userIds); // 가장 큰 값 가져오기
    return maxUserId + 1; // 거기서 1추가
}

function handleUserCheck(e) {
    /* 체크 버튼에 클릭을 하면 체크박스 리스트를 가져온다?
        const checkBoxList = document.quarySelectAll('input[type="checkbox"]');
        for(let = 0; i < checkBoxList.length; i++)
        if(e.target === )

        일단 전체를 다 체크 해제를 시킨 후, 조건문 if 를 통해서 현재 타겟을 체크
    */
}