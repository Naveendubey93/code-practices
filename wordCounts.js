/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
  //using reduce
  if (!strs.length){
    return false;
  }
  let arr = strs.split('');
  let res = arr.reduce((acc, curr) => {
    if(acc[curr]) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  },{})
 // return res;
// without using predefined functions
 res = {};
  arr.forEach(el => {
    if(res[el]) { 
      res[el] += 1 
    } else {
      res[el] = 1
    } 
  });
  return res;


};
let input = 'akjdccdkonvdjekanvinfdjkisnidsj';
// input = 'a';
let res = longestCommonPrefix(input);
console.log("res = == = = >", res);