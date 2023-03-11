// const sum = (a) => {
// 	return function (b) {
// 		if(b) {
// 			// console.log(a+b)
// 			return sum (a+b)
// 		}
// 		return a;
// 	}
// }

function sum (a)  {
	return function b (b) {
		if(b) {
			// console.log(a+b)
			return sum (a+b)
		}
		return a;
	}
}
sum(1)(2)(3)(4)();
console.log(sum(1)(2)(3)(4)());