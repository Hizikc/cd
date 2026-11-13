import readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process'

const rl = readline.createInterface({ input: stdin, output: stdout});
export const input = (text = '') => rl.question(text);
export const closeInput = () => readline.close();