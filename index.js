const SumZero = require("./sumzero");
const FnLogic = require("./fnLogics");

function a () {
	// var a  = 1;
	for (var i = 1; i <= 5; i++ ) {
		function close(i) {
		setTimeout( function()  {
			console.log(i,"afters ",i* 1000) 
		}, i* 1000);
		console.log("Hello nextline 9");

	}
		close(i)
	}

}
// a();
let arr = [-5,-4,-3,-2,-1,1,2,3,4];
const sumZeroPairs = new SumZero(arr);
sumZeroPairs.getSumZeroPairsBy2n()
sumZeroPairs.getSumZeroPairsByn()
// console.log(sumZeroPairs.sumZeroPairs)
const users = [
	{ firstName: "Shen", lastName: "warn", age: 55 }	,
	{ firstName: "Deepika", lastName: "padukone", age:26 },
	{ firstName: "Akhsay", lastName: "Kumar", age:26 },
	{ firstName: "Donald", lastName: "trump", age:55 },
	{	firstName: "Elon", lastName: "musk", age:50 },
];
const num = 100;
const parts = 3;
const fnLogics = new FnLogic(arr, users);
// fnLogics.findMax();

// console.log("findMax = == = = =>", fnLogics.findMax());
// let maxNum =  fnLogics.maxNum;
// console.log("maxNum = == = = =>", fnLogics.maxNum);
// console.log("maxNumByReduce = == = = =>", fnLogics.maxNumByReduce);


// fnLogics.isAnagram('hello', 'llleo');
// fnLogics.getUnique([1,2,3,2,2,3,5,6,2,4,4,2,7]);
// fnLogics.getIndex([1,2,3,4,5,7,9,11,13], 7);
// console.log(fnLogics.splitNumber(num, parts));
fnLogics.sortArray([3,2,5,1,9]);
// fnLogics.isSorted([[3,2,5,1,9]]);


