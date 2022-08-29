/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
 let isSumEqual = function(firstWord, secondWord, targetWord) {
    return wordCharacterSummation(firstWord) + wordCharacterSummation(secondWord) === wordCharacterSummation(targetWord);
};

let wordCharacterSummation =(word) =>{
        let val=''
        for(let i=0;i<word.length;i++){
            val+= word[i].charCodeAt()-97
        }
        return +val
    }
    