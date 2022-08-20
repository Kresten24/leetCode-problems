/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
 var canPlaceFlowers = function(flowerbed, n) {
    for(let i=0; i<flowerbed.length && n!=0; i++){
        if(flowerbed[i]=== 0 &&
          flowerbed[i+1] !== 1 &&
          flowerbed[i-1] !== 1){ n--; i++;}
        if(n===0)return true
    }
    return (n === 0 ?  true :  false)
};
