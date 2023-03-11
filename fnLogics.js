// let arr = [-5,-4,-3,-2,-1,1,2,3,4];

class FnLogic {
	constructor (arr= [], users = []) {
		this.arr = arr;
		this.max = 0;
		this.users = users;
		this.countByAge = [];
	}
	findMax() {
		for (let i of this.arr) {
			if ( i > this.max )
			this.max = i;
		}
		// console.log("this.max = == >", this.max);
		return this.max;
	}
	get maxNum() {
		return this.max;
	}
	get maxNumByReduce() {
		this.max = this.arr.reduce((acc, curr) => {
			acc = acc > curr ? acc : curr;
			return acc;
		}, 0)
		return this.max;
	}
	get getUserCountWithAge() {
		this.countByAge = this.users.reduce((countData, curr) => {
			if (countData[curr.age]) {
				console.log("curr -age",countData[curr.age])
				countData[curr.age] += countData[curr.age];
			} else {
				countData[curr.age ] = 1
			}
			return countData
		}, {});
		return this.countByAge;
	}

	get filterWithMap() {
		return this.users.filter(x => x.age > 30).map(x=> x.firstName + " "+x.lastName);
	}
	get filterMapWithReduce() {
		// return this.users.filter(x => x.age > 30).map(x=> x.firstName + " "+x.lastName);
		return this.users.reduce((acc, curr) => {
			if (curr.age < 30) {
				acc.push(curr.firstName)
			}
			return acc;
		},[])
	}
	
	isAnagram(string1, string2) {
		if(string1.length !== string2.length ) {
			console.log("isAnagram false 0");
			return false;
		}
		let counters = {};
		for( let letters of string1) {
			// console.log("letters == = = >", letters);
			counters[letters] = (	counters[letters] || 0) + 1
			// console.log(nodeObject.keys(counters));
			// console.log("counters letters == = = >", counters[letters]);
			// console.log("counters letters == = = >", counters);
		}
		console.log("Unique strings = == ",Object.keys(counters).join(''));
		for( let letters of string2) {
			if (counters[letters])	{
				counters[letters] -= 1;
				// if(counters[letters] < 0) {
				// 	console.log("isAnagram false 1");
				// //	break;
				// }
			} else {
				console.log("isAnagram false 2" );
				
				return false;
		
			}

		}
		console.log("isAnagram true" );
	}

	getUnique (arr) {
		let newArr = []; let counter = {};
		if (arr.length > 0) {
			console.log(arr);
			let i = 0;
      while (i < arr.length ) {
				counter[arr[i]] = (counter[arr[i]] || 0 ) + 1
				if(newArr.includes(arr[i])) {
				} else {
					newArr.push(arr[i]);
				}
				i++;
			}
		} else {
			console.log("Number is not unique");
		}
		console.log(newArr);
		console.log(counter);
		// ['1,2,3,2,2,3,5,6,2,4,4,2,7']
		return newArr;

	}

	getIndex (arr, el) {
		// [1,2,3,4,5,7,9,11,13], 7);
		let min = 0;
		let max = arr.length - 1;
		while(min <= max) {
			let minIndex = Math.floor((min + max) / 2);
			console.log(minIndex, max)
			if (arr[minIndex] < el) {
				// console.log("minIndexV el", arr[minIndex], el);
				console.log("minIndexV el1",min,  minIndex, max);
				min  = minIndex + 1;
			} else if (arr[minIndex] > el) {
				// console.log("minIndex2", arr[minIndex], el);
				console.log("minIndexV el2",min,  minIndex, max);
				max  = minIndex - 1;
			} else {
				console.log("minIndexV el3",min,  minIndex, max);
				console.log("output",minIndex);
				return minIndex;
			}
		}

	}

	splitNumber  (num = 1, parts = 1) {
    let n = Math.floor(num / parts);
    const arr = [];
    for (let i = 0; i < parts; i++){
      arr.push(n)
    };
    if(arr.reduce((a, b)=> a + b,0) === num){
      return arr;
    };
    // for(let i = 0; i < parts; i++){
    // 	arr[i]++;
    // 	if(arr.reduce((a, b) => a + b, 0) === num){
    // 		return arr;
    // 	};
    // };

    let totalSum = arr.reduce((a, b) => a + b, 0);
    let totalDiff = num - totalSum;
    if(arr.length > 0) {
      arr[0] = arr[0] + totalDiff;
    }
    let i = 0;
    console.log("array on 150 line = = =>", arr);
    // while (arr.reduce((a, b) => a + b, 0) <= num) {
    //   arr[i]+= 0.1;
    //   console.log("array on 153 line  arr[i]= = =>", arr[i]);
    //   if(arr.reduce((a, b) => a + b, 0) == num){
    //     return arr;
    //   };
    // };
    return arr;
	};
	//		arr =[4,2,1,5,9];
	
	static isSorted(arr = []) {
		for( let i = 0; i < arr.length; i++) {
			if (arr[i] > arr[i+1]) {
				return false;
			}
		}
		return true;
	}
	sortArray(arr, i =0,j=1) {
		let sorted;
		console.log("function called 1======>", i, j)
		// let i = 0,j= 1;
		if (FnLogic.isSorted(arr)) {
			sorted = arr;
			console.log(sorted)
			return sorted;
		} else if (arr[i] < arr[j]) {
			console.log("function called 2 180======>", arr)
			i++;
			j++;
			this.sortArray(arr, i,j);
		} else {
			console.log("function called 3 180======>");
			[arr[i],arr[j]] = [arr[j],arr[i]];
			i = 0;
			j = 1;
			this.sortArray(arr, i, j);
			console.log("function called 4 180======>", arr)
		}
	}
	binarySearch()

}
module.exports = FnLogic;
// const users = [
// 	{ firstName: "Shen", lastName: "warn", age: 55 }	,
// 	{ firstName: "Deepika", lastName: "padukone", age:26 },
// 	{ firstName: "Akhsay", lastName: "Kumar", age:26 },
// 	{ firstName: "Donald", lastName: "trump", age:55 },
// 	{	firstName: "Elon", lastName: "musk", age:50 },
// ];

// {"26": 1,"55":1,}