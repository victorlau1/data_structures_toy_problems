var lengthOfLongestSubstring = function(s) {

  let strObj = {};
  let maxCounter = 0;
  let counter = 0;
  
  for (let i = 0; i < s.length; i++){
      if (!strObj[s[i]]){
          strObj[s[i]] = i + 1;
          counter++;
      } else {
        i = strObj[s[i]]
        strObj = {};
        strObj[s[i]] = i + 1;
        counter = 1;        
      } 
      maxCounter = counter > maxCounter ? counter : maxCounter
  } 
  return maxCounter;
};

console.log(lengthOfLongestSubstring('abadacf'));
