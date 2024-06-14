import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

function getRawInput(): string[] {

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, 'input1.txt');
    
    const data = fs.readFileSync(filePath, 'utf8');
    return data.split(/\r\n|[\n\v\f\r\x85\u2028\u2029]/);
}

export { getRawInput };
