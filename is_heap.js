function isMaxHeap(array, idx = 1) {
    if (array[idx] === undefined) return true;
    if (array.length - 1 === idx) return true;

    parent = array[idx];
    leftChild = array[idx * 2] || -Infinity;
    rightChild = array[idx * 2 + 1] || -Infinity;

    if (parent < leftChild || parent < rightChild) return false;
    idx += 1;
    return isMaxHeap(array, idx);
}