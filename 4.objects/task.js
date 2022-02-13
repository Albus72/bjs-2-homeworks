function Student(name, gender, age) {
  this.name = name,
  this.gender = gender,
  this.age = age
}

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  if ( !this.marks ) this.marks = [mark];
  else this.marks.push(mark);
}

Student.prototype.addMarks = function (...marks) {
    if( !this.marks ) this.marks = marks; 
    else this.marks = this.marks.concat(marks);
}

Student.prototype.getAverage = function() {
  this.arrAverage = this.marks.reduce((sum, current) => sum + current, 0) / this.marks.length;
  return this.arrAverage
};

Student.prototype.exclude = function(reason) {
  if (this.arrAverage < 3)  {
    this.excluded = reason;
    delete this.subject;
    delete this.marks;
  }
}