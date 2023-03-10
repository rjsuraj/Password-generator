function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function upperCase(){
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let index = getRndInteger(0,25);
    return upper[index];
}

function lowerCase(){
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    let index = getRndInteger(0,25);
    return lower[index];
}

function numbers(){
    let number = '0123456789';
    let index = getRndInteger(0,9);
    return number[index];
}

function symbols(){
    let symbol = '~!@#$%^&*()_+/';
    let index = getRndInteger(0,13);
    return symbol[index];
}



let no = 5;
let s1 = "";

s1 += upperCase();
s1 += lowerCase();
s1 += numbers();
s1 += symbols();

console.log(s1);