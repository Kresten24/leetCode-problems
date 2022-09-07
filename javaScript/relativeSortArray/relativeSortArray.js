/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
 var relativeSortArray = function(arr1, arr2) {
    let includes = []
    let excludes = []
    includes = arr2.map((arr2Element)=>arr1.filter((arr1Element)=> arr1Element === arr2Element)).flat()
    excludes = arr1.filter((arr1Element)=>!arr2.includes(arr1Element)).sort((a,b)=>a-b)
    return [...includes, ...excludes]
};