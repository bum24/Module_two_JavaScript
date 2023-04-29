// д/з 8
let money,
    purpose,
    extraMoney,
    amount;
    
const hasDeposit = true;

money = +prompt('Ваш месячный доход?');
while (isNaN(money)) {
    money = +prompt('Вы ввели не число. Ваш месячный доход?');
}

purpose = +prompt('Сколько вы хотите накопить?');
while (isNaN(purpose)) {
    purpose = +prompt('Вы ввели не число. Сколько вы хотите накопить?');
}

extraMoney = +prompt(`Перечислите возможный доход за ваши дополнительные работы:`);
while (isNaN(extraMoney)) {
    extraMoney = +prompt('Вы ввели не число. Введите дополнительный доход:');
}

amount = +prompt('Во сколько обойдуться обязательные статьи расходов?');
while (isNaN(amount)) {
    amount = +prompt('Вы ввели не число. Введите сумму обязательных расходов:');
}

const getAccumulatedIncome = (money, amount, extraMoney) => {
    return money + extraMoney - amount;
};

const accumulatedIncome = getAccumulatedIncome(money, amount, extraMoney);
const getTargetMonth = (accumulatedIncome, purpose) => {
    return Math.floor(purpose / accumulatedIncome);
};
//
const getBudgetDay = (budgetMonth) => {
    return (budgetMonth / 30).toFixed(2);
};
console.log('Ваш бюджет на месяц:', accumulatedIncome);

const budgetDay = getBudgetDay(accumulatedIncome);

if (accumulatedIncome > 0) {
    console.log(`Ваша цель накопить ${purpose} с учетом всех ваших расходов цель будет достигнута через`, getTargetMonth(accumulatedIncome, purpose) + ' месяца');
    console.log('Ваш дневной бюджет:', budgetDay);
} else {
    console.log('Цель не будет достигнута');
}

if (budgetDay < 0 ) {
    console.log('Расходы превышают доходы');
} else if (budgetDay > 6000 ) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay < 3000 && budgetDay < 0 ) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
    console.log('У вас средний уровень дохода');
}


/* //д/з 7
const salaries={
    John: 100 ,
    Ann: 160,
    Pete :130
}

const sum = (salaries) => {
    return Object.values(salaries).reduce((a, b) => a + b, 0);
}

const studentScores = {
    Коля: '99',
    Вася: '35',
    Петя: '70',
    Таня: '95',
    Оля: '50',
    Саша: '20'
}

const sortStudents = [];

for (const key in studentScores)
    if (studentScores[key] > 80) {
        delete studentScores[key]
    } else {
        sortStudents.push(key)
    };


console.log(`Студенты: ${sortStudents.toString()} - не прошли!`)  */


/* // д/з 6
let number = 5; 

function game(number) {
    let userNumber = +prompt ('угадай заданное число?') ;

    let num=number
    if(userNumber==num) {
        alert('вы отгадали число')
    }
    else if (userNumber<num) {
        alert ('загаданное число больше')
    }
    else if (userNumber > num) {
        alert ('загаданное чсисло меньше')
    }

}
game (number) */



/*// д/з 5
let money = Number.parseFloat(prompt (`Ваш месячный доход?`)) ;
let amount = Number.parseFloat(prompt (`Во сколько обойдуться обязательные статьи расходов?`)) ;
let purpose = Number.parseFloat(prompt (`Сколько хотите накопить денег?`)) ;
let profit = Number.parseFloat(prompt (`Перечислите возможный доход за ваши дополнительные 
работы?`) ) ;

const extraMoney = profit

const getAccumulatedIncome = (money, extraMoney, amount) =>
    (money + extraMoney) - amount; 

const accumulatedIncome = getAccumulatedIncome (money, extraMoney, amount)

const getTargetMonth = (accumulatedIncome, purpose) => 
    Math.ceil(purpose / accumulatedIncome);

const targetMonth = getTargetMonth (accumulatedIncome, purpose) 

const months = getTargetMonth(accumulatedIncome, purpose);
        console.log(`Копить осталось ${months} месяц (-ев)`);
   
const budgetDay = accumulatedIncome / 30;

console.log (`Ваш бюджет на месяц с учетом ваших расходовсоставляет: ${accumulatedIncome}`)
console.log(`Ваша цель накопить ${purpose} с учетом всех вашихрасходов будет достигнута через,
 ${targetMonth} месяца`);
console.log(`Дневной бюджет, ${budgetDay}`);

    
console.log('хорошее название выбрала)))');  */ 
 
/* // д/з 4
let week = [
     `Monday`,
     `Tuesday`,
     `Wendesday`, 
     `Thursday` ,
     `Friday` ,
     `Saturday`, 
     `Sunday`
    ];
let currentDayIndex=(new Date().getDay()-1) ;
let weekendDayIndex = [5, 6];
 
 
function printIndex(index)  {
    const classes = `text ${currentDayIndex === index ?  'italic' : ''}
     ${weekendDayIndex.includes(index) ? 'bold' : ''}`
 document.write(`<h2 class='${classes}'>${week[index]}</h2><br>`)
}

for (i = 0; i < week.length; i++) {
    printIndex(i)
} 


console.log(`---------------`);

const arr = ['6', '66', '366', '666',`77`, `38`, `3`]

for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith('3') || arr[i].startsWith('7')) {
        console.log(arr[i])
    }
} */

 
/* // д/з 3
let money = Number.parseFloat(prompt (`Ваш месячный доход?`)) ;
let expenses = Number.parseFloat(prompt (`Перечислите возможные расходы за рассчитываемый 
период через запятую`)) ;
let amount = Number.parseFloat(prompt (`Во сколько обойдуться обязательные статьи расходов?`)) 
let deposit = (confirm (`Есть ли у вас вклад в банке?`)) ;
let purpose = Number.parseFloat(prompt (`Сколько хотите накопить денег?`)) ;

let budgetDay = money-amount ;
console.log( `${ Math.floor(budgetDay )} ₽ бюджет на месяц `);

purpose = Math.ceil( purpose / budgetDay);
console.log ( `За ${purpose} месяцев будет достигнута цель накопления`)

if (budgetDay > 6000) {
    console.log('У вас высокий уровень дохода');}
   else if (budgetDay < 3000 > 6000 ) { 
    console.log('У вас средний уровень дохода');} 
   else if (budgetDay <3000 ==0) { 
    console.log('К сожалению у вас уровень дохода ниже среднего');} 
   else if (budgetDay <0 ) { 
    console.log('Что то пошло не так');}
    
console.log('----------');
*/


/* // д/з 2 
const money = 1000 ;  const profit = 'фриланс' ;
const expenses = 'Аренда, Питание, Транспорт, Досуг' ;
const purpose = 50000 ;
const period = 3 ;

console.log( typeof money, typeof profit);

console.log( expenses.length);

console.log( `Период равен ${period}  месяцев`);
console.log( `Цельзаработать ${purpose} рублей/долларов`);

const budgetDay =  money / 30 ;
console.log( `${ Math.floor(budgetDay )} ₽ / день `); */


/* // д/з 1 
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
document.write(`Сумма остатка от деления равна ${i} <br>`)*/