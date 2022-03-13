// function cachingDecoratorNew(func) {
//   let cache = [];
//   return function (...args) {
//     const hash = args.join(',');
//     let idx = cache.findIndex((item) => item === cache[hash]);
//     if (idx !== -1) {
//       console.log('Из кэша: ' + cache[idx]);
//       return 'Из кэша: ' + cache[idx];
//     } else {
//       let result = func(...args);
//       cache[hash] = result;
//       cache.push(result);
//       if (cache.length > 5) {
//         cache.shift();
//       }
//       console.log('Вычисляем: ' + result);
//       return 'Вычисляем: ' + result;
//     }
//   };
// }

function cachingDecoratorNew(func) {
  let cache = {};
  return function (...args) {
    const hash = args.join(',');
    if (hash in cache) {
      console.log('Из кэша: ' + cache[hash]);
      return 'Из кэша: ' + cache[hash];
    } else {
      let result = func(...args);
      cache[hash] = result;
      if (Object.keys(cache).length > 5) {
        const keys = Object.keys(cache);
        delete cache[keys[0]];
      }
      console.log('Вычисляем: ' + result);
      return 'Вычисляем: ' + result;
    }
  }
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
      }, ms);
    }
  }
}

// console.time('time');
// function debounceDecoratorNew(func, ms) {
//   let timer;
//   return function(...args)  {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(this, args);
//       console.timeEnd('time');
//     }, ms);
//   }
// }

// function debounceDecorator2(func, ms) {
//   let timer;
//   let toggle = false;
//   count = 0;
//   return function (...args) {
//     if (!toggle) {
//       func(...args);
//       toggle = true;
//       timer = setTimeout(() => {
//         toggle = false;
//       }, ms);
//     } else {
//       clearTimeout(timer);
//       timer = setTimeout(() => {
//         toggle = false;
//         console.timeEnd('time');
//       }, ms);
//     }
//     count++;
//     console.log(count);
//   };
// }
// console.time('time');

const sendSignal = () => console.log(`Сигнал отправлен`);
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
setTimeout(upgradedSendSignal); // Сигнал отправлен
setTimeout(upgradedSendSignal, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс
setTimeout(upgradedSendSignal, 900); // проигнорировано аналогично
setTimeout(upgradedSendSignal, 1200); // проигнорировано аналогично
setTimeout(upgradedSendSignal, 2300); // проигнорировано аналогично
setTimeout(upgradedSendSignal, 4400); // Сигнал отправлен
setTimeout(upgradedSendSignal, 4500); // проигнорировано аналогично
