import { add } from './stringCalculator';

//empty string
test('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
})

test('should return number itself when single number is provided', () => {
    expect(add('7')).toBe(7);
})