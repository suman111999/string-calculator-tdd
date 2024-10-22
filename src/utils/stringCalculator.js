function handleBackslashes(input) {
    return input
        .replace(/\\n/g, '\n')   // Convert \\n to newline \n
        .replace(/\\t/g, '\t')   // Convert \\t to tab \t
        .replace(/\\\\/g, '\\'); // Convert \\ to a single backslash \
}
export function add(numbers) {
    //if numbers string is empty then return 0
    if (numbers === '') return 0;
    // to handle escaped characters (like \n, \t, \\) duplication when we input in textarea
    numbers = handleBackslashes(numbers);
    //custom delimiter or  /,|\n/
    // numbers string would look like "//[delimiter]\n[numbers…]"
    let delimiter = /,|\n/;
    let stringNum = numbers;

    if (numbers.startsWith('//')) {
        const delimeterLastIndex = numbers.indexOf('\n');
        delimiter = new RegExp(numbers.substring(2, delimeterLastIndex));
        stringNum = numbers.substring(delimeterLastIndex + 1);
    }

    let numsArr = stringNum.split(delimiter).map(Number);

    //handleing negative number
    checkNegativeAndThrowError(numsArr)
    numsArr = ignore1000OrGreaterThan1000(numsArr);
    return numsArr.reduce((total, num) => total + num, 0);
};

function checkNegativeAndThrowError(stringNums) {
    const negativeNums = stringNums.filter(num => num < 0)
    if (negativeNums?.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNums.join(', ')}`);
    } else {
        return;
    }
};

function ignore1000OrGreaterThan1000(stringNums) {
    console.log(stringNums)
    for (let i = 0; i < stringNums.length; i++) {
        if (stringNums[i] >= 1000) {
            stringNums[i] = 0;
        }
    }
    return stringNums;
};

