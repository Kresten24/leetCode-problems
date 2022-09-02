/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
 var countMatches = function(items, ruleKey, ruleValue) {
    let itemDescription = {
        'type': 0,
        'color': 1,
        'name': 2
    }
    let count = 0
    for(let i = 0; i<items.length; i++){
        items[i][itemDescription[ruleKey]] === ruleValue ? count++ : count
    }
    return count
};