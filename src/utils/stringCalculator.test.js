import { add } from './stringCalculator';

//empty string
test('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
})