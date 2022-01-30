"use strict"
function solveEquation(a, b, c) {
  let arr;
    arr = [];
    if (a === 0) {
      return arr = ['Т.к. а=0, это не квадратное уравнение'];
    }
    let Discriminant = b * b - 4 * a * c;
    if (Discriminant === 0) {
      let x = (-b + Math.sqrt(Discriminant)) / (2 * a);
      arr.push(x);
    } else if (Discriminant > 0) {
      let x1 = (-b + Math.sqrt(Discriminant)) / (2 * a);
      let x2 = (-b - Math.sqrt(Discriminant)) / (2 * a);
      arr.push(x1, x2);
    }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  
  if (isNaN(percent)) {
    return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
  } else
  if (isNaN(contribution)) {
    return (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
  } else
  if (isNaN(amount)) {
    return (`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
  };
  
  percent = Number(percent / 100);
  contribution = Number(contribution);
  amount = Number(amount);

  const creditPeriod = Math.trunc(((date - Date.now()) / 8.64e7) / 30); //Принимаем, что в среднем месяц = 30 дням
  const loanAmount = amount - contribution;
  const monthlyPayment = loanAmount * ((percent / 12) + (percent / 12) / (((1 + (percent / 12)) ** creditPeriod) - 1));

  console.log(totalAmount = Number((monthlyPayment * creditPeriod).toFixed(2)));
  return totalAmount;
}
