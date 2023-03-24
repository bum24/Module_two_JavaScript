const money = 1000 ;

const profit = 'фриланс' ;
const expenses = 'Аренда, Питание, Транспорт, Досуг' ;

const purpose = 50000 ;
const period = 3 ;

console.log( typeof money, typeof profit);

console.log( expenses.length);

console.log( `Период равен ${period}  месяцев`);
console.log( `Цельзаработать ${purpose} рублей/долларов`);

const budgetDay =  money / 30 ;
console.log( `${ Math.floor(budgetDay )} ₽ / день `);

