'use strict'

const typeCheck = (check, defaultValue) => {
    const answer = Number.parseFloat(prompt(check, defaultValue));
    if (isNaN(answer)) {
        return typeCheck(check, defaultValue);
    };
    return answer;
};

//    {
// let answer;
//     do {
//         answer = Number.parseFloat(prompt(check, defaultValue));
        
//     } while (isNaN(answer));

//     return Number.parseFloat(prompt(check, defaultValue));
// }

let salary = typeCheck('Ваш месячный доход?', '20000'); // number


// let salary = Number.parseFloat(prompt('Ваш месячный доход?', '20000'));
// console.log('Месячный доход ' + salary + ' руб.');

let profit = (prompt('Дополнительные источники заработка через запятую', 'Работа, Фриланс'));

// console.log(`Дополнительные источники заработка: ${profit}`);

let extraMoney = typeCheck(`Возможный доход из дополнительных источников: ${profit}`, '50000'); // number

// let extraMoney = Number.parseFloat(prompt(`Возможный доход из дополнительных источников: ${profit}`, 50000));
// console.log(`Дополнительный доход: ${extraMoney}`);

let expenses = prompt('Перечислите возможные расходы за период через запятую', 'Еда, Траспорт, ЖКУ');

// console.log('Категории расходов ' + expenses);

let requiredExpenses = typeCheck('Во сколько обойдутся обязательные статьи расходов?', '50000'); // number

// let requiredExpenses = Number.parseFloat(prompt('Во сколько обойдутся обязательные статьи расходов?', 50000));
// console.log('Обязательные расходы ' + requiredExpens1es + ' руб.');

let hasDeposit = confirm('Есть ли у Вас вклад в банке?');

// console.log(`${hasDeposit ? 'Есть вклад' : 'Вклада нет'}`);
// let budgetPerMonth = salary - requiredExpenses;
// console.log('Бюджет на месяц ' + budgetPerMonth + ' руб.');

let accumulatedIncome = []

const getAccumulatedIncome = () => {
    accumulatedIncome = Number((salary + extraMoney) - requiredExpenses)
}

getAccumulatedIncome()
console.log('Накопления за месяц: ' + accumulatedIncome + ' руб.');

let budgetPerDay = Math.floor(accumulatedIncome / 30);
// console.log('Бюджет на день ' + budgetPerDay + ' руб.');

let purpose = typeCheck('Сколько нужно накопить?', 200000); // number

// let purpose = Number(prompt('Сколько нужно накопить?', 200000)); 
// console.log('Нужно накопить ' + purpose + ' руб.');
let months = Math.ceil(purpose / accumulatedIncome);

const getTargetMonth = () => {
    return purpose / accumulatedIncome
    // if (accumulatedIncome > 0) {
    //     console.log('Вы придете к цели через ' + months + ' месяца/-ев');
    // } else {
    //     console.log('Нет бюджета для накоплений');
    // }

    // if (budgetPerDay < 0) {
    //     console.log('Что-то пошло не так');
    // } else if (budgetPerDay > 6000) {
    //     console.log('У Вас высокий уровень дохода');
    // } else if (budgetPerDay < 3000) {
    //     console.log('У Вас уровень дохода ниже среднего');
    // } else {
    //     console.log('У Вас средний уровень дохода');
    // } 
    // return
}

getTargetMonth()

console.log(`Ваш бюджет на месяц с учетом ваших расходов составляет:  ${accumulatedIncome}`);
console.log(getTargetMonth > 0
    ? `Ваша цель накопить ${purpose} руб. с учетом всех ваших расходов будет достигнута через ${getTargetMonth()} месяца`
    : 'Ваша цель не может быть достигнута');
console.log('Дневной бюджет', budgetPerDay);



// if (accumulatedIncome > 0) {
//     console.log('Вы придете к цели через ' + months + ' месяца/-ев');
// } else {
//     console.log('Нет бюджета для накоплений');
// }

// if (budgetPerDay < 0) {
//     console.log('Что-то пошло не так');
// } else if (budgetPerDay > 6000) {
//     console.log('У Вас высокий уровень дохода');
// } else if (budgetPerDay < 3000) {
//     console.log('У Вас уровень дохода ниже среднего');
// } else {
//     console.log('У Вас средний уровень дохода');
// }