function findGaps(arr, firstOnly = false) {
	let min = Math.min( ...arr )
	min = min > 0 ? min : 1
	let max = Math.max( ...arr )
	let missedArr = []

	while (min <= max) {
	   if (!arr.includes(min)) {
	   	missedArr.push(min)
	   	if (firstOnly) break
	   }
	   min++
	}
	return missedArr
}
module.exports = findGaps;
