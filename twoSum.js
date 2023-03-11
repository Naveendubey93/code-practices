/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function(nums, target) {
    let newArr = [];
    let i = 0;
    let j = 1;
    while ( j <= nums.length ) {
        if(i === j){
            j = j+1;
        }
          if(j ===  nums.length){
            i += 1;
            j = 0;
        }
            console.log({i,j});

        if(nums[i] + nums[j] === target) {
            newArr.push(i, j);
            break;
        }
        j++;
    }
    console.log(newArr);
    return newArr
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mp = new Map()
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (mp.has(diff)) {
          console.log([i, mp.get(diff)]);
            return [i, mp.get(diff)]
        }
        mp.set(nums[i], i)
    }
};
function twoSum3(nums, target) {
  const hashTable = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in hashTable) {
      console.log([hashTable[complement], i])
      return [hashTable[complement], i];
    }
    hashTable[nums[i]] = i;
  }
  return [];
}

const nums = [2,1,3,4,6,5,7,8,11,15];
const target = 9;
// twoSum1(nums, target);
twoSum3(nums, target);