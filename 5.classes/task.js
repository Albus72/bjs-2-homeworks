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
            if (!this.books) {
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
    this.arrAverage = [];
    }   

    addMark(mark, subject) {
        if (!this.registerBook[subject]) {
            this.registerBook[subject] = [];
        }
        if (mark >= 1 && mark <= 5) {
            this.registerBook[subject].push(mark);
        } else {
            return ('Ошибка, оценка должна быть числом от 1 до 5');
        }
        return this.registerBook;
    }

    getAverageBySubject(subject) {
        console.log(student.registerBook.includes(subject))
        if (student.registerBook.includes(subject)) {
            this.arrAverageBySubject = this.registerBook[subject].reduce((sum, current) => sum + current, 0) / this.registerBook[subject].length;
            return this.arrAverage.push(this.arrAverageBySubject);
        } else {
            return ('Несуществующий предмет');
        }
    }

    getAverage() {
        this.registerBook.forEach(student.getAverageBySubject(value));
        this.Average = this.arrAverage.reduce((sum, current) => sum + current, 0) / this.arrAverage.length;
        return this.Average;  
    }
}

const student = new Student("Олег Никифоров");
student.addMark(5, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
student.getAverageBySubject("algebra"); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 4.75
student.exclude("Исключен за попытку подделать оценки");