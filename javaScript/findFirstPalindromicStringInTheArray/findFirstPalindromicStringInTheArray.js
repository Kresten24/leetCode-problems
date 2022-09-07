/**
 * @param {string[]} words
 * @return {string}
 */
 var firstPalindrome = function(words) {
    for(word of words){
        if(word === word.split("").reverse().join(""))
            return word
    } return ""
};