import { add } from './stringCalculator';

//empty string
test('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
})

//single number
test('should return number itself when single number is provided', () => {
    expect(add('7')).toBe(7);
})

//two numbers

test('should return sum of two numbers', () => {
    expect(add('3,5')).toBe(8);
})

//multiple numbers
test('should return sum of multiple numbers', () => {
    expect(add('1,2,3,4,5')).toBe(15);
})

//include new line as delimiters
test('should return sum of numbers with new line as delimiter', () => {
    expect(add('4\n2,5')).toBe(11);
})

//custom delimiter
test('should return sum of numbers with custom delimiter', () => {
    expect(add('//;\n1;2;3')).toBe(6);
})

//negative numbers  
test('should throw an error when there is any negative number', () => {
    expect(() => add('1,-9,-3,4')).toThrow('Negative numbers not allowed: -9, -3');
})