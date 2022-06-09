const palindromes = function (s) {
    s = s.replace(/ /g, '')
    s = s.replace('.','')
    s = s.replace('!','')
    s = s.replace(/,/g,'')
    s = s.replace('?','')
    s = s.toUpperCase()

    let stringArray = s.split('')
    let testArray = s.split('').reverse()
    return Array.isArray(stringArray) && Array.isArray(testArray) &&
    stringArray.length === testArray.length &&
    stringArray.every((val, index) => val === testArray[index])

};


// Do not edit below this line
module.exports = palindromes;
