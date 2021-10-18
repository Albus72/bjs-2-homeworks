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