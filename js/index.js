//variables for gobal use
let loggerresults = [];
let number = [];
let log = "";
let result = 0;
let input = document.querySelector('.inputNumber');     //sotre the input value to later erase or modify
let resultBox = document.querySelector('#resultValue');   //store the result value to later erase
let loginfo = document.querySelector('#logInformation');    //store the log

//operators
let mult = document.querySelector('#multiplicationButton');
let div = document.querySelector('#divisionButton');
let sum = document.querySelector('#addButton');
let subst = document.querySelector('#substractButton');

//events
let resetButton = document.querySelector('.resetButton');
let equalButton = document.querySelector('.equalButton');

//reset button
resetButton.addEventListener('click', (event) => {
    event.preventDefault();
    input.value = "";
    resultBox = "";
    while(!number[0] == ""){
        number.pop();
    }
});

//click on operator
mult.addEventListener('click', (event) => {
    //console.log("multi");
    if(!input.value == ""){
        number.push(Number(input.value));
        number.push('*');
        input.value = "";
    } else {
        alert('no input value');
    }
});

div.addEventListener('click', (event) => {
    //console.log("multi");
    if(!input.value == ""){
        number.push(Number(input.value));
        number.push('/');
        input.value = "";
    } else {
        alert('no input value');
    }
});

sum.addEventListener('click', (event) => {
    //console.log("multi");
    if(!input.value == ""){
        number.push(Number(input.value));
        number.push('+');
        input.value = "";
    } else {
        alert('no input value');
    }
});

subst.addEventListener('click', (event) => {
    //console.log("multi");
    if(!input.value == ""){
        number.push(Number(input.value));
        number.push('-');
        input.value = "";
    } else {
        alert('no input value');
    }
});


//=
equalButton.addEventListener('click', (event) => {
    if(!input.value == "" && !number[0] == ""){
        number.push(Number(input.value));
        input.value = "";

        for (let i = 0; i < number.length; i++){
            log = log.concat(number[i]);
        }
    
        calculator();
        
        resultBox.value = number[0];
        log = log.concat("=" + number[0]);
        log = log.concat('\n');
        resultBox = log;
    
        loggerresults.push(log);
    
        loginfo.value = loggerresults;

        loggerresults.pop();
        number.pop();

    } else {
        alert('no valid operation');
    }
    
});

//calculator
function calculator (){
    let res = 0;
    //make all the multiplication and division first
    for(let i = 0; i < number.length; i++){
        if(number[i] == '*'|| number[i] == '/'){
            if(number[i] == '*'){
                res = number[i-1] * number[i+1];
            } else {
                res = number[i-1] / number[i+1];
            }
            number.splice(i-1,3,res);
            i=0;
        }
    }

    //make all the sum and substract
    for(let i = 0; i < number.length; i++){
        if(number[i] == '+'|| number[i] == '-'){
            if(number[i] == '+'){
                res = number[i-1] + number[i+1];
            } else {
                res = number[i-1] - number[i+1];
            }
            number.splice(i-1,3,res);
            i=0;
        }
    }
}
