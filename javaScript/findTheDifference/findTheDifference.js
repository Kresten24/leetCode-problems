/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
    var stringS = s.split('').reduce((acc,next)=>acc+next.charCodeAt(0),0)
    var stringT = t.split('').reduce((acc,next)=>acc+next.charCodeAt(0),0)
    return String.fromCharCode(stringT-stringS)
};