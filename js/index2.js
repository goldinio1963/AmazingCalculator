let logger = [];

let result = NaN;

let calc = "";

let input = document.querySelector('.display > input');

let resultField = document.getElementById('resultValue');



function leftContainer() {



    let resetButton = document.querySelector('.resetButton');

    let equalButton = document.querySelector('.equalButton');

    let log = document.querySelector('#logInformation');



    resetButton.addEventListener('click', (event) => {

        //console.log(resetButton.textContent.trim());

        input.value = "";

        calc = "";



    });



    equalButton.addEventListener('click', (event) => {

        //console.log(equalButton.textContent.trim());

        let logBox = "";

        calc = calc.concat(input.value);

        calc = calc.replace(/[^-()\d/*+.]/g, ''); //elimina valores que no sean válidos

        input.value = "";



        try {

            result = eval(calc);

            calc = calc.concat(" = " + result);

        } catch (error) {

            console.error(error);

            input.value = "ERROR"

            calc = "";

        }



        if (calc != "")

            logger.push(calc);



        calc = "";

        resultField.value = result;

        //console.log(logger);

        for (let i = 0; i < logger.length; i++) {

            logBox = logBox.concat(logger[i] + "\n");

        }

        log.value = logBox;



    });



}



function operators() {

    let sections = document.querySelectorAll('div > span > span > span');

    for (let i = 0; i < sections.length; i++) {

        sections[i].addEventListener('click', (event) => {

            //console.log(sections[i].textContent.trim());

            calc = calc.concat(input.value + sections[i].textContent.trim());

            input.value = "";

            resultField.value = "";

        });

    }

}





function init() {

    operators();

    leftContainer();

}



init();