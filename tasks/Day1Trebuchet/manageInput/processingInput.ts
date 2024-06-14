import { getRawInput } from "./readInputFromFile.js";

function getWorkingInput(): string[] {
    
    const rawInput = getRawInput();
    const stringsWithDigitsArray = rawInput.filter((string: string) => string.match(/\d/g));
    return stringsWithDigitsArray;
}

export { getWorkingInput };
