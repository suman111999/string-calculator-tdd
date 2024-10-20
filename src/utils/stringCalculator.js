export function add(numbers) {
    //if numbers string is empty then return 0
    if (numbers === '') return 0;
    //hanlde two or multiple numbers
    //split the string by ',' and convert each part to number using map method
    //then return the sum of all numbers using reduce method
    const numsArr = numbers.split(',').map(Number);
    return numsArr.reduce((total, num) => total + num, 0);
};