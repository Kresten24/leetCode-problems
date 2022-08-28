/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
    let maxOnRightSide = 0
    for(let i=0; i<arr.length; i++){
       maxOnRightSide = Math.max(...arr.slice(i+1,arr.length))
        arr[i] = maxOnRightSide
    }
    arr[arr.length-1] = -1
    return arr
};