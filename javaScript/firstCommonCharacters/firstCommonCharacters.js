/**
 * @param {string[]} words
 * @return {string[]}
 */
 var commonChars = function(words) {
    const firstWord = words[0];
    let newArr = words.slice(1); 
    const result = [];
    for(let letter of firstWord) {
        for(let elem of newArr) {
            if(!elem.includes(letter)) {
               break;             
            }
               
            if(elem === newArr.at(-1)) {
                result.push(letter);
                newArr = newArr.map(elem => elem.replace(letter, ""));
            }
        }
    }
   
    return result;
};