/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
    let counter = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i]===0){
            arr.splice(i,0,0)
            i++
            counter +=1
        }
    }
    while(counter>0){
        arr.pop()
        counter--
    }
};