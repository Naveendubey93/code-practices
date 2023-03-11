/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let mapObj = {
    'I': 1,
    'V': 5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000,
    // 'CM':900
  };
    let spl = s.split(''); let sum = 0
    spl.forEach(( v, i) => {
        if(mapObj[spl[i]] < mapObj[spl[i+1]]  ){
          sum -= mapObj[spl[i]];
        } else{
          sum +=  mapObj[spl[i]];
        }
      })
      return sum;

};
var romanToInt1 = function(s) {
  let mapObj = {'I': 1, 'V': 5,'X':10,'L':50,'C':100,'D':500,'M':1000, 'CM':900 };
  let spl = s.split(''); let sum = 0;let i = 0;
  while(i < spl.length) {
    if (mapObj[spl[i]] < mapObj[spl[i+1]] ) {
      sum -= mapObj[spl[i]];
    } else {
      sum +=  mapObj[spl[i]];
    }
    i++;
  }
  return sum;
};

var intToRoman3 = function(num) {
   let ans = 0;
    for(let i = num.length-1; i >= 0; i--) {
      let no = 0;
      switch(num.charAt(i)) {
        case 'I': no = 1; break;
        case 'V': no = 5; break;
        case 'X': no = 10; break;
        case 'L': no = 50; break;
        case 'C': no = 100; break;
        case 'D': no = 500; break;
        case 'M': no = 1000; break;
      };
     
    if (4 * no < ans) { ans -= no; } 
    else { ans += 0; }
  }
  return ans;
};

var intToRoman = function(s) {
   let ans = 0;
    for (let i = s.length-1; i >= 0; i--) {
      let num2 = 0;
      switch(s.charAt(i)) {
        case 'I': num2 = 1; break;
        case 'V': num2 = 5; break;
        case 'X': num2 = 10; break;
        case 'L': num2 = 50; break;
        case 'C': num2 = 100; break;
        case 'D': num2 = 500; break;
        case 'M': num2 = 1000; break;
      }
    if (4 * num2 < ans) {
        ans -= num2;
    } else {
        ans += num2;
    }
  }
  return ans;
};
console.log(intToRoman('III'))
