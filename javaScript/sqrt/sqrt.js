/**
 * @param {number} x
 * @return {number}
 */

//Newton formula

 var mySqrt = function(x) {
    r = x;
    while (r*r > x)
        r = ((r + x/r) / 2) | 0;
    return r;
};