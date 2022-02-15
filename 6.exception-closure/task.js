function parseCount(parcedNumber) {
	const tempVar = Number.parseInt(parcedNumber, 10);
	if (Number.isNaN(tempVar)) {
		throw new Error('Невалидное значение');
	} 
 	return tempVar;
}

function validateCount(parcedNumber) {
	try {
		return tempVar = parseCount(parcedNumber);
	} catch (err) {
		console.log('' + err.message);
        return err;
	}
}

class Triangle {
    constructor(a, b, c) {
        this.sideA = a;
        this.sideB = b;
        this.sideC = c;
        if ((a + b < c) || (a + c < b) || (b + c < a)) {
            throw new Error('Треугольник с такими сторонами не существует'); 
        } 
    }

    getPerimeter() {
        return this.sideA + this.sideB + this.sideC;
    }

    getArea() {
        return Number((Math.sqrt((this.getPerimeter() / 2) * ((this.getPerimeter() / 2) - this.sideA) * ((this.getPerimeter() / 2) - this.sideB) * ((this.getPerimeter() / 2) - this.sideC))).toFixed(3));
    }
}

function getPerimeter() {
    return ("Ошибка! Треугольник не существует");
}

function getArea() {
    return ("Ошибка! Треугольник не существует");
}

function getTriangle(a,b,c) {
    try {
        return triangle = new Triangle(a,b,c);
	} catch (err) {
        return {getPerimeter, getArea};
	}
}