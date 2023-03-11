/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let common = '';
  if(strs.length > 1) {
    for(let i = 0; i <= strs.length-2; i++) {
      if(strs[i].charAt(i) !== strs[i+1].charAt(i)) {
        return;
      } else {
        common += strs[i].charAt(i);
      }
    }
    return common;
  } else {
     return strs[0];
  }
};
function longestCommonPrefix2(strs) {
  if (!strs || strs.length === 0) {
    return '';
  }
  let prefix = strs[0];  //flower
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) { // //flower bypassed, flow and flight
      // flow with flower ===> -1 ==> flight
      // flow with flowe ===> -1, flight with flower  ==> -1
      // flow with flow ===>0 common=> flow,  flight with flowe  ==> -1
      // flight with flow => -1, flight with flo => -1, flight with fl => 0
      prefix = prefix.slice(0, -1);
      if (!prefix) {
        return '';
      }
    }
  }
  return prefix;
}

const strs = ["flower","flow","flight"];
// const strs = ["fle"]
// const strs = ["flower","flow","flight","r"]
// const strs = ["flower","flower","flowe","flower"]
let common = longestCommonPrefix2(strs);
// console.log("common == = == = >", common)
