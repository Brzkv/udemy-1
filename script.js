var money = prompt('Бюджет на месяц', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: '',
    income: [],
    savings: false
}

let ask1 = prompt('Ввыедите обязательную статью расходов в этом месяце', ''),
    ask2 = prompt('Во сколько обойдется?', '');

appData.expenses[ask1] = ask2;

alert(appData.budget / 30);


