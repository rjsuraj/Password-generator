const passwordLengthInput = document.getElementById("passwordLength");
const displayPasswordLength = document.getElementById("display-password-length");
const displayPassword = document.querySelector(".display-password");
const checkBox = document.querySelectorAll("input[type=checkbox]");
const generatePasswordBtn = document.querySelector(".generate-btn");





// A function that generates a random integer between a minimum and maximum value (inclusive)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// functions to generate a random character of each type
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

function shufflePassword(password) {
    
    array = [...password];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join("");
}


// Event listener for the input element that changes the password length
passwordLengthInput.addEventListener("input", (event) => {
    displayPasswordLength.innerHTML = event.target.value;

    // Update the background size of the input element based on the password length
    passwordLengthInput.style.backgroundSize = (event.target.value / 20) * 100 + '%';
})

for (let box of checkBox) {

    box.addEventListener("change", () => {
        let no = parseInt(passwordLengthInput.value);
        let checkedBoxes = 0;

        // loop through each checkbox and count the number of checked checkboxes
        for (let box of checkBox) {
            if (box.checked)
                checkedBoxes++;
        }

        if (no <= checkedBoxes) {
            no = checkedBoxes;
            displayPasswordLength.innerHTML = checkedBoxes;
            passwordLengthInput.value = checkedBoxes;
            // Update the background size of the input element based on the password length
            passwordLengthInput.style.backgroundSize = (checkedBoxes / 20) * 100 + '%';
        }
    })
}


// event listener to generate a password when the user clicks the button
generatePasswordBtn.addEventListener('click', () => {

    let count = 1;
    let password = "";
    let no = parseInt(passwordLengthInput.value);
    let checkedBoxes = 0;

    // loop through each checkbox and count the number of checked checkboxes
    for (let box of checkBox) {
        if (box.checked)
            checkedBoxes++;
    }

    if (checkedBoxes == 0)
        return;

    if (no <= checkedBoxes) {
        no = checkedBoxes;
        displayPasswordLength.innerHTML = checkedBoxes;
        passwordLengthInput.value = checkedBoxes;
        // Update the background size of the input element based on the password length
        passwordLengthInput.style.backgroundSize = (checkedBoxes / 20) * 100 + '%';
    }

    // loop through each checkbox again and add a character of the corresponding type to the password if the checkbox is checked
    checkBox.forEach((value,index) => {
        if (value.checked && index == 0) {
            password += upperCase();
        }
        else if (value.checked && index == 1) {
            password += lowerCase();
        }
        else if (value.checked && index == 2) {
            password += numbers();
        }
        else if (value.checked && index == 3) {
            password += symbols();
        }
    })



    // function to generate the remaining characters for the password
    const generatingPassword = (values) => {
        if (count == checkedBoxes) {
            let maxCharsToAdd = no - password.length;
            while (maxCharsToAdd--) {
                password += values();
            }
        }
        else {
            let maxCharsToAdd = no - password.length;
            maxCharsToAdd = getRndInteger(1, maxCharsToAdd);



            while (maxCharsToAdd--) {
                password += values();
            }
        }
        count++;
    }


    // generate remaining characters for each checked checkbox type
    //when uppercase is checked
    if (checkBox[0].checked && password.length != no) {
        generatingPassword(upperCase)
    }

    //when lowercase is checked
    if (checkBox[1].checked && password.length != no) {
        generatingPassword(lowerCase)
    }

    //when numbers is checked
    if (checkBox[2].checked && password.length != no) {
        generatingPassword(numbers)
    }

    //when symbols is checked
    if (checkBox[3].checked && password.length != no) {
        generatingPassword(symbols)
    }

    //shuffling password
    password = shufflePassword(password);

    // display passoword on ui and some changes in design also
    displayPassword.innerHTML = `${password}`;
    displayPassword.style.opacity = '1';
    displayPassword.style.userSelect = 'initial';
    console.log("password generated", password);


})


