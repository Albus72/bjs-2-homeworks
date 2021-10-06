"use strict"
function solveEquation(a, b, c) {
  let arr;
    arr = [];
    if (a === 0) {
      return arr = ['Т.к. а=0, это не квадратное уравнение'];
    }
    let Discriminant = b * b - 4 * a * c;
    // if (Discriminant < 0) {
    //   return arr = [];
    // }
    if (Discriminant === 0) {
      let x = (-b + Math.sqrt(Discriminant)) / (2 * a);
      arr.push(x);
    } else if (Discriminant > 0) {
      let x1 = (-b + Math.sqrt(Discriminant)) / (2 * a);
      // arr.push(x1);
      let x2 = (-b - Math.sqrt(Discriminant)) / (2 * a);
      arr.push(x1, x2);
    }
  // код для задачи №1 писать здесь
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
