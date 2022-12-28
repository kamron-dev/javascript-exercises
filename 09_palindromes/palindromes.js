const palindromes = function (string) {
const formattedString = string.toLowerCase().replace(/[^a-z]/g, "")    
return formattedString.split('').reverse().join('') === formattedString
    
};



// Do not edit below this line
module.exports = palindromes;
