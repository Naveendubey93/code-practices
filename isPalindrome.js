/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome2 = function(x) {
  if(x < 0) {
    return false  
  }
    let oldValue = x.toString();
    x = x.toString().split('');
    x = x.reverse().join('');
    if(x === oldValue) {
      return true  
    }    
};

var isPalindrome2 = function(x) {
  let strt = x;
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  let sum = 0;
  while (x > 0) {
    sum =  sum * 10 + x % 10;
    x = Math.floor(x / 10);
  };
  if(strt !== sum) {
    return false;
  }
   return true;
}

var isPalindrome = function(x) {
  let strt = x;
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  let sum = 0;
 
    sum =  sum * 10 + x % 10;
    x = Math.floor(x / 10);
  while (x > 0) {
    isPalindrome(x)
  };
  if(strt !== sum) {
    return false;
  }
   return true;
}

 let start = performance.now();
  // test();
  let timeTaken = performance.now() - start;
  console.log(isPalindrome(121))
  console.log("Total time taken : " + timeTaken*1000 + " milliseconds");
