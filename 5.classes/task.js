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
        if (this.state < 0) {
            this._state = 0;
        } else if (this.state >= 100) {
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

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        // if (this._state > 30) {
            this.books.push(book);
        // }
        return this.books;
    }
    findBookBy(argum, value) {
        let book = this.books.find(item => this.argum == value);
        return book;
    }
}