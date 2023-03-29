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


/*const money = 1000 ;  const profit = 'фриланс' ;
const expenses = 'Аренда, Питание, Транспорт, Досуг' ;
const purpose = 50000 ;
const period = 3 ;

console.log( typeof money, typeof profit);

console.log( expenses.length);

console.log( `Период равен ${period}  месяцев`);
console.log( `Цельзаработать ${purpose} рублей/долларов`);

const budgetDay =  money / 30 ;
console.log( `${ Math.floor(budgetDay )} ₽ / день `);*/




/*let firstNumber = Number.parseFloat(prompt (`Введите первое число `)) ;
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