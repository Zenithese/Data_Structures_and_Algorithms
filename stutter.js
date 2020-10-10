function doNotStutter(string){
    let arr = string.split('');

    for(let i = 0; i < arr.length - 2; i++) {
        if (arr[i] === arr[i+1] && arr[i] === arr[i+2]) {
            arr.splice(i, 1);
            i--
        }
    }

    return arr.join('');
}

console.log(doNotStutter('aaabbbbaaabbaaaa'))

// let leftHalf = arr.slice(0, i + 2);
// let rightHalf = arr.slice(i + 3);
// arr = [...leftHalf, ...rightHalf]