/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
 var countConsistentStrings = function(allowed, words) {
	allowed = new Set(allowed);

	return words.reduce((acc, curr) => {
		return [...curr].every(str => allowed.has(str)) ? acc += 1 : acc;
	}, 0);

};