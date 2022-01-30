// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  sum = avg = 0;
  min = max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}


// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
    for (let i = 0; i < arrOfArr.length; i++) {
      const item = func(arrOfArr[i]);
      if (item > max) {
        max = item;
      }    
    } 
  return max;   
}

// Задание 3
function worker2(arr) {
  let min = Infinity;
  let max = -Infinity;
  let diff = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    diff = max - min;
  }
  return diff;
}
