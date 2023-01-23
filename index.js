const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let symbols = true
let numbers = true
let passwordLength = document.getElementById("length-value")
let add = document.getElementById("length-plus")
let minus = document.getElementById("length-minus")
let firstPass = document.getElementById("first-password")
let secondPass = document.getElementById("second-password")
let symbolsBtn = document.getElementById("symbols-btn")
let numbersBtn = document.getElementById("numbers-btn")

function addOne() {
    if (parseInt(passwordLength.textContent) < 20) {
        passwordLength.textContent = parseInt(passwordLength.textContent) + 1
    }
}

function minusOne() {
    if (parseInt(passwordLength.textContent) > 10) {
        passwordLength.textContent = parseInt(passwordLength.textContent) - 1
    }
}

function symbolFlip() {
    symbols = !symbols
    if (symbols === true) {
        symbolsBtn.textContent = "Symbols ✔️"
        symbolsBtn.className = "btn true"
    } else {
        symbolsBtn.textContent = "Symbols 🚫"
        symbolsBtn.className = "btn false"
    }
}

function numbersFlip() {
    numbers = !numbers
    if (numbers === true) {
        numbersBtn.textContent = "Numbers ✔️"
        numbersBtn.className = "btn true"
    } else {
        numbersBtn.textContent = "Numbers 🚫"
        numbersBtn.className = "btn false"
    }
}

function generatePassword() {
    firstPass.value = ""
    secondPass.value = ""
    
    for(let i = 0; i < passwordLength.textContent; i++) {   
        firstPass.value += characters[getRandom()]
        secondPass.value += characters[getRandom()]
    }
    
}

function getRandom() {
    let value = 0
    if (!symbols && !numbers) {
        while (value === 0 || value > 52)
        value = getValue()
    } else if (!symbols) {
        while (value === 0 || value > 61)
        value = getValue();
    } else if (!numbers){
        while (value === 0 || (value > 52 && value < 62))
        value = getValue();
    } else {
        value = getValue();
    }
    return value
}

function getValue() {
    return Math.floor(Math.random() * characters.length)
}

function firstCopy() {
    firstPass.select();
    document.execCommand("copy");
    document.getSelection().removeAllRanges()
}

function secondCopy() {
    secondPass.select();
    document.execCommand("copy");
    document.getSelection().removeAllRanges()
}

