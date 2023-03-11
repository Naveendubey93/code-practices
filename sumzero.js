let arr = [-5,-4,-3,-2,-1,1,2,3,4];
var pairs1 = [];
// for ( i of arr ) {
// 	for ( let j = 0; j < arr.length; j++) {
// 		if (i+j === 0) {
// 			pairs1.push({i,j})
// 			console.log("sumzero array element =>", {i, j});
// 			break;
// 		}
// 		if(pairs.length === 1)
// 		break;
// 	}
// }
// console.log("pairs array element =>", pairs);

// 2nd method
 function getSumZeroPairs (arr) {
	let l = 0, r = arr.length - 1;
	while( l < r) {
	//	console.log(arr[l],  arr[r]);
    sum = arr[l] + arr[r];
	//	console.log(sum)
		if(sum === 0) {
			console.log(arr[l], arr[r]);
			return [arr[l], arr[r]]
		}
		if (sum > 0 ) {
			r--;
		} else if (sum < 0 ) {
			l++;
		}
	//	l++;
		// li++;
		//i++;
	}

 }
 getSumZeroPairs (arr);
// var i = 0;

class GetSumZeroPairs {
	constructor(arrList=[]) {
		this.arrList = arrList;
		this.pairs = [];
	}

	getSumZeroPairsBy2n() {
		var pairs1 = [];
		for (let i of this.arrList) {
			for (let j = 0; j < this.arrList.length; j ++) {
				if (i + this.arrList[j] === 0) {
					// console.log("sumzero array element =>", {i, j: this.arrList[j]});

					pairs1.push({i, j: this.arrList[j]} );
					this.pairs =  pairs1;
					// console.log("this.pairs 1", pairs1);

					break;
				}
			}
		}
		// return pairs1;
	}

	getSumZeroPairsByn() {
		var pairs2 = [];
		let l = 0; let r = this.arrList.length -1;
		while(l < r) {
			let sum = this.arrList[l] + this.arrList[r];
			pairs2.push({ i: this.arrList[l], j: this.arrList[r] });
			this.pairs =  pairs2;
		  //	console.log("this.pairs 2", pairs2);
			if(sum > 0) {
				r--;
			} else {
				l++;
			}
		}
		// return pairs2;
	}
	get sumZeroPairs() {
		return this.pairs;
}

}


module.exports = GetSumZeroPairs;
