/**
 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit = function(s) {
    let count=0;
    let obj={
        'R' : 0,
        'L' : 0
    }
    for(let i=0; i<s.length; i++){
        obj[s[i]]++
        if(obj['R'] === obj['L'])
            count++
    }
    return count
};