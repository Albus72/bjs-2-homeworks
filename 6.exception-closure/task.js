function parseCount(parcedNumber) {
	const tempVar = Number.parseInt(parcedNumber, 10);
	if (Number.isNaN(tempVar) === true) {
		throw new Error('Невалидное значение');
	} else {
		return tempVar;
	}
}

function validateCount(parcedNumber) {
	try {
		const tempVar = parseCount(parcedNumber);
		return tempVar;
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
        if ((this.sideA + this.sideB < this.sideC) || (this.sideA + this.sideC < this.sideB) || (this.sideB + this.sideC < this.sideA)) {
            throw new Error('Треугольник с такими сторонами не существует'); 
        } 
    }

    getPerimeter() {
        const perimeter = this.sideA + this.sideB + this.sideC;
        return perimeter;
    }

    getArea() {
        const p = this.getPerimeter() / 2;
        const square = Number((Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC))).toFixed(3));
        // const square = Math.Mound((Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC))) *1000) / 1000;
        return square;
    }
}

function getPerimeter() {
    return perimeter = "Ошибка! Треугольник не существует";
}

function getArea() {
    return square = "Ошибка! Треугольник не существует";
}

function getTriangle(a,b,c) {
    try {
        const triangle = new Triangle(a,b,c);
		return triangle;
	} catch (err) {
        return {getPerimeter, getArea};
	}
}