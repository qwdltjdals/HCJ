function handleButtonClick(e) {
    console.log({event: e});
    e.target.innerHTML = "취소"
}

function handleInputChange(e) {
    if(e. ctrlKey && (e.keyCode === 13 || e.key === "Enter")) { // 13 = Enter의 keycode
        alert(e.target.value);
    }
}

let isFocus = false;

/* function handelIfFocus(e) {
    if(!isFocus) {
        isFocus = true;
        alert("입력하세요!");
    }
}
    */

function handelIfFocus(e) {
    if(!!e.target.value) {
        e.target.value = "";
    }
}

function handleInputBlur(e) {
    if(!e.target.value) {
        alert("값을 입력해주세요.");
    }
}