function doNotStutter(string){
    let arr = string.split('');

    for(let i = 0; i < arr.length - 2; i++) {
        if (arr[i] === arr[i+1] && arr[i] === arr[i+2]) {
            let leftHalf = arr.slice(0, i + 2);
            let rightHalf = arr.slice(i + 3);
            arr = [...leftHalf, ...rightHalf]
            i--
        }
    }

    return arr.join('');
}

console.log(doNotStutter('aaabbbbaaabbaaaa'))