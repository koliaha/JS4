let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?",'');
    time = prompt("Введите дату в формате YYYY-MM-DD",'');

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?",'');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function(){
        for (let i = 0; i < 2; i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце",''),
                b = prompt("Во сколько обойдется?",'');
            
            if ((typeof(a))==="string" && (typeof(a))!= null && (typeof(b))!= null
                && a != '' && b != '' && a.length < 50){
                    console.log("okey");
                    appData.expenses[a] = b;
                }
                else{
                    i--;
                }
        }
    },
    detectDayBudget: function (){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("бюджет на 1 день: "+ appData.moneyPerDay);
    },
    detectLevel: function (){
        if (appData.moneyPerDay < 100){
            console.log("Мин ур достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            console.log("Сред ур достатка");
        } else if (appData.moneyPerDay > 2000){
            console.log("Высокий ур достатка");
        } else console.log("Ошибка");
    },
    checkSavings: function (){
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function (){
            for (let i = 0; i < 3; i++) {
             let arr = prompt("Статья необязательных расходов?");  
              appData.optionalExpenses[i] = arr;    
            }
    },
    chooseIncome: function(){
        let items = prompt('Что принесет доп доход?(через запятую)', '');
        while(!isNaN(items) || items == "" || items == null){
            items = +prompt("Что принесет доп доход?(через запятую)",'');
        }
        appData.income = items.split(', ');
        appData.income.push(prompt('Еще?'));
        appData.income.sort();
        document.write("Способы доп. заработка:" + '<br>');
        appData.income.forEach(function(item, i, mass){
            document.write((i+1) + ") " + item + '<br>');
        });

    }
};
document.write("Наша программа включает в себя данные: " + '<br>');
for (let key in appData){
    document.write(key + '<br>');
}