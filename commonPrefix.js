let getCommonPrefix = (str) => {
  if (!str || str.length === 0 ) {
    return '';
  }

  let prefix = str[0];
  for (let i = 0; i < str.length; i++ ) {
    while (str[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (!prefix) {
        return '';
      } 
    }
  }
  return prefix;
};

function largestCommonPrefix(strs) {
  if (strs.length === 0) {
    return '';
  }
  
  let prefix = strs[0];
  
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    console.log("strs[i][j] = = == = >",strs, i, j,  strs[i][j]);
    while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
      j++;
    }
    prefix = prefix.substring(0, j);
    if (prefix === '') {
      return '';
    }
  }
  
  return prefix;
}

// Example usage
const input = ['flower', 'flow', 'floght'];
console.log(largestCommonPrefix(input)); // Output: 'fl'


const strs = ["flower","flow","flight"];
// const strs = ["f"];

// let abc = getCommonPrefix(strs);
// console.log(abc);