/**
 * @param {number} n
 * @return {number[]}
 */
 var sumZero = function(n) {
    let res = []
    if(n%2!==0){
        res.push(0)
    }
    for(i=1; i<=n/2; i++){
        res.push(i,-i)
    }
    return res
};