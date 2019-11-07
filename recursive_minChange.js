function minChange(coins, amount, memo = {}) {
    if (amount in memo) return memo[amount];
    if (amount === 0) return 0;

    let numCoins = [];
    coins.forEach(coin => {
        if (coin <= amount) {
            numCoins.push(minChange(coins, amount - coin, memo) + 1);
        }
    });

    console.log(amount)
    console.log(numCoins)
    memo[amount] = Math.min(...numCoins);
    console.log(memo)
    return memo[amount];
}

console.log(minChange([1, 2, 5], 11))