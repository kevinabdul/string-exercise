function join(arr, sep=', ', finalSep=`${sep}and `) {
	let result = '';
	let len = arr.length;

	for (let i = 0; i < len; i++) {
		try {
			result += arr[i]
			if (i === len - 2) {
				result += finalSep
				continue;
			}
			if (i < len - 1) {
				result += sep;
			}
		} catch(err) {
			if (err) console.log(err);
			return;
		}
	}

	return result;
}

module.exports = join;