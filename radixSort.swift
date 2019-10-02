// radixSort
//     - getDigit
//     - getMaxNumLength

import Darwin
import Cocoa

func getDigit(number: Int, place: Int) -> Int {

    let digit = Int(
        abs(number) / abs((remainder(pow(10, place), 10)))
    )

    return digit
    
}

func getMaxNumLength(array: Array<Int>) -> Int {
    var maxDigits = 0;

    for i in 0..<(array.count) {
        let length = String(array[i]).count

        if length > maxDigits {
            maxDigits = length
        }

    }

    return maxDigits;

}

func radixSort(array: Array<Int>) -> Array<Int> {

    if array.count <= 1 {return array}
    let maxLength : Int = getMaxNumLength(array: array)

    for i in 0..<maxLength {
        let repeater: [Int] = []
        var buckets = Array(repeating: repeater, count: maxLength)
        
        for j in 0..<(array.count) {
            let digit = getDigit(number: array[j], place: i)
            buckets[digit] += [array[j]]
        }

        // array = [].concat(...buckets)

    }

    return array
}

let numbers = [33, 60, 98234, 77, 978264918, 456, 1, 34]

print(radixSort(array: numbers))

// let result = (pow(3,3))

// // print(abs(Int(remainder(pow(3,3), 4))))
// print((remainder(27, 26)))