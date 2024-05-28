const result = math.add(52,6);
console.log(result);

let innertext = "";

let lastAnswer;

let focused = false;  //handling textbox focus

let clicked = false;   //handling inv button 

const PI = math.pi;
const e = math.e;

let exponentValue = ""; //handling EXP

let isDegree = true;  //flag for unit


const sinButton = document.getElementById("b-8");
const cosButton = document.getElementById("b-15");
const tanButton = document.getElementById("b-22");
const lnButton = document.getElementById("b-9");
const logButton = document.getElementById("b-16");
const rootButton = document.getElementById("b-23");
const xToPowery = document.getElementById("b-30");

const acButton = document.getElementById("b-6");
    
const textBox = document.getElementById("result");
textBox.textContent = innertext;


// handling numerals
document.getElementById("b-10").addEventListener('click', function() {
    innertext += "7";
    textBox.textContent = innertext;
});

document.getElementById("b-11").addEventListener('click', function() {
    innertext += "8";
    textBox.textContent = innertext;
});

document.getElementById("b-12").addEventListener('click', function() {
    innertext += "9";
    textBox.textContent = innertext;
});

document.getElementById("b-17").addEventListener('click', function() {
    innertext += "4";
    textBox.textContent = innertext;
});

document.getElementById("b-18").addEventListener('click', function() {
    innertext += "5";
    textBox.textContent = innertext;
});

document.getElementById("b-19").addEventListener('click', function() {
    innertext += "6";
    textBox.textContent = innertext;
});

document.getElementById("b-24").addEventListener('click', function() {
    innertext += "1";
    textBox.textContent = innertext;
});

document.getElementById("b-25").addEventListener('click', function() {
    innertext += "2";
    textBox.textContent = innertext;
});

document.getElementById("b-26").addEventListener('click', function() {
    innertext += "3";
    textBox.textContent = innertext;
});

document.getElementById("b-31").addEventListener('click', function() {
    innertext += "0";
    textBox.textContent = innertext;
});

// handling arithematic operators

document.getElementById("b-13").addEventListener('click', function() {
    innertext += "÷";
    textBox.textContent = innertext;
});

document.getElementById("b-20").addEventListener('click', function() {
    innertext += "*";
    textBox.textContent = innertext;
});

document.getElementById("b-27").addEventListener('click', function() {
    innertext += "-";
    textBox.textContent = innertext;
});

document.getElementById("b-34").addEventListener('click', function() {
    innertext += "+";
    textBox.textContent = innertext;
});

document.getElementById("b-32").addEventListener('click', function() {
    innertext += ".";
    textBox.textContent = innertext;
});

// handling AC 

acButton.addEventListener('click', function() {
    innertext = "";
    textBox.textContent = innertext;
});

// handling parenthesis

document.getElementById("b-3").addEventListener('click', function() {
    innertext += "(";
    textBox.textContent = innertext;
});

document.getElementById("b-4").addEventListener('click', function() {
    innertext += ")";
    textBox.textContent = innertext;
});

// handling % button
 
document.getElementById("b-5").addEventListener('click', function() {
    innertext += "%";
    textBox.textContent = innertext;
});

// handling trignometric functions

    sinButton.addEventListener('click', function() {
        if (clicked){
            innertext += (isDegree ? "asin(" : "asinr(");
        }
        else{
            innertext += (isDegree ? "sin(" : "sinr(");
        }
        textBox.textContent = innertext;
    });

    cosButton.addEventListener('click', function() {
        if (clicked){
            innertext += (isDegree ? "acos(" : "acosr(");
        }
        else{
            innertext += (isDegree ? "cos(" : "cosr(");
        }
        textBox.textContent = innertext;
    });

    tanButton.addEventListener('click', function() {
        if (clicked){
            innertext += (isDegree ? "atan(" : "atanr(");
        }
        else{
            innertext += (isDegree ? "tan(" : "tanr(");
        }
        textBox.textContent = innertext;
    });

// handling inverse

document.getElementById("b-7").addEventListener('click', function() {
    
    clicked = !clicked;

    if (clicked){
        tanButton.textContent = "tan^-1";
        sinButton.textContent = "sin^-1";
        cosButton.textContent = "cos^-1";
        lnButton.textContent = "e^x";
        logButton.textContent = "10^x";
        rootButton.textContent = "x^2";
    }
    else {
        tanButton.textContent = "tan";
        sinButton.textContent = "sin";
        cosButton.textContent = "cos";
        lnButton.textContent = "ln";
        logButton.textContent = "log";
        rootButton.textContent = "√";
    }
});

// handling b-1

document.getElementById("b-1").addEventListener('click', function() {
    isDegree = ! isDegree;
    if (isDegree){
        document.getElementById("b-1").textContent = "Deg";
    }
    else{
        document.getElementById("b-1").textContent = "Rad";   
    }
});

// handling keystrokes & focus

function handlekeyboardEvent(event) {
    const key = event.key.toLowerCase();
    console.log(key);
    switch(key) {
        case 'l':
            innertext += 'log(';
            textBox.textContent = innertext;
            break;
        case 's':
            innertext += 'sin(';
            textBox.textContent = innertext;
            break;
        case 'c':
            innertext += 'cos(';
            textBox.textContent = innertext;
            break;
        case 't':
            innertext += 'tan(';
            textBox.textContent = innertext;
            break;
        case 'p':
            innertext += 'π';
            textBox.textContent = innertext;
            break;
        case e:
            innertext += 'e';
            textBox.textContent = innertext;
            break;    
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '+':
        case '-':
        case '/':
        case '*':
            innertext += key;
            textBox.textContent = innertext;
            break;
        case 'backspace':
            innertext = innertext.slice(0, -1);
            textBox.textContent = innertext;
            break;
        default:
            // ignoring other keys
            break;
    }
}

textBox.addEventListener('click', function() {
focused = !focused;

    if (focused){
        textBox.classList.add('focused');
        window.addEventListener('keydown', handlekeyboardEvent);
    }
    else{
        textBox.classList.remove('focused');
        window.removeEventListener('keydown', handlekeyboardEvent);
    }
});

// handling "b-2" x!

document.getElementById("b-2").addEventListener('click', function() {
    innertext += "!" ;
    textBox.textContent = innertext;
});

// handling ln  and e^x
lnButton.addEventListener('click', function(){
    innertext += (clicked ? "e^" : "ln(");
    textBox.textContent = innertext;
});

// handling log
logButton.addEventListener('click', function() {
    innertext += ( clicked ? "10^" : "log(");
    textBox.textContent = innertext;
});

// handling root
rootButton.addEventListener('click', function(){
    innertext += (clicked ? `^2` : "√(");
    textBox.textContent = innertext;
});

// handling EXP 
document.getElementById("b-29").addEventListener('click', function(){
    innertext += "E";
    textBox.textContent = innertext;
});

// handling pie and e

document.getElementById("b-14").addEventListener('click', function(){
    innertext += "π";
    textBox.textContent = innertext;
});

document.getElementById("b-21").addEventListener('click', function(){
    innertext += "e";
    textBox.textContent = innertext;
});

// handling xToThePowery button
xToPowery.addEventListener('click', function(){
    innertext += (clicked ? " " : "^");
    textBox.textContent = innertext;
});

// handling "=" button

document.getElementById("b-33").addEventListener('click', function() {
    try{
        if (innertext.includes("sin(")) {
            const numberString = innertext.substring(innertext.indexOf("(") + 1, innertext.length - 1);
            const number = isDegree ? parseFloat(numberString) : math.unit(parseFloat(numberString), 'deg').toNumber('rad');
            const result = math.sin(number);
            textBox.textContent = result;
            lastAnswer = result;
            innertext = String(result);
        } else if (innertext.includes("sinr(")) {
            const numberString = innertext.substring(innertext.indexOf("(") + 1, innertext.length - 1);
            const number = parseFloat(numberString);
            const result = math.sin(number);
            textBox.textContent = result;
            lastAnswer = result;
            innertext = String(result);
        }
        else if (innertext.includes("cos(")) {
            const numberString = innertext.substring(innertext.indexOf("(") + 1, innertext.length - 1);
            const number = isDegree ? parseFloat(numberString) : math.unit(parseFloat(numberString), 'deg').toNumber('rad');
            const result = math.sin(number);
            textBox.textContent = result;
            lastAnswer = result;
            innertext = String(result);
        } else if (innertext.includes("cosr(")) {
            const numberString = innertext.substring(innertext.indexOf("(") + 1, innertext.length - 1);
            const number = parseFloat(numberString);
            const result = math.sin(number);
            textBox.textContent = result;
            lastAnswer = result;
            innertext = String(result);
        }
        else if (innertext.includes("tan(")) {
            const numberString = innertext.substring(innertext.indexOf("(") + 1, innertext.length - 1);
            const number = isDegree ? parseFloat(numberString) : math.unit(parseFloat(numberString), 'deg').toNumber('rad');
            const result = math.sin(number);
            textBox.textContent = result;
            lastAnswer = result;
            innertext = String(result);
        } else if (innertext.includes("tanr(")) {
            const numberString = innertext.substring(innertext.indexOf("(") + 1, innertext.length - 1);
            const number = parseFloat(numberString);
            const result = math.sin(number);
            textBox.textContent = result;
            lastAnswer = result;
            innertext = String(result);
        }
        else if (innertext.includes("ln(")) {
            const numberString = innertext.substring(innertext.indexOf("(") + 1, innertext.length - 1);
            const number = parseFloat(numberString);
            const base = 10;
            const result = math.log(number, base);
            textBox.textContent = result;
            lastAnswer = result;
            innertext = String(result);
        }
        else if(innertext.includes("e^")){
            const exponentString = innertext.substring(innertext.indexOf("^") + 1);
            const exponent = parseFloat(exponentString);
            const result = math.exp(exponent);
            textBox.textContent = result;
            lastAnswer = result;
            innertext = String(result);
        }
        else if(innertext.includes("log(")){
            const numberString = innertext.substring(innertext.indexOf("(") + 1, innertext.length - 1);
            const number = parseFloat(numberString);
            const result = math.log(number);
            textBox.textContent = result;
            lastAnswer = result;
            innertext = String(result);
        }
        else if(innertext.includes("10^")){
            const exponentString = innertext.substring(innertext.indexOf("^") + 1);
            const exponent = parseFloat(exponentString);
            const result = math.pow(10, exponent);
            textBox.textContent = result;
            lastAnswer = result;
            innertext = String(result);

        }
        else if(innertext.includes("√(")){
            const numberString = innertext.substring(innertext.indexOf("(") + 1, innertext.length - 1);
            const number = parseFloat(numberString);
            const result = math.sqrt(number);
            textBox.textContent = result;
            lastAnswer = result;
            innertext = String(result);
        }
        else if (innertext.includes("E")){
            const expressionWithE = innertext.replaceAll("E", "*10^") + exponentValue;
            const result = math.evaluate(expressionWithE);
            textBox.textContent = result;
            lastAnswer = result;
            innertext = String(result);
            exponentValue = "";
        }
        else if(innertext.includes("π")){
            const expressionWithPI = innertext.replaceAll("π", PI);
            const result = math.evaluate(expressionWithPI);
            textBox.textContent = result;
            lastAnswer = result;
            innertext = String(result);
        }
        else if(innertext.includes("e")){
            const expressionWithE = innertext.replaceAll("e", e);
            const result = math.evaluate(expressionWithE);
            textBox.textContent = result;
            lastAnswer = result;
            innertext = String(result);
        }
        else if (innertext.includes("^")) {
            const powerIndex = innertext.indexOf("^");
            let baseValue = innertext.substring(0, powerIndex);
            let exponentValue = innertext.substring(powerIndex + 1, innertext.length);
            const base = parseFloat(baseValue);
            const exponent = parseFloat(exponentValue);
            const result = math.pow(base, exponent);
            textBox.textContent = result;
            lastAnswer = result;
            innertext = String(result);
        }
        
        else{
            const result = math.evaluate(innertext);
            textBox.textContent = result;
            lastAnswer = result;
            innertext = String(result);
        }
    }
    catch (error) {
        textBox.textContent = "Error";
        lastAnswer = "Error";
    }
});

// handling ANS button

document.getElementById("b-28").addEventListener('click', function() {
    innertext = lastAnswer;
    console.log(lastAnswer)
    textBox.textContent = innertext;
});

// handling focus when clicked outside the container
const container = document.querySelector('.container');
document.addEventListener('click', function(event){
    if(! container.contains(event.target)){
        focused = false;
        textBox.classList.remove('focused');
        window.removeEventListener('keydown', handlekeyboardEvent);
    }
});