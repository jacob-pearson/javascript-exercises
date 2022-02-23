const repeatString = function(string, num) {
    const stringArray = [];
    let returnString = '';
    if(num < 0){
        returnString = 'ERROR';
    }else{
        let i = 0;
        while(i < num){
            stringArray.push(string);
            i++;
        }
        returnString = stringArray.join('');
    }

    return returnString;

    
};


// Do not edit below this line
module.exports = repeatString;
