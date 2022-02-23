const sumAll = function(int1,int2) {
    let finalSum;
    let difference;
    let large;
    if((Number.isFinite(int1) && int1 > 0) && (Number.isFinite(int2) && int2 > 0)){
        if(int1 > int2){
            difference = int1 - int2;
            large = int2;
            finalSum = int2;
        }else{
            difference = int2 - int1;
            large = int1;
            finalSum =int1;
        }
    
        for(i = large; i <= difference; i++){
            nextInt = i + 1;
            finalSum += nextInt;
    
        }
    
        return finalSum;
    }else{
        return 'ERROR';
    }


};

// Do not edit below this line
module.exports = sumAll;
