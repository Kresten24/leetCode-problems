/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
    let words = s.split(' ');
    
    let map = new Map()
    let count = 0;
    
    if(new Set(pattern).size !== new Set(words).size) return false
    if(pattern.length !== words.length) return false
    
    for(char of pattern){
        
        if(map.has(char) && map.get(char) !== words[count]) return false;
        map.set(char, words[count]);
        count++;
        
    }
    return true
    
};