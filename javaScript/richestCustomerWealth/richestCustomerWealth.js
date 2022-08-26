/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let totalWealth = []
    accounts.map(account => {
        totalWealth.push(account.reduce((acc, curr)=>{return acc + curr},0))
    })
    return Math.max(...totalWealth)
};