function compareArrays(arr1, arr2) {
  return result = arr1.length == arr2.length && arr1.every((value,item) => value === arr2[item]);
}

function advancedFilter(arr) {
  return arr.filter((value) => value > 0).filter((value) => value % 3 == 0).map((value) => value * 10);
}
