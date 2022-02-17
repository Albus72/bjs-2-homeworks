class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (!id) {
      throw new Error("Не указан ID будильника");
    }
    if (this.alarmCollection.find((item) => item.id === id)) {
      console.error("Будильник с таким ID уже существует");
    } else {
      this.alarmCollection.push({ id, time, callback });
    }
  }

  removeClock(id) {
    let lengthBefore = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter((item) => item.id !== id);
    let lengthAfter = this.alarmCollection.length;
    return lengthBefore !== lengthAfter;
  }

  getCurrentFormattedTime() {
    let time = new Date();
    return time.toLocaleTimeString([], { hour: "numeric", minute: "numeric" });
  }

  start() {
    const checkClock = (alarm) => {
      if (this.getCurrentFormattedTime() === alarm.time) {
        return alarm.callback();
      }
    };
    if (this.timerId === null) {
      return this.timerId = setInterval(() => {this.alarmCollection.forEach(checkClock)}, 1000);
      // return tihs.timerId = setInterval(() => this.alarmCollection.forEach(checkClock), 1000); // а без фигурных скобок не работает хоть и действие одно

      // return (this.timerId = setInterval(() => {                 // обход всех будильников в цикле
      //   for (let i = 0; i < this.alarmCollection.length; i++) {
      //     checkClock(this.alarmCollection[i]);
      //   }
      // }, 1000));
    }
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    console.log(
      `Вывод на печать будильников в количестве: ${this.alarmCollection.length}`
    );
    this.alarmCollection.forEach((item) =>
      console.log(`Будильник №${item.id}, заведен на: ${item.time}`)
    );
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
    // this.alarmCollection.length = 0; // Это тоже работает как обнуление всех будильников
  }
}

function testCase() {
  let alarmClock = new AlarmClock();
  alarmClock.addClock("00:22", () => console.log("Подъем, труба зовет!"), 1);
  alarmClock.addClock("00:23", () => {
      console.log("Вставай!!! Нас ждут великие дела!");
      alarmClock.removeClock(2);
    }, 2);
  alarmClock.addClock("00:24", () => {
      console.log("Работа сама себя не сделает!!!");
      alarmClock.stop();
      alarmClock.clearAlarms(); 
      alarmClock.printAlarms();
    }, 3);
  alarmClock.printAlarms();
  alarmClock.start();
}

testCase();
