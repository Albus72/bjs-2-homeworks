class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        return this.state = this.state * 1.5; 
    }

    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state >= 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state)
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state)
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state)
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state)
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state)
        this.type = 'detective';
    }
}

class Library{
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            if ( this.books === undefined) {
                this.books = [book];
              } else {
                this.books.push(book);
              }   
        }    
        return this.books;
    }

    findBookBy(type, value) {
        const book = this.books.find(item => item[type] === value);
        return book || null;
    }
    
    giveBookByName (bookName) {
        let book = this.books.find(item => item.name === bookName);
          this.books.splice(this.books.indexOf(book), 1);
          return book || null;
    }
}

class Student {
    constructor(name) {
    this.name = name;
    this.registerBook = [];
    this.arrAverageBySubject =[];
    }   

    addMark(mark, subject) {
        if (subject === "algebra") {
            if (this.registerBook[`algebra`] === undefined) {
                this.registerBook[`algebra`] = [];
            if (mark >= 1 && mark <= 5) {
                this.registerBook[`algebra`].push(mark);
            } else {
                return console.log("Ошибка, оценка должна быть числом от 1 до 5")
            }
            } else {
                if (mark >= 1 && mark <= 5) {
                this.registerBook[`algebra`].push(mark);
            } else {
                return console.log("Ошибка, оценка должна быть числом от 1 до 5")
            }
            }
            return this.registerBook;
        } else if (subject === "geometry") {
            if (this.registerBook[`geometry`] === undefined) {
                this.registerBook[`geometry`] = [];
            if (mark >= 1 && mark <= 5) {
                this.registerBook[`geometry`].push(mark);
            } else {
                return console.log("Ошибка, оценка должна быть числом от 1 до 5")
            }
            } else {
                if (mark >= 1 && mark <= 5) {
                this.registerBook[`geometry`].push(mark);
            } else {
                return console.log("Ошибка, оценка должна быть числом от 1 до 5")
            }
            }
            return this.registerBook;
        } else {
            return console.log('Несуществующий предмет')
        }
    }

    getAverageBySubject(subject) {
        if (subject === "algebra") {
            this.arrAverageBySubject = this.registerBook.algebra.reduce((sum, current) => sum + current, 0) / this.registerBook.algebra.length;
            return console.log(this.arrAverageBySubject);
        } else if (subject === "geometry") {
            this.arrAverageBySubject = this.registerBook.geometry.reduce((sum, current) => sum + current, 0) / this.registerBook.geometry.length;
            return console.log(this.arrAverageBySubject);
        } else {
            return console.log('Несуществующий предмет')
        }
    }
}

const student = new Student("Олег Никифоров");
student.addMark(5, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
student.getAverageBySubject("algebra"); // Средний балл по предмету geometry 4.5
student.getAverageBySubject("biology"); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 4.75
student.exclude("Исключен за попытку подделать оценки");