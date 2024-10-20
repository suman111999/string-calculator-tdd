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