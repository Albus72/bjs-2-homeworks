function parseCount(parcedNumber) {
	const tempVar = Number.parseInt(parcedNumber, 10);
	if (Number.isNaN(tempVar) === true) {
		throw new Error('Невалидное значение');
	} else {
		return tempVar;
	}
}

function validateCount(parcedNumber2) {
	try {
		const tempVar2 = parseCount(parcedNumber2);
		return tempVar2;
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
    }

    catchAnException() {
        console.log(a, b, c);
        console.log(this.sideA);
        if ((this.sideA + this.sideB < this.sideC) || (this.sideA + this.sideC < this.sideB) || (this.sideB + this.sideC < this.sideA)) {
            throw new Error('Треугольник с такими сторонами не существует'); 
        }
    }

    getPerimeter() {
        const perimeter = this.sideA + this.sideB + this.sideC;
        console.log(perimeter);
        return perimeter;
    }


}