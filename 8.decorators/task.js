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

function debounceDecoratorNew(func, ms){
  let timer;
  let firstTime = true;
  return function(...args) {
    clearTimeout(timer);
    if (firstTime) {
      func.apply(this, args);
      firstTime = false;
    } else {
      timer = setTimeout(() => {
        func.apply(this, args);
      }, ms);
    }
  };
};

function debounceDecorator2(func, ms){
  let timer;
  let firstTime = true;
  let counter = 0;

  function wrapper(...args) {
    wrapper.count = ++counter;
    clearTimeout(timer);
    if (firstTime) {
      func.apply(this, args);
      firstTime = false;
    } else {
      timer = setTimeout(() => {
        func.apply(this, args);
      }, ms);
    }
  };

  return wrapper;
};