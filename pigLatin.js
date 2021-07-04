const split = require('./utility/split');

const slice = require('./utility/slice')

function pigLatin(str) {
	str = str.toLowerCase();
	let words = split(str);
	let result = ""

	for (let i = 0; i < words.length; i++) {
		if ('aiueo'.indexOf(words[i][0]) !== -1) {
			result += words[i].concat('way')
		} else {
			result += (slice(words[i], 1) + words[i][0] + 'ay');
		}
		if (i < words.length - 1) result += " ";
	}

	return result
}

console.log(pigLatin('this is a test translation'))