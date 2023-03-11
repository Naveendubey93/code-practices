function countUnique(nums) {
  let i = 0;
  for (j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j] ) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i+1;
}
let nums = [1,2,2,4,6,7,8,9,11,11,11,12];

console.log(countUnique(nums));

//possible way [map table--]