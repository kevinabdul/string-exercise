function slice(str, start, end=str.length) {
	let result = '';

	for (let i = start; i < end; i++) {
		result += str[i]
	}
	return result;
}

module.exports = slice