const split = require('./split');

function radixSort(collections) {
	let str = false
	if (typeof collections === 'string') {
		str = true
		collections = split(collections, '');
		collections = collections.map((char) => char.codePointAt(0))
	}
	
	let digitCount = longestDigit(collections);
	let bucket = [];
	for (let i = 0; i < 19; i++) {
		bucket.push([])
	}
	let num, result = collections;;

	for (let i = 0; i < digitCount; i++) {
		for (let j = 0; j < result.length; j++) {
			num = getDigit(result[j], i)
			if (result[j] < 0) {
				bucket[-num + 9].push(result[j]);	
			} else {
				bucket[num + 9].push(result[j]);
			}
			
		}
		result = [];

		for(let i = 0; i < bucket.length; i++) {
			result.push(...bucket[i]);
			bucket[i] = [];
		}
	}
	if (str === true) {
		result = result.map(num=> String.fromCodePoint(num))
	}
	
	return result;
}

function getDigit(num, index) {
	num = String(Math.abs(num));
	let target = (num.length - 1) - index;

	return target >= 0 ? +num[target] : 0
}

function longestDigit(numArr) {
	return String(Math.max(...numArr)).length;
}

module.exports = radixSort;
