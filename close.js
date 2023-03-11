// function x(a) {
// 	// var a = 5;
// 	return function y (b) {
// 			console.log(a + b);
// 			 return function z (c) {
// 				console.log(a + b +c);
// 			 }
// 	}
// }


// x(5)(6)(1);

// function counter() {
// 	var v = 1;
// 	return function increment () {
// 		++ v;
// 		console.log("increment cunter: v:", v);
// 	}
// }
// let incCounter = counter()
// incCounter();

function Counter() {
	var v = 1;
	this.increment = () =>{
		console.log("incresement counter value", v)
		return ++v;
	}

	this.decrement = () => {
		console.log("decrement counter value", v)
		return --v;
		}
	// this.decrement() = --v;

}
let count = new Counter()
count.increment();
count.increment();

count.decrement();
count.decrement();
