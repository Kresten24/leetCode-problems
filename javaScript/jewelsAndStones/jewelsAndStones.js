/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    let jewelsObj = {}
    jewels = jewels.split('')
    jewels.forEach((jewel)=>{
        jewelsObj[jewel] = 0
    })
    for(let i=0; i<stones.length; i++){
        if(stones[i] in jewelsObj)
            jewelsObj[stones[i]]++
    }
    
   return jewels.reduce((acc,curr)=>{return acc+jewelsObj[curr]},0)
    
};