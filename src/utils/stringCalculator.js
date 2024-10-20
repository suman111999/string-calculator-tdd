export function add(numbers) {
    //if numbers string is empty then return 0
    if (numbers === '') return 0;
    //if numbers string contains only one number then return the same number
    return parseInt(numbers, 10)
};