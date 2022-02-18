function cachingDecoratorNew(func) {
  let cache = [];
  
  function wrapper(...args) {
      const hash = args.join(','); // получаем правильный хэш
      let idx = cache.findIndex((item) => item === cache[hash]); // ищем элемент, хэш которого равен нашему хэшу
      if (idx !== -1 ) { // если элемент не найден
          console.log("Из кэша: " + cache[idx]); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
          return "Из кэша: " + cache[idx];
      } else {
          let result = func.call(this, ...args); // в кэше результата нет - придётся считать
          cache[hash] = result;
          cache.push(result); // добавляем элемент с правильной структурой
          if (cache.length > 5) { 
            cache.shift(); // если слишком много элементов в кэше надо удалить самый старый (первый) 
          }
          console.log("Вычисляем: " + result);
          return "Вычисляем: " + result;  
      }
  }
  return wrapper;
}


function debounceDecoratorNew(func) {
  
}



// function debounceDecorator2(func) {
//   // Ваш код
// }
