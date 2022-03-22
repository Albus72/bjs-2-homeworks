function cachingDecoratorNew(func) {
  let cache = {};
  return function (...args) {
    const hash = args.join(',');
    if (hash in cache) {
      console.log('Из кэша: ' + cache[hash]);
      return 'Из кэша: ' + cache[hash];
    }
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

function debounceDecoratorNew(func, ms) {
  let timer;
  let firstTime = true;
  return function (...args) {
    clearTimeout(timer);
    if (firstTime) {
      func.apply(this, args);
      firstTime = false;
    } else {
      timer = setTimeout(() => {
        func.apply(this, args);
      }, ms);
    }
  }
};

function debounceDecorator2(func, ms) {
  let timer;
  let firstTime = true;
  function wrapper(...args) {
    wrapper.counter = ++wrapper.counter;
    clearTimeout(timer);
    if (firstTime) {
      func.apply(this, args);
      firstTime = false;
    } else {
      timer = setTimeout(() => {
        func.apply(this, args);
      }, ms);
    }
  }
  wrapper.counter = 0;
  return wrapper;
};