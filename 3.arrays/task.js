function compareArrays(arr1, arr2) {
  let result;
  result = arr1.length == arr2.length && arr1.every((value,item) => value === arr2[item]);
  return result; // boolean
}

function advancedFilter(arr) {
  // let resultArr;
  // resultArr = arr.filter((value) => value > 0).filter((value) => value % 3 == 0).map((value) => value * 10);
  // return resultArr; // array
  return arr.filter((value) => value > 0).filter((value) => value % 3 == 0).map((value) => value * 10);
}
