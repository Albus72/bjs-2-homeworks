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
        console.log(this.sideA, this.sideB, this.sideC);
        if ((this.sideA + this.sideB < this.sideC) || (this.sideA + this.sideC < this.sideB) || (this.sideB + this.sideC < this.sideA)) {
            throw new Error('Треугольник с такими сторонами не существует'); 
        } 
    }

    getPerimeter() {
        const perimeter = this.sideA + this.sideB + this.sideC;
        console.log(perimeter);
        
        if ()
        //     console.log('Ошибка! Треугольник не существует' + err.message);
        return perimeter;
    }

    getArea() {
        const p = this.perimeter / 2;
        // const square = Number((Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC))).toFixed(3));
        const square = Math.round((Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC))) *1000) / 1000;

        return square;
        // try {
        //     return +square.toFixed(3);
        // } catch (err) {
        //     console.log('Ошибка! Треугольник не существует');
        // }     
    }
}

function getTriangle(a,b,c) {
    const triangle = new Triangle(a,b,c);
    try {
		return triangle;
	} catch (err) {
		console.log('' + err.message);
        return triangle.getPerimeter, triangle.getArea;
	}
}