/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var arrayRankTransform = function(arr) {
    let sortedArray = [...new Set(arr)].sort((a,b)=>a-b)
    return arr.map(x=>sortedArray.indexOf(x)+1)
};