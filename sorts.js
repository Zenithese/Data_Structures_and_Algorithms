// bubble sort -- time: O(n**2) -- space: O(1)

function bubbleSort(array) {
    let swapped = true;

    while (swapped) {
        swapped = false;

        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                swapped = true;
            }
        }
    }

    return array;
}

//selection sort -- time: O(n**2) -- space: O(1)

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }

        swap(arr, i, minIndex);
    }
    return arr;
}

//insertion sort -- time: O(n**2) [ in the case of nearly sorted arrays, it can run in linear time. ] -- space: O(1)

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currElement = arr[i];
        for (var j = i - 1; j >= 0 && currElement < arr[j]; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currElement;
    }
    return arr;
}

//merge sort -- time: O(log(n)) -- space: O(n)

function merge(array1, array2) {
    let merged = [];

    while (array1.length || array2.length) {
        let ele1 = array1.length ? array1[0] : Infinity;
        let ele2 = array2.length ? array2[0] : Infinity;

        let next;
        if (ele1 < ele2) {
            next = array1.shift();
        } else {
            next = array2.shift();
        }

        merged.push(next);
    }

    return merged;
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let midIdx = Math.floor(array.length / 2);
    let leftHalf = array.slice(0, midIdx);
    let rightHalf = array.slice(midIdx);

    let sortedLeft = mergeSort(leftHalf);
    let sortedRight = mergeSort(rightHalf);

    return merge(sortedLeft, sortedRight);
} 

//quicksort -- time: Avg Case: O(n log(n)); Worst Case: O(n2) -- space:

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivot = array.shift();
    let left = array.filter(el => el < pivot);
    let right = array.filter(el => el >= pivot);

    let leftSorted = quickSort(left);
    let rightSorted = quickSort(right);

    return [...leftSorted, pivot, ...rightSorted];
}

//radix sort -- 

// time: O(n * k)
//     -  n elements of the input array
//     - k is the length(number of digits) of the longest integer in the array
// There exists a camp that believes that when Radix Sort's input array contains entirely unique values, due to a characteristic of the way computers store numerical data, that k becomes log k
//     - k, is equal to(or greater than) the total number of elements in the array, n
//     - O(n log(k)), or approximately O(n log(n)) * making Radix Sort, at worst, equal in speed to our fastest comparison - based sorting algorithm *

// space: Radix Sort is an O(n + k) space algorithm. The amount of memory consumed by the algorithm increases relative to both the size of the input array and the length of the longest integer.

function radixSort(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    let maxDigits = getMaxDigits(arr);
    for (let k = 0; k < maxDigits; k++) {
        let buckets = Array.from({ length: 10 }, () => []); // Array of empty arrays

        for (let i = 0; i < arr.length; i++) {
            let digit = getDigitFrom(arr[i], k);
            buckets[digit].push(arr[i]);
        }

        arr = [].concat(...buckets);
    }
    return arr;
}

const getDigitFrom = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;

const getIntLength = (num) => (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

function getMaxDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, getIntLength(nums[i]));
    }
    return maxDigits;
}

//counting sort -- time:  O(n + k) -- space: O(k)

//According to the ECMA - 262 5th edition spec, due to 32 - bit numbers, the upper - bound length of a JavaScript array is 232 - 1, which is 4, 294, 967, 295. If the largest possible integer in your array is larger than this, you'll have to optimize the Counting Sort algorithm to use less total memory if you intend to use it.

function countingSort(arr, max) {
    const result = [];
    const counters = new Array(max + 1).fill(0);

    for (let i = 0; i < arr.length; i++) {
        counters[arr[i]]++;
    }

    for (let i = 0; i < counters.length; i++) {
        while (counters[i] > 0) {
            result.push(i);
            counters[i]--;
        }
    }

    return result;
}