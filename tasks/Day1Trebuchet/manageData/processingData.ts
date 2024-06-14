import { getWorkingInput } from "../manageInput/processingInput.js";

function findCurrentValue() : number[] {
    
    const valuesArray : number[] = [];
    const workingInput = getWorkingInput();

    for (let string of workingInput) {

        let firstDigit = findFirstDigit(string);
        let lastDigit = findLastDigit(string);

        if (firstDigit !== undefined && lastDigit !== undefined) {

            let value = Number(firstDigit + lastDigit);
            valuesArray.push(value);
        }
    }

    return valuesArray;
}

function findFirstDigit(string: string): string | undefined {

    for (let i = 0; i < string.length; i++) {
        
        const result = checkIsDigit(i, string);
        
        if (result) {
            return result;
        }
    }
}

function findLastDigit(string: string): string | undefined {

    for (let i = string.length - 1; i >= 0; i--) {
        
        const result = checkIsDigit(i, string);
        
        if (result) {
            return result;
        }
    }
}

function checkIsDigit(i : number, string : string): string | undefined {
    
    let currentChar = string[i];

    if(parseInt(currentChar)) {
        return currentChar;
    }
}

export { findCurrentValue };
