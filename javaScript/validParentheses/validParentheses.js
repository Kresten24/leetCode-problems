/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let stack = [];
    if(s.length%2 ===1) return false
    for(character of s){
        if(character === '{') {
            stack.push('}')
        } else if(character === '[') {
            stack.push(']')
        } else if(character === '(') {
            stack.push(')')
        }else{
            if(character !== stack.pop()){
                return false
            }
        }   
    }return stack.length === 0? true : false
};