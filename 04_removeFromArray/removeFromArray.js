const removeFromArray = function(array, ...args) {

        for(item of args){
            if(array.includes(item)){
                array.splice(array.indexOf(item), 1);
            }else{
                continue;
            }
            
        }
        return array;
};

// Do not edit below this line
module.exports = removeFromArray;
