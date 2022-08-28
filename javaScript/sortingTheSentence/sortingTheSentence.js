/**
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function(s) {
    s = s.split(' ')
    s.sort((a,b) => a[a.length-1] - b[b.length-1])
    s = s.join(' ')
    return s.replace(/[0-9]/g, '')
};