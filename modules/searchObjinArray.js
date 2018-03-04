function searchObjInArray(arr,obj) {
    let isFound = false,foundIndex = -1;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        for (const key in obj) {
            if (element.hasOwnProperty(key)) {
                if (element[key] == obj[key]) {
                    isFound = true;
                    foundIndex = index;
                    break;
                } else {
                    
                }
            } else {

            }
        }
    };
    return foundIndex;
    /* if (isFound) {
        return 
    } else {
        
    } */
}

module.exports.searchObjInArray = searchObjInArray;