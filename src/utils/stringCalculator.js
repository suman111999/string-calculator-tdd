export function add(numbers) {
    //if numbers string is empty then return 0
    if (numbers === '') return 0;

    //custom delimiter or  /,|\n/
    // numbers string would look like "//[delimiter]\n[numbers…]"
    let delimiter = /,|\n/;
    let stringNum = numbers;

    if (numbers.startsWith('//')) {
        const delimeterLastIndex = numbers.indexOf('\n');
        delimiter = new RegExp(numbers.substring(2, delimeterLastIndex));
        stringNum = numbers.substring(delimeterLastIndex + 1);
    }

    const numsArr = stringNum.split(delimiter).map(Number);
    return numsArr.reduce((total, num) => total + num, 0);
};