// radixSort
//     - getDigit
//     - getMaxDigitLength

function radixSort(numbers) {
    if (numbers.length <= 1) return numbers;
    if (!Array.isArray(numbers)) return null;

    let length = getMaxDigitLength(numbers);

    for (i = 0; i < length; i++) {

        let buckets = Array.from({ length: 10 }, () => []);

        for (j = 0; j < numbers.length; j++) {
            let digit = getDigit(numbers[j], i)
            buckets[digit].push(numbers[j])
        }

        numbers = [].concat(...buckets);

    }

    return numbers;

}

const getDigit = (number, place) => {
    return Math.floor(
        (Math.abs(number) / Math.pow(10, place)) % 10
    )
}

const getMaxDigitLength = (array) => {
    let maxLength = 0;
    for (i = 0; i < array.length; i++) {
        maxLength = Math.max(maxLength, String(array[i]).length)
    }
    return maxLength
}

let numbers = [34, 63, 345, 2346, 44, 2 ,1, 5, 45,7]

console.log(radixSort(numbers))