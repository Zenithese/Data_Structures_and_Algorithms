function tabFib(n) {
    let table = new Array(n + 1);
    table[0] = 0;
    table[1] = 1;

    for (let i =2; i < table.length; i++) {
        table[i] = table[i - 1] + table[i - 2];
    }

    return table[n];
}


function regFib(n) {
    let first = 0;
    let second = 1;

    for (let i = 1; i < n; i++) {
        let temp = second;
        second = first + second;
        first = temp;
    };

    return second;
}
console.log(regFib(7))