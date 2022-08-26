/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
    let wordCount = []
    sentences.map(sentence => {
        
        wordCount.push(sentence.split(' ').length)
    })
    return Math.max(...wordCount)
};