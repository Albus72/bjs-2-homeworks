function parseCount(parcedNumber) {
    const tempVar = Number.parseInt(parcedNumber);    
    if (Number.isNaN(tempVar) === true) {
        console.log(tempVar);
        throw new Error('Невалидное значение');
    } else {
        return tempVar;
    }
}

function validateCount(validateCount) {
    const tempVar = parseCount(validateCount); 
    try {
        if (Number.isNaN(tempVar) === false) {
            return tempVar;
        }
    } catch(err) {
        if (Number.isNaN(tempVar) === true) {
            console.log(err);
            throw new Error('Невалидное значение');
        }
    }

    

}