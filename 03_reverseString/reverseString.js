const reverseString = function(string) {
    let stringArray = string.split("");
    let reverseStringArray = [];
    for(char of stringArray){
        reverseStringArray.unshift(char);
   }
   return reverseStringArray.join('');


};

// Do not edit below this line
module.exports = reverseString;
