function Student(name, gender, age) {
  this.name = name,
  this.gender = gender,
  this.age = age

}

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  if ( this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function(...mark) {
  this.marks = [...mark];
}

Student.prototype.getAverage = function () {
  const summa = this.marks.reduce((sum, current) => sum + current, 0);
  this.arrAverage = summa / this.marks.length;
};

Student.prototype.exclude = function(reason) {
  // if (Student.arrAverage < 3)  {
    this.excluded = reason;
    delete this.subject;
    delete this.marks;
  // }
}



