array1 = [5, 3, 6, 2, 7, 8, 9, 1, 3, 5];
array2 = [];

function mergingShitRecursively(array){
    if (array.length <= 1) {
        return array;
    }

    let midInx = Math.floor(array.length/2)
    let left = mergingShitRecursively(array.slice(0, midInx))
    let right = mergingShitRecursively(array.slice(midInx, array.length + 1))

    return merge(left, right);
}

function merge(left, right){
    let newArray = [];

    while (left.length || right.length) {
        el1 = left.length ? left[0] : Infinity;
        el2 = right.length ? right[0] : Infinity;
        
        let el2BPushed = null;
        if (el1 >= el2) {
            el2BPushed = right.shift();
        } else {
            el2BPushed = left.shift();
        }

        newArray.push(el2BPushed)
    }

    return newArray;
}

console.log(mergingShitRecursively(array1))

// console.log(merge([653,435,75], [8282,99892992982,666,69,7]))