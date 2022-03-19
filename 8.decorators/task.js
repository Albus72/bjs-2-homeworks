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
        const key = Object.keys(cache);
        delete cache[key[0]];
      }
      console.log('Вычисляем: ' + result);
      return 'Вычисляем: ' + result;
    }
  };
}

function debounceDecoratorNew(func, ms) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, ...args);
    }, ms);
  };
}

// function debounceDecorator2(func, ms) {
//   let timer;
//   function wrapper(...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(this, ...args);
//     }, ms);
//     wrapper.count++;
//     console.log(wrapper.count);
//   }
//   wrapper.count = 0;
//   return wrapper;
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

// const sendSignal = () => console.log(`Сигнал отправлен ${wrapper.count}`);
// const upgradedSendSignal = debounceDecorator2(sendSignal, 2000);
// setTimeout(upgradedSendSignal); // Сигнал отправлен
// setTimeout(upgradedSendSignal, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс
// setTimeout(upgradedSendSignal, 900); // проигнорировано аналогично
// setTimeout(upgradedSendSignal, 1200); // проигнорировано аналогично
// setTimeout(upgradedSendSignal, 2300); // проигнорировано аналогично
// setTimeout(upgradedSendSignal, 4400); // Сигнал отправлен
// setTimeout(upgradedSendSignal, 4500); // проигнорировано аналогично
