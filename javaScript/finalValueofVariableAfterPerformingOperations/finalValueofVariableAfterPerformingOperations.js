/**
 * @param {string[]} operations
 * @return {number}
 */
 var finalValueAfterOperations = function(operations) {
    let obj = {
        'X++' : 1,
        '++X' : 1,
        'X--' : -1,
        '--X' : -1,
    }
    
   return operations.reduce((acc,curr)=>{ return acc + obj[curr]},0)
    
};