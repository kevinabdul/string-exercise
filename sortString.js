const radixSort = require('./utility/radixSort');

const join = require('./utility/join');

// time complexity of n * (k + 19) ~ n * k
let radixVersion = radixSort('mengapa dia berjalan sementara zebra berlari?')

// Or you can just use built-in sort that possibly use mergesort(n * logn) or an insertion sort(n^2)

let builtInVersion = 'mengapa dia berjalan sementara zebra berlari?'.split('').sort((a,b) => a.codePointAt(0) - b.codePointAt(0))


console.log(join(radixVersion) === join(builtInVersion))

