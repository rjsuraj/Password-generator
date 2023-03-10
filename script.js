let input = document.getElementById("passwordLength");
let displayPasswordLength = document.getElementById("display-password-length");
let checkBox = document.querySelectorAll("input[type=checkbox]");
let generatePassword = document.querySelector(".generate-btn");

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function upperCase() {
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let index = getRndInteger(0, 25);
    return upper[index];
}

function lowerCase() {
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    let index = getRndInteger(0, 25);
    return lower[index];
}

function numbers() {
    let number = '0123456789';
    let index = getRndInteger(0, 9);
    return number[index];
}

function symbols() {
    let symbol = '~!@#$%^&*()_+/[]';
    let index = getRndInteger(0, 13);
    return symbol[index];
}

// changing the password length
input.addEventListener("input", (event) => {
    displayPasswordLength.innerHTML = event.target.value;
    input.style.backgroundSize = (event.target.value / 20) * 100 + '%';
})

// generating password
generatePassword.addEventListener('click',()=>{

    let count = 1;
    let password = "";
    // let no = parseInt(input.value);
    let checkedBoxes = 0;
    for(let box of checkBox){
        if(box.checked)
            checkedBoxes++;
    }

    checkBox.forEach((value,index)=>{
        if(value.checked && index == 0){
            password += upperCase();
        }
        else if(value.checked && index == 1){
            password += lowerCase();
        }
        else if(value.checked && index == 2){
            password += numbers();
        }
        else if(value.checked && index == 3){
            password += symbols();
        }
    })

    // for uppercase means when uppercase is checked
    if(checkBox[0].checked){
        let no = parseInt(input.value);
        if(count == checkedBoxes){
            no = no - password.length;
            let temp = no
            while(temp--){
                password += upperCase();
            }
        }
        else{
            no = no - password.length;
            let temp = getRndInteger(1,no);
            while(temp--){
                password += upperCase();
            }
        }

        count++;
    }

    // for lowercase means when uppercase is checked
    if(checkBox[1].checked){
        let no = parseInt(input.value);
        if(count == checkedBoxes){
            no = no - password.length;
            let temp = no
            while(temp--){
                password += lowerCase();
            }
        }
        else{
            no = no - password.length;
            let temp = getRndInteger(1,no);
            while(temp--){
                password += lowerCase();
            }
        }
        count++;
    }
    console.log("password generated",password);
    console.log(count,checkedBoxes)
})