class AlarmClock {
	constructor () {
		this.alarmCollection = [];
		this.timerId = null;
	};
	addClock (time, callback, id){
      if (id === undefined) {
        throw new Error("не передан параметр id");
      };
      if (this.alarmCollection.find(item => item.id === id)) {
        console.error('будильник с таким id уже существует')
      }
      else {this.alarmCollection.push({id, time, callback})};
	};

  removeClock (id) {
  	  let alarmLength1 = this.alarmCollection.length;
	  this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
      let alarmLength2 = this.alarmCollection.length;
      return (alarmLength1 !== alarmLength2);  
	};

  getCurrentFormattedTime () {
    let time = new Date ()
    return time.toLocaleTimeString([], {timeZone: 'Europe/Moscow', hour: 'numeric', minute: 'numeric', hour12: false});
  };

   start () {
    const checkClock = (alarm) => {
      if (this.getCurrentFormattedTime() === alarm.time) {
        return alarm.callback();
      }
    }
    if (this.timerId === null) {
      return this.timerId = setInterval( () => {
        for (let i = 0; i < this.alarmCollection.length; i++) {
          checkClock(this.alarmCollection[i]);
        }
      }, 5000); 
      
    };  
  };

  stop () {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    };
  };
 
  printAlarms () {
    this.alarmCollection.forEach((item) => console.log('id:' + item.id + '; ' + 'time ' + item.time));
  }

  clearAlarms () {
    this.stop();
    this.alarmCollection.length = 0;
  }
   }
 
 function testCase () {
 	let alarmClock = new AlarmClock();
 	alarmClock.addClock('16:30', () => console.log('давай вставай'), 1);
 	alarmClock.addClock('16:31', () => {console.log('давай вставай'); alarmClock.removeClock (2)}, 2);
 	alarmClock.addClock('16:32', () => {console.log('давай вставай'); alarmClock.stop(); alarmClock.clearAlarms(); alarmClock.printAlarms ()}, 3);
 	alarmClock.printAlarms ();
 	alarmClock.start();
 };

 testCase();
