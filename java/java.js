let firstNumber = Number.parseFloat(prompt (`Введите первое число `)) ;
let secondNumber = Number.parseFloat(prompt (`Введите второе число`) ) ;
let a,b,c,d,i ;


document.write(`Вы ввели ${firstNumber } и ${secondNumber} <br>`) 

a=Math.round(firstNumber + secondNumber);
document.write(`Сумма сложения равна ${a} <br>` )

b=Math.round(firstNumber - secondNumber);
document.write(`Сумма вычитания равна ${b} <br>`)

c=Math.round(firstNumber * secondNumber);
document.write(`Сумма умножения равна ${c} <br>`)

d=Math.round(firstNumber / secondNumber);
document.write(`Сумма деления равна ${d} <br>`)

i=Math.round(firstNumber % secondNumber);
document.write(`Сумма остатка от деления равна ${i} <br>`)


/*
const operation=prompt(`Введите операцию`) ;

switch (operation) {
    case`+`:
    alert (firstNumber + secondNumber) ;
    break;
    case `-`:
    alert (firstNumber - secondNumber)
    break ;
    case `*`:
        alert (firstNumber * secondNumber) ;
    break;
    case `/`:
        const result=(firstNumber / secondNumber)
        alert (result.toFixed(1));
    break;
    case`%`:
    alert (firstNumber % secondNumber) ;
    break;

    default: alert (`Я не знаю что вы хотите от меня!`)
}*/
