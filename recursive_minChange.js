function minChange(coins, amount, memo = {}) {
    if (amount in memo) return memo[amount];
    if (amount === 0) return 0;

    let numCoins = [];
    coins.forEach(coin => {
        if (coin <= amount) {
            numCoins.push(minChange(coins, amount - coin, memo) + 1);
        }
    });

    memo[amount] = Math.min(...numCoins);
    return memo[amount];
}

console.log(minChange([1, 2, 5], 11))