const slice = require('./slice.js')

function split(str, separator=" ") {
	separator = String(separator)
	let sliceStart = 0;
	let result = [];

	for (var current = 0; current < str.length; current++) {
		if (slice(str, current, current + separator.length) === separator) {
			let word = slice(str, sliceStart, current)
			if (word !== '') {
				result.push(word)
			}
			sliceStart = current + separator.length
		}
	}
	
	if (sliceStart < str.length) {
		result.push(slice(str, sliceStart))
	}

	return result;
}

module.exports = split;