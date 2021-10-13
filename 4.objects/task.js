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
  const summa = this.marks.reduce((sum, current) => sum + current, 0);
  // const items = this.marks.lenght;
  return summa;
}

Student.prototype.addMarks = function(...mark) {
  this.marks = [...mark];
}

Student.prototype.getAverage = function() { 
  this.average = summa / 3;
}

Student.prototype.exclude = function(reason) {
  if (Student.average < 3)  {
    this.excluded = reason;
  }
}



