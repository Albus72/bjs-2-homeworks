function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    let idx = cache.findIndex((item) => item === cache[hash]);
    if (idx !== -1) {
      console.log('Из кэша: ' + cache[idx]); 
      return 'Из кэша: ' + cache[idx];
    } else {
      let result = func(...args);
      cache[hash] = result;
      cache.push(result);
      if (cache.length > 5) {
        cache.shift();
      }
      console.log('Вычисляем: ' + result);
      return 'Вычисляем: ' + result;
    }
  }
  return wrapper;
}

function debounceDecoratorNew(func, ms) {
  let timer;
  let toggle = false; 
  return function (...args) {
    if (!toggle) {
      func(...args);
      toggle = true;
      timer = setTimeout(() => {
        toggle = false;
      }, ms);
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        toggle = false;
        console.timeEnd('time');
      }, ms);
    }
  };
}
console.time('time');

function debounceDecorator2(func, ms) {
  let timer;
  let toggle = false; 
  count = 0;
  return function (...args) {
    if (!toggle) {
      func(...args);
      toggle = true;
      timer = setTimeout(() => {
        toggle = false;
      }, ms);
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        toggle = false;
        console.timeEnd('time');
      }, ms);
    }
    count++;
    console.log(count);
  };
}
console.time('time');

// const sendSignal = () => console.log(`Сигнал отправлен`);
// const upgradedSendSignal = debounceDecorator2(sendSignal, 2000);
// setTimeout(upgradedSendSignal); // Сигнал отправлен
// setTimeout(upgradedSendSignal, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс
// setTimeout(upgradedSendSignal, 900); // проигнорировано аналогично
// setTimeout(upgradedSendSignal, 1200); // проигнорировано аналогично
// setTimeout(upgradedSendSignal, 2300); // проигнорировано аналогично
// setTimeout(upgradedSendSignal, 4400); // Сигнал отправлен
// setTimeout(upgradedSendSignal, 4500); // проигнорировано аналогично